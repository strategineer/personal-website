#!usr/bin/python3
import re
import json
import sys
from collections import defaultdict

WORD_REGEX = re.compile(r"^[a-zA-Z]+$")

with open('/usr/share/dict/words', 'r') as file:
    words = file.readlines()

# examples:
# Eggsquis, Eggcetera, Eggspectation, Eggspertise

words = [w.strip().lower() for w in words]
words = [w for w in words if WORD_REGEX.fullmatch(w)]
puns = [f"Eggs{w[2:]}" for w in words if w.startswith("ex")]

puns = list(set(puns))

puns = sorted(puns)


print(json.dumps(puns, indent=2))

