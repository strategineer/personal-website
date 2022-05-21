---
title: "Everyone is John and/or George"
is_readable: true
---
# How to Play

The GM reveals John's tagline to players, setting the scene and giving a bit of context for the adventure John will be going on.

The PCs talk through and create their Voices' skills (GM must approve all skills) using the following command:

~~~
/set skills skill1: Drinking excessive amounts of Pilk skill2: Making Pilk
~~~

- Choose 2 skills, gain 10 Willpower
- Choose 3 skills, gain 7 Willpower
- For maximum fun, don't pick skills that are similar to skills that other players have

~~~
/set skills skill1: Drinking excessive amounts of Pilk skill2: Making Pilk skill3: Quick Reflexes
~~~

Each PC must secretly send their obsessions to the GM for approval beforehand, some private back-and-forth may occur to make them just right).

- Obsessions are the insane (and sometimes nonsensical) drives of each Voice. Completing them rewards points.
- Each level of obsession should be progressively harder to achieve.
- Each should be relatively simple and written in a short sentence.

~~~
/whisper secret: can I be obsessed about Pilk?
// GM responds verbally: "Yes"
~~~

When a PC's three obsessions have been approved by the DM, the PC will use the command below to set their Level 1, 2 and 3 Obsessions.

~~~
/set obsessions obsession1: Drink Pilk obsession2: Get somebody else to drink Pilk obsession3: Drink Pilk made from fresh milk you've milked from a cow yourself
~~~

Play begins.

# FAQ

## Telling Secrets
Use the following command to whisper secrets to the GM.

~~~
/whisper secret: I just achieved my obsession level 3, wake up you cunt
~~~


## Willpower
- Each Voice starts with 10 (or 7 if they've chosen 3 skills) willpower
- PCs spend their Voice's willpower in 2 ways:
  - In [Tests for Control](#tests-for-control), to assert their dominance and take control of John.
  - To improve the chances of their [Skill Checks](#skill-checks) succeeding

~~~
/view willpower
~~~

## Skill Checks
- Roll a six-sided die:
  - Succeed on a 3 or better for skills you have
  - Succeed on a 6 for skills you don't have

~~~
/roll
~~~

- Before the roll, you can spend Willpower to add a +1 to the result

~~~
/roll willpower: 2
~~~

## Tests for Control
Tests for control occur when:

- John wakes up. (Yes… this also means at the start of the session.)
- John is injured.
- Any Obsession is completed (by any Voice).
- Any Check is failed.
- John Gets Distracted and Falls Asleep.
  - Whenever nothing exciting is happening for ten minutes or more in game time (John goes on a bus ride, for example), the GM can opt to roll 1d6. On a roll of 4 or higher, John goes to sleep and wakes up in a new situation (prompting a Test for Control of John). When John naps like this, all the Voices gain 1 Willpower. The GM taking control of John in this way is unusual, and the PCs should be rewarded when that happens.

If a PC would like to bid more than 0 willpower in a test for control, they do so with the following command:

~~~
/set bid willpower: 1
~~~

The Voice with the highest bid takes control of John. If multiple Voices tie for the highest bid, then dice are rolled to see who becomes the active Voice.

The Voice who becomes active loses the amount of Willpower they bid. All others keep their bids.

## Winning
You win by having the most points when no more voices have any willpower and a test for control occurs. You gain points by achieving as many of your obsessions as possible. Achieving a level 1 obsession rewards you 1 point, a level 2 obsession 2 points and a level 3 obsession 3 points.

An obsession can be completed at any time, whether or not your Voice is currently in control.

Whenever any Voice achieves an obsession, a test for control occurs. The GM should usually be aware of when this happens and start a test for control on their own but feel free to secretly nudge him if he forgets (there's a lot of obsessions for him to keep track of).
