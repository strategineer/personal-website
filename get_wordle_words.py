#!usr/bin/python3
import re
import json
import sys
from collections import defaultdict

ENGLISH_LETTER_FREQUENCY_IN_DICTIONARIES_DICT = {
    "e": 11,
    "s": 8.7,
    "i": 8.2,
    "a": 7.8,
    "r": 7.3,
    "n": 7.2,
    "t": 6.7,
    "o": 6.1,
    "l": 5.3,
    "c": 4,
    "d": 3.8,
    "u": 3.3,
    "g": 3,
    "p": 2.8,
    "m": 2.7,
    "k": 2.5,
    "h": 2.3,
    "b": 2,
    "y": 1.6,
    "f": 1.4,
    "v": 1,
    "w": 0.91,
    "z": 0.44,
    "x": 0.27,
    "q": 0.24,
    "j": 0.21
}


def compute_wordle_value(counters, s):
    n = 0
    if len(s) != len(set(s)):
        # duplicates are bad
        n -= 1.0
    for i in range(len(s)):
        n += counters[i][s[i]]
    return n


WORD_REGEX = re.compile(r"^[a-zA-Z]{5}$")

with open('/usr/share/dict/words', 'r') as file:
    words = file.readlines()


words = [w.strip().lower() for w in words]
words = [w for w in words if WORD_REGEX.fullmatch(w)]
words = list(set(words))


counters = [defaultdict(int) for _ in range(5)] 

for w in words:
    for i in range(len(w)):
        counters[i][w[i]] += 1

n_words = len(words) * 1.0
for c in counters:
    for k in c.keys():
        c[k] = round(c[k] / n_words, 6)
        
#for i in range(len(counters)):
    #print(f"counters: {i}")
    #print(list(reversed(sorted([(v, k) for k, v in counters[i].items()]))))


words = [(compute_wordle_value(counters, w), w) for w in words]

words = reversed(sorted(words))

print(json.dumps({w: v for (v, w) in words}, indent=2))

