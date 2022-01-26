#!usr/bin/python3
import re
import json
import sys

BOOK_REGEX = re.compile(r"Book [0-9]+")
POINT_REGEX = re.compile(r"[0-9]+\.")
ARTIFICIAL_LINE_BREAK_REGEX = re.compile(r"([a-zA-Z\- ]|,)\n+([a-zA-Z ])")

with open('secret/meditations.txt', 'r') as file:
    data = file.read()


books = []
books = BOOK_REGEX.split(data)
n_book = 1
points = {}
for b in books:
    n_point = 1
    ls = POINT_REGEX.split(b)[1:]
    for p in ls:
        p = p.strip()
        if p.startswith("1."):
            p = p[2:]
        has_artificial_line_break = ARTIFICIAL_LINE_BREAK_REGEX.search(p)
        if has_artificial_line_break:
            pass
            #print(f"PRE\n{p}")
        p = ARTIFICIAL_LINE_BREAK_REGEX.sub(r"\1 \2", p)
        if has_artificial_line_break:
            pass
            #print(f"POST\n{p}")
        points[(n_book, n_point)] = p
        n_point += 1
    n_book += 1


formatted_points = [f"{b}.{p}\n{points[(b, p)]}" for b, p in points.keys()]
print(json.dumps(formatted_points, indent=2))
