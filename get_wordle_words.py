#!usr/bin/python3
import re
import json
import sys

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


def compute_wordle_value(s):
    if len(s) != len(set(s)):
        return -1
    n = 0
    for c in s:
        n += ENGLISH_LETTER_FREQUENCY_IN_DICTIONARIES_DICT[c]
    return n



WORD_REGEX = re.compile(r"^[a-zA-Z]{5}$")

with open('/usr/share/dict/words', 'r') as file:
    words = file.readlines()

words = [w.strip().lower() for w in words]
words = [w for w in words if WORD_REGEX.fullmatch(w)]
words = list(set(words))
words = [(compute_wordle_value(w), w) for w in words]

words = reversed(sorted(words))

print(json.dumps({w: v for (v, w) in words}, indent=2))

