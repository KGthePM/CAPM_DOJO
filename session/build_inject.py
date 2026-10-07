#!/usr/bin/env python3
"""Inject real lesson + quiz content into the dojo web app."""
import json, os, re, sys

DOJO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def md_to_html(text):
    """Convert lecture markdown to a list of HTML blocks."""
    lines = text.split("\n")
    blocks, para, bullets = [], [], []

    def flush_para():
        if para:
            blocks.append("<p>" + " ".join(para) + "</p>")
            para.clear()

    def flush_bullets():
        if bullets:
            blocks.append("<ul>" + "".join(f"<li>{b}</li>" for b in bullets) + "</ul>")
            bullets.clear()

    def inline(s):
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"(?<!\*)\*([^*]+?)\*(?!\*)", r"<em>\1</em>", s)
        s = re.sub(r"`([^`]+?)`", r"<code>\1</code>", s)
        return s

    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            flush_para(); flush_bullets(); continue
        if line.startswith("### "):
            flush_para(); flush_bullets(); blocks.append(f"<h3>{inline(line[4:])}</h3>")
        elif line.startswith("## "):
            flush_para(); flush_bullets(); blocks.append(f"<h2>{inline(line[3:])}</h2>")
        elif line.startswith("# "):
            continue  # doc title handled separately
        elif re.match(r"^\s*-\s+", line):
            flush_para()
            bullets.append(inline(re.sub(r"^\s*-\s+", "", line)))
        else:
            flush_bullets()
            para.append(inline(line))
    flush_para(); flush_bullets()
    return blocks

def split_key_terms(md):
    """Extract Key Terms section into [{term, definition}]."""
    m = re.search(r"##\s*Key Terms.*?\n(.*)", md, re.S)
    if not m:
        return []
    terms = []
    for line in m.group(1).split("\n"):
        tm = re.match(r"^\s*-\s+\*\*(.+?)\*\*[:.]?\s*[—-]?\s*(.+)$", line)
        if tm:
            terms.append({"term": tm.group(1).strip(),
                          "definition": re.sub(r"\*\*?", "", tm.group(2).strip())})
    return terms

def load_lesson(fid, path):
    md = open(path).read()
    title = re.match(r"#\s+(.+)", md).group(1)
    title = re.sub(r"^LEC-\d+\s*[—-]\s*", "", title).strip()
    html = md_to_html(md)
    kt = split_key_terms(md)
    return {"id": fid, "title": title, "professor": "Professor Ainsworth",
            "lectureHtml": html, "keyTerms": kt}

import glob

lesson_files = sorted(glob.glob(f"{DOJO}/lessons/LEC-*.md"))
lessons = [load_lesson(f"lec-{i+1:02d}", p) for i, p in enumerate(lesson_files)]
quiz = []
# qb_lec_check.json holds lecture-check questions (tagged with "lecture"):
# excluded from the general QUIZ array — they only surface in Lecture Check mode.
lec_check = []
for qb in sorted(glob.glob(f"{DOJO}/quiz_bank/qb_*.json")):
    if os.path.basename(qb) == "qb_lec_check.json":
        lec_check.extend(json.load(open(qb)))
    else:
        quiz.extend(json.load(open(qb)))

lec_check_by_lesson = {}
for q in lec_check:
    lec_check_by_lesson.setdefault(q["lecture"], []).append(q)

# normalize each lesson's check to exactly 5 questions, ordered by id
lec_check_js = {}
for lid in [l["id"] for l in lessons]:
    qs = sorted(lec_check_by_lesson.get(lid, []), key=lambda q: q["id"])
    if len(qs) != 5:
        print(f"WARNING: lecture check for {lid} has {len(qs)} questions (expected 5)", file=sys.stderr)
    lec_check_js[lid] = qs

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

lesson_js = ",\n".join(
    "  {\n    id: %s,\n    title: %s,\n    professor: %s,\n    lectureHtml: [\n%s\n    ],\n    keyTerms: %s\n  }" % (
        js_str(l["id"]), js_str(l["title"]), js_str(l["professor"]),
        ",\n".join("      " + js_str(p) for p in l["lectureHtml"]),
        json.dumps(l["keyTerms"], ensure_ascii=False, indent=6).replace("\n", "\n    "))
    for l in lessons)

quiz_js = ",\n".join(
    "  {\n    id: %s, domain: %s, difficulty: %s,\n    stem: %s,\n    options: %s,\n    answer: %d, explanation: %s\n  }" % (
        js_str(q["id"]), js_str(q["domain"]), js_str(q["difficulty"]),
        js_str(q["stem"]), json.dumps(q["options"], ensure_ascii=False, indent=6).replace("\n", "\n    "),
        q["answer"], js_str(q["explanation"]))
    for q in quiz)

lec_check_body = ",\n".join(
    "  {\n    id: %s,\n    questions: [\n%s\n    ]\n  }" % (
        js_str(lid),
        ",\n".join(
            "      {\n        id: %s, domain: %s, difficulty: %s,\n        stem: %s,\n        options: %s,\n        answer: %d, explanation: %s\n      }" % (
                js_str(q["id"]), js_str(q["domain"]), js_str(q["difficulty"]),
                js_str(q["stem"]), json.dumps(q["options"], ensure_ascii=False, indent=10).replace("\n", "\n    "),
                q["answer"], js_str(q["explanation"]))
            for q in qs))
    for lid, qs in lec_check_js.items())

html = open(f"{DOJO}/web/index.html").read()

def replace_block(html, varname, new_body):
    start = html.index(f"const {varname} = [")
    # find matching closing "];" — scan bracket depth from the '['
    i = html.index("[", start)
    depth = 0
    for j in range(i, len(html)):
        if html[j] == "[":
            depth += 1
        elif html[j] == "]":
            depth -= 1
            if depth == 0:
                end = html.index(";", j) + 1
                return html[:start] + f"const {varname} = [\n{new_body}\n];" + html[end:]
    raise ValueError(f"no closing bracket for {varname}")

html = replace_block(html, "LESSONS", lesson_js)
html = replace_block(html, "QUIZ", quiz_js)
html = replace_block(html, "LECTURE_CHECKS", lec_check_body)
open(f"{DOJO}/web/index.html", "w").write(html)

print(f"lessons injected: {[(l['id'], len(l['lectureHtml']), 'blocks', len(l['keyTerms']), 'terms') for l in lessons]}")
print(f"quiz injected: {len(quiz)} questions")
print(f"lecture checks injected: { {lid: len(qs) for lid, qs in lec_check_js.items()} }")
