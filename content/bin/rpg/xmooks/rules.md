---
title: "X-Mooks Rules"
is_readable: true
no_search: true
is_rpg: true
---

X-Mooks is my homebrew OSR-compatible rule system.

<!--more-->

It's HEAVILY based on:

- [Many Rats on a Stick by Skerples](https://coinsandscrolls.blogspot.com/2019/10/osr-glog-based-homebrew-v2-many-rats-on.html). [PDF](/rpg/many_rats_on_stick_v2.pdf). If there's something missing here, namely Wizard Schools, refer to that document to find some, if nothing speaks to you there refer to the [Extra Resources section](#extra-resources) for more options.
- [Goblin Punch's The GLOG: Wizard rules](https://goblinpunch.blogspot.com/2016/09/the-glog-wizards.html)

# Core Rules

The X-Mooks rules are designed for old-school D&D-like games. They are broadly compatible with most published Old School Revival (OSR) products (i.e. equally incompatible with all of them). The main goal is to create a system that is:

1. Intuitive for new players.
2. Adaptable and hackable.
3. Compact.

The rules assume you know what an RPG is, what dice are, and the basics of OSR games, and how to adjudicate rules on the fly. Rather than a complete system, this hack is designed to allow experience GMs to run games for experienced players.

If you're a player, [start with the Introduction for New Players section](#introduction-for-new-players). If you want more detail on how a particular system works, refer to the [table of contents](#table-of-contents) or Control+F to search for info.

If you're a GM, [start with the GM guidance section](#gm-guidance).

# Table of Contents

{{< toc >}}

## GM Guidance

Only roll or call for a roll if both success and failure are interesting. If failure is inevitable because of the fiction, don't roll. A PC can't test Strength to flap their arms and fly to the moon. If failure is boring, don't roll. If the PCs fail to pick a simple mundane lock, and they have all the time in the world, they'll just keep rolling until they succeed. Just let them open it or apply a time penalty. If the PCs not spotting something means they'll never see it, just tell them what they see. No rolls required.

Failed rolls have consequences. The most obvious one is time. Wasted time means more chances for bad things to happen to the PCs.

Roll sparingly. Because stats are randomly generated and assigned, it's possible two PCs in the same party will have vastly different chances of performing the same task. Minimize this by using Attack and Save (which are the same for most PCs at the same level), automatic failures, and automatic successes.

From a player's point of view, a roll is a risk. Testing Strength to leap across a chasm is risky. Putting a ladder across a chasm and climbing across is less risky and does not require a roll. Fighting is a risk. Avoiding the fight entirely may not require a roll.

## The Core Mechanic

Almost everything is based on rolling a {{< rpg_roll "1d20" >}}. If you roll equal to or under a target number, you succeed. Roll over, and you fail.

Throughout the text, whenever you see "Roll under...", it means "Roll equal to or under...".

## Skills

Skills are just a word that describes something a PC knows how to do. There are no specific rules for using them. You may call for rolls under Intelligence or another stat, but in general, just let the PC with the skill do the thing the skill describes.

| Stat | Bonus | Stat | Bonus | Stat | Bonus |
| ---- | ----- | ---- | ----- | ---- | ----- |
| 1    | -3    | 9    | 0     | 17   | 2     |
| 2    | -3    | 10   | 0     | 18   | 3     |
| 3    | -2    | 11   | 0     | 19   | 3     |
| 4    | -2    | 12   | 1     | 20   | 3     |
| 5    | -2    | 13   | 1     | 21   | 4     |
| 6    | -1    | 14   | 1     | 22   | 4     |
| 7    | -1    | 15   | 2     | 23   | 4     |
| 8    | -1    | 16   | 2     | 24   | 5     |
{.table .table-striped .table-bordered .table-sm}

## Stats

Characters have 6 stats. Each stat has a "bonus", which is a sort of shorthand condensation of a stat. Don't add the bonus to rolls.

**Strength**: Roll under Strength to open doors, tear apart chains, or climb a cliff. The number of items a character can carry is determined by their Strength score. The damage a character inflicts in melee combat is modified by their Strength bonus.

**Dexterity**: Roll under Dexterity to dodge traps, leap over obstacles, or perform delicate tasks under pressure. A character's Defense, Movement, and Stealth are modified by their dexterity bonus.

**Constitution**: Roll under Constitution to resist cold, disease, fatigue, drowning, and poison. A character's Hit Points are based on their Constitution.

**Intelligence**: Roll under Intelligence to solve difficult puzzles, read obscure texts, or identify items and treasure.

**Wisdom**: Roll under Wisdom to see through lies, spot hidden dangers, and avoid mind-altering spells. Characters will also use Wisdom to determine the order of combat.

**Charisma**: Roll under Charisma to flatter, beguile, or barter. A character's Save is modified by their Charisma bonus.

## Associated Numbers

**Attack**: Starts at 11. Increases with level. Roll under Attack, opposed by the enemy's Defense, to hit.

**Defense**: `10 + Dex. Bonus OR bonus from armour`. Leather is +2, Chain is +4, Plate is +6, a shield is +1.

**Movement**: `12 + Dex. Bonus - Armour penalty`. How fast a character can move. Penalized by armour (-0 for Leather, -2 for Chain, -4 for Plate).

**Stealth**: `5 + Dex. Bonus - Armour penalty`. Applied as a penalty to opponents Wisdom to see if a character is noticed. Penalized by armour (-0 for Leather, -2 for Chain, -4 for Plate).

**Save**: `5 + Cha. Bonus`. Increases with level. If an effect, attack, or challenge doesn't fall under any of the other stats or values, roll Save. This represents a character's luck and determination to resist the cruel hand of fate.

## Opposed Rolls

A character or NPC must roll equal to or under their stat, modified by `10-[the relevant stat of their opponent]`.

E.g. Shoving. The PC has 11 Strength, the orc has 14 Strength. The PC needs to roll a 7 or less to succeed (`11 + [10-14]`).

Chess. The PC has a Intelligence of 6, the goblin has an Intelligence of 4. The PC needs to roll a 12 or less to succeed.

Racing. The PC has a Movement of 12, the gladiator has a Movement of 14. The PC must roll under 8 to thoroughly beat the gladiator in a race.

## Adjudicating Rolls

A -4 penalty is approximately the same as "reroll and take the worse of the two results." A +4 bonus is approximately the same as "reroll and take the better result."

Apply bonuses or penalties to rolls as needed. Go as far as you need to go, bearing in mind that if you're adding enough bonuses or penalties rolling may be pointless.

# Combat

## Combat

Switch to combat rounds when it looks like someone might get hurt.

If someone (or a group) attacks by surprise, they get to act before any Initiatives are rolled for the round. Once all ambushers have acted, everyone rolls for Initiative.

## Initiative

Each round of combat, a PC must roll under their Wisdom. If they succeed, they act before their enemies. If they fail, they act afterwards. They act in order of their rolls, lowest to highest. Some particularly quick enemies might impose a penalty on PCs' Wisdom, or act twice in each round.

## On Their Turn

A PC or enemy can do one of the following:

- Make an Attack roll against a target.
- Run about 50'+Movement (or 60').
- Make a charge attack against a target (Move 20'+Movement and then make an Attack roll).
- Cast a spell or activate a magic item.
- Retrieve an item from a non-quickdraw slot.
- Reload a crossbow, etc.
- Try to trip, shove, or push a target.
- Attempt to remove a Fatal Wound from a dying ally.

In addition, a PC or enemy can move 20'+Movement (or 30').

Talking, shouting, or dropping an item can be done freely, and possibly even in other peoples' turns. Basically, you can do one big thing a turn, plus move a bit.

## Attack Rolls

Roll under Attack, opposed by the enemy's Defense, to hit.

E.g. A 1st-level Thief with Attack 11 tries to hit a goblin with no armour. The Thief has to roll under 11.

A 1st-level Thief with Attack 11 tries to hit a very nimble tiger (armour as chain). The Thief has to roll under 7 (`11+ [10-14]`).

Other effects (drunkenness, fog, being on fire, etc.) may impose penalties to Attack.

Ranged weapons get -1 to Attack for every 10' beyond their listed range.

Most spells do not require an Attack roll. If a spell does require one, it will be noted in the spell's description. Touching an unwilling target always requires an Attack roll.

## Critical Successes and Failures

On an unmodified Attack roll of 1, the attack deals double damage (roll twice the number of dice and add any bonuses twice).

On an unmodified Attack roll of 20, the attack automatically misses. Further penalties may apply if the situation is risky. A critical failure in a one-on-one fight in a clear meadow might just be a miss. A critical failure in a tight corridor, with allies and enemies jostling together, might result in an ally being hit, a weapon being dropped, or the attacker falling prone.

## Damage

- **Light weapons** (daggers) deal {{< rpg_roll "1d6" >}} + Strength bonus damage.
- **Medium weapons** (swords) deal {{< rpg_roll "1d8" >}} + Strength bonus damage if wielded in one hand or {{< rpg_roll "1d10" >}} + Strength bonus damage if wielded in both hands.
- **Heavy weapons** (hammers) deal {{< rpg_roll "1d12" >}} + Strength bonus damage but must be wielded in both hands.
- **Thrown light weapons** deal {{< rpg_roll "1d6" >}} damage.
- **Bows** and **Slings** deal {{< rpg_roll "1d6" >}} damage.
- **Crossbows** deal {{< rpg_roll "1d12" >}} damage.

## Hit Points

The danger a character can resist before taking injury is quantified by Hit Points (HP). They are better thought of as "Don't Get Hit" Points. There are no mechanical effects for being reduced to 0 HP. Any damage in excess of this (i.e. negative HP) is known as Lethal Damage, which always incurs a roll on the Death and Dismemberment Table.

PCs have a maximum HP of 20. Enemies have variable HP base on their Hit Dice (HD). A hit dice is a {{< rpg_roll "1d8" >}}. Roll the number of HD listed and add the numbers together. An enemy with surprisingly low HP might be sickly or wounded. An enemy with high HP might be a champion (or two enemies).

## Healing

1. Lunch heals a character for {{< rpg_roll "1d6" >}} + Level HP. Lunch takes 1 hour, requires a safe place, and consumes 1 ration.
2. A Good Night's Rest. Restores all HP. Requires 8 hours of rest, a safe place, a fire or heat source, and consumes 1 ration.
3. Magical Healing. Some spells or potions restore HP. Others can heal Injuries.

If a character has negative HP (i.e. has taken Lethal Damage), the next Lunch or Good Night's Rest heals them to 0 and not over 0.

## Weapon Proficiency

All classes are proficient with daggers. A PC is also proficient with any weapons they gain from a class or background. A PC has -4 to Attack with a weapon until they gain proficiency by landing 8 successful hits in combat.

## Reaction & Morale Rolls

When encountering monsters, roll {{< rpg_roll "2d6" >}} + the Charisma bonus of the most visible party member.

{{< rpg_table name="ReactionRole" weighted=true >}}
| 2d6+       | Result           | Notes                        |
| ---------- | ---------------- | ---------------------------- |
| 1-2        | Immediate Attack | Offended or disgusted        |
| 3-7        | Unfavourable     | May attack if victory likely |
| 8-11       | Favourable       | Parley or bargaining         |
| 12         | Very Favourable  | May choose to cooperate.     |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

Monsters (or hirelings) may try to run away or surrender if combat turns against them. Monsters have a Morale value listed from 2 (craven) to 12 (unbreakable). Check Morale when:

1. The side (PCs or monsters) takes their first death.
2. When half the side has been incapacitated or killed.
3. If some particularly frightening or spectacular effect occurs. Roll {{< rpg_roll "2d6" >}}. If the result is over the creatures' Morale score, the creature attempts to retreat, surrenders, or panics. Morale can be adjusted (unless 2 or 12) by situational bonuses.

# Injuries, Death & Dismemberment

## Death and Dismemberment Roll

{{< rpg_roll "1d12" >}} + Lethal Damage + Number of Current Injuries

The effects are cumulative. If a PC with -8 HP and no current Injuries rolls a 10 on a {{< rpg_roll "1d12" >}}, to the leg, `X = 10+8+0 = 18`. They gain 4 Fatal Wounds, the leg is Mangled, and also Disabled for 18 days.

If they took a further 1 point of damage (-9 HP), they would roll `1d12 + 9 (Lethal Damage) + 1 (Mangled) + 1 (Disabled)` for `1d12 + 11`.

## Hit Location Table

If required, roll {{< rpg_roll "1d6" >}} for hit location.

{{< rpg_table name="HitLocation" >}}
| Result | 1. Arm | 2. Leg | 3-4. Torso | 5-6. Head |
| --- | --- | --- | --- | --- |
| 1+ | Disabled X Days | Disabled X Days | Cracked Ribs X Days | Concussed X Days |
| 11+ | 1 Fatal Wound + Mangled | 1 Fatal Wound + Mangled | 1 Fatal Wound + Crushed | 1 Fatal Wound + Skullcracked |
| 16+ | X-15 Fatal Wounds | X-15 Fatal Wounds | X-15 Fatal Wounds | X-15 Fatal Wounds |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Status Effect Table

{{< rpg_table name="StatusEffects" >}}
| Result | Acid, Fire / Cold, Ice | Lightning | Venom / Toxin | Magic |
| --- | --- | --- | --- | --- |
| 1+ | Scorched / Frostbite X Days | Burned X Days | Sickened X Days | Anathema X Days |
| 11+ | 1 Fatal Wound + Burned / Frozen | 1 Fatal Wound + Fried | 1 Fatal Wound + Wracked | 1 Fatal Wound + Marked |
| 16+ | X-15 Fatal Wounds | X-15 Fatal Wounds | X-15 Fatal Wounds | X-15 Fatal Wounds |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Fatal Wounds

A PC has 3 rounds to clear all their Fatal Wounds or they die. They can attempt to remove a Fatal Wound on their turn by rolling 1 on a {{< rpg_roll "1d6" >}}. PCs with Fatal Wounds are unconscious. This does not mean they are quiet or asleep (they can be screaming and holding a stump), but it means they cannot take conscious or deliberate actions. Remove oldest Fatal Wounds first.

Up to two adjacent allies can try to remove Fatal Wounds from a dying character by spending their turn doctoring the wounded PC and then rolling under ½ Intelligence (unless they have a useful skill).

## Injuries

Some injuries on this list aren't on the Death and Dismemberment table. They can be accumulated by other means, GM choice, or deliberate actions.

**Anathema**: Cannot benefit from magical healing or be the target of beneficial magic.

**Blind**: Cannot see. -8 to Attack and Defense. Automatically hit by area-of-effect attacks.

**Burned / Frozen**: Save. If failed, roll on the table below. If passed, lose {{< rpg_roll "1d6" >}} digits (roll randomly using a {{< rpg_roll "1d20" >}}) and reduce all future damage of the appropriate type (acid, fire, ice, etc.) by 2.

1. Lose {{< rpg_roll "2d6" >}} digits.
2. Lose all but 1 digit.
3. Lose both hands.
4. Lose both feet.
5. Lose both hands, both feet, and nose. -2 Charisma.
6. Lose both hands, both feet, nose, and both eyes. Blind. -2 Charisma.

**Cracked Ribs**: The PC's maximum HP is reduced by 4 (to a minimum of 1).

**Crushed**: Save. If failed, roll on the table below. If passed, gain an Interesting Scar.

1. Permanently lose 1 Strength.
2. Permanently lose 1 Dexterity.
3. Permanently lose 1 Constitution.
4. Crushed Throat. Cannot speak louder than a whisper.
5. Crushed Guts. Constitution is 4 for the purposes of holding your breath. Cannot swim or dive.
6. Broken Spine. Paralyzed from the neck down. Save to recover after {{< rpg_roll "1d6" >}} days. If failed, Save again after {{< rpg_roll "1d6" >}} weeks. If both Saves are failed, the PC is permanently paralyzed.

**Concussed**: The PC's Wisdom becomes 4 for Initiative.

**Deaf**: Cannot hear. If ambushed, always act last.

**Disabled**: The injured limb becomes unusable. A Disabled arm cannot hold anything; held items are dropped. A Disabled leg cannot support the PC's weight. A PC with two working arms but no working legs can move at 1/20th their normal Movement.

**Fried**: Save. If failed, roll on the table below. If passed, reduce all future lightning damage by 2 and gain an Interesting Scar.

1. Deaf.
2. Left eye lost. -1 to range attacks. If both eyes lost, Blind.
3. Right eye lost. -1 to range attacks. If both eyes lost, Blind.
4. All items carried lost. Permanently lose 1 from a random stat.
5. Palsied. Permanent -2 to Attack and Defense.
6. Lose one hand, one foot, and both eyes. Blind. -2 Charisma.

**Mangled**: Save. If failed, lose the limb. If passed, Save again. If failed, lose 1 digit. If passed, gain an Interesting Scar.

**Marked**: Save. If failed, any magical attack against the PC automatically deals double damage or applies a -4 penalty to Save. If passed, the PC has a permanent -2 to Save against magic, but reduces all incoming magic damage by 2. They also gain an Interesting Scar (known as a curse-mark).

**Scorched / Frostbite**: Cannot wear armour. Difficulty gripping or climbing.

**Skullcracked**: Save. If failed, roll on the table below. If passed, gain an Interesting Scar.

1. Permanently lose 1 Intelligence.
2. Permanently lose 1 Wisdom.
3. Permanently lose 1 Charisma.
4. Left eye lost. -1 to range attacks. If both eyes lost, Blind.
5. Right eye lost. -1 to range attacks. If both eyes lost, Blind.
6. Coma. Unconscious. Save to recover after {{< rpg_roll "1d6" >}} days. If failed, Save again after {{< rpg_roll "1d6" >}} weeks. If both Saves are failed, the PC is permanently unconscious.

**Wracked**: Save. If failed, roll on the table below. If passed, reduce all future poison / toxin damage from the same or similar sources by 2 and gain an Interesting Scar.

1. Permanently lose 1 from a random stat.
2. Permanently lose 1 from all stats.
3. Lose a random limb and one eye. -1 to range attacks. If both eyes lost, Blind.
4. Lose 2 from Strength and Constitution. Gain +1 to Intelligence and Wisdom.
5. Enfeebled. Take double damage from ingested poisons or rotten food.
6. Heart Pain. Cannot run.

## Interesting Scars

The scar must be a mangled, twisted, gnarled thing, a worm of flesh buried under the skin. It provides a +2 bonus to Charisma while interacting with people who appreciate a good scar and a good story (barbarians, barber-surgeons, knights, suitors, poets, etc.)

# Inventory & Items

## Inventory Slots

PCs have a number of Inventory Slots equal to their Strength. Only items carried count towards this limit. Horses, hirelings, and carts do not count. Clothing, minor non-magical jewellery, and other cosmetic items do not take up inventory slots unless they are particularly bulky.

An Inventory Slot can contain:

- 3 Light Weapons (daggers)
- 1 Medium Weapon (sword)
- 0.5 Heavy Weapons (hammers)
- 1 Bow
- 20 Arrows
- 3 Bottles or Flasks
- 1 Lantern
- 3 Books
- 3 Rations

The first 3 Inventory Slots are Quick-Draw Slots, and can be accessed at any time. It takes 1 round to retrieve an item from any other Inventory Slot.

Inventory management is crucial. Selecting and tracking problem-solving tools is a player skill.

### Encumbrance

Any items in excess of a character's Inventory Slots (Strength) gain 1 point of Encumbrance per slot. Each point of Encumbrance imposes a -1 penalty to Stealth, Movement, and Defense.

With 6 or more points of Encumbrance, moving quickly is impossible. With 10 or more points of Encumbrance, moving beyond a crawl is exhausting.

### Fatigue

Sprinting repeatedly, outdoor travel without rest, or excessively tiring activities inflict Fatigue. Each level of Fatigue takes up 1 Inventory Slot. It is usually removed by resting.

### Armour

- **Leather** armour takes up 0 Inventory Slots and provides +2 to Defense.
- **Chain** armour takes up 2 Inventory Slots and provides a +4 bonus to Defense. It also imposes a -2 penalty to Movement and Stealth.
- **Plate** armour takes up 4 Inventory Slots and provides a +6 bonus to Defense. It also imposes a -4 penalty to Movement and Stealth.
- **Shields** take up 1 Inventory Slot and provide a +1 bonus to Defense. A PC can sunder their shield to reduce incoming damage by {{< rpg_roll "1d12" >}}. The shield is broken afterwards.

### Melee Weapons

- **Light weapons** (daggers) take up 1/3rd of an Inventory Slot and deal {{< rpg_roll "1d6" >}} + Strength bonus damage in melee.
- **Medium weapons** (swords) take up 1 Inventory Slot and deal {{< rpg_roll "1d8" >}} + Strength bonus damage if wielded in one hand or {{< rpg_roll "1d10" >}} + Strength bonus damage if wielded in both hands.
- **Heavy weapons** (hammers) take up 2 Inventory Slots and deal {{< rpg_roll "1d12" >}} + Strength bonus damage but must be wielded in both hands.

### Ranged Weapons

Ranged weapons get -1 to Attack for every 10' beyond their listed range.

- **Thrown light weapons** (daggers) take up 1/3rd of an Inventory Slot and deal {{< rpg_roll "1d6" >}} damage and have a 20' range.
- **Slings** take up 1 inventory slot. They deal {{< rpg_roll "1d6" >}} damage and have a 20' range.
- **Bows** take up 1 inventory slot. They deal {{< rpg_roll "1d6" >}} damage and have a 30' range.
- **Crossbows** take up 1 inventory slot. They deal {{< rpg_roll "1d12" >}} damage and have a 30' range. A crossbow takes 1 round to reload.

Both bows and crossbows use arrows. One Inventory Slot can contain 20 arrows. After combat, arrows can be recovered. 50% will be usable.

### Light Sources

Outside of the listed light range, light sources illuminate shadows. Vague shapes, movement, and reflective surfaces will be visible in shadows, but no details can be distinguished.

| Light Source | Radius                 | Duration               |
| ------------ | ---------------------- | ---------------------- |
| Torch        | 20' light, 20' shadows | 1 hour                 |
| Lantern      | 30' light, 30' shadows | 3 hours / flask of oil |
| Candle       | 5' light, 10' shadows  | 1 hour                 |
{.table .table-striped .table-bordered .table-sm}

Lighting a torch or lantern takes 1 round. PCs are assumed to be carrying basic firestarting gear. Magic or cantrips may ignite a light source immediately.

## Hirelings

Hired at a fixed rate (see the price list). Dangerous work may require bonuses. Generic hirelings have 10 in all stats, 5 HP, and no skills outside their profession.

PCs can have up to `2 + their Charisma bonus` hirelings without any issues. Extra hirelings can be acquired, but may be disloyal, cunning, or poor quality.

Above any items required for their job, a hireling can carry 3 Inventory Slots worth of items for the PC.

# Dungeon & Wilderness Procedures

Time tracking is critical. I use minutes and hours.

## Dungeon Procedures

### Movement

PCs can cautiously move 20 10' squares (200') in 10 minutes. Round up to the nearest 10 minutes. PCs moving cautiously spot signs of all traps. The fun part isn't noticing the trap, it's how to disarm it. No skills. Use common sense and inventory items.

PCs can quickly move 60 10' squares (600') in 10 minutes. PCs moving incautiously may get a chance to roll under Wisdom to notice a trap (GM's discretion). Otherwise, they find traps via HP and hirelings.

If you want to modify these movement rates based on Movement, use `20' + the lowest Movement in the group for cautious movement and 3x that value for rapid movement`. In practice, it rarely seems to matter.

### Searching

- A cursory search of a 20'x20' room takes 1 minute and reveals only the most obvious information.
- A proper search takes 30 minutes and reveals most hidden information.
- A detailed search takes 1 hour and reveals all hidden information.
- Multiple PCs can combine their efforts to search a larger room in the same time or a smaller room in less time.

### Random Encounters

Roll for a Random Encounter every 30 minutes or whenever a loud noise occurs. Usually, that's a 1 on a {{< rpg_roll "1d6" >}}.

If the PCs are moving cautiously, they get the Omen (a foreshadowing of something yet to come) before the encounter. If they are moving quickly or incautiously, they don't get the Omen.

Roll {{< rpg_roll "2d6" >}} for Morale. If the result is equal to or under Morale, the creature is hostile. If over, positive or uncertain. Modify Morale by anything from +4 to -4 depending on circumstances.

### Light

Lanterns illuminate 30' clearly and provide dim outlines and shadows for a further 30'. In the dark, light sources are visible miles away.

### Other Activities

- Picking a mundane lock takes 10 minutes.
- Identifying a magic item takes 10 minutes.
- Deciphering an inscription, reading a book, or sorting through items takes 30 minutes.
- Lunch takes 1 hour. Test for random encounters twice.
- There are about 6 combat rounds in 1 minute. Don't worry about the exact number of rounds. Just assume combat, a breather afterwards, and looting take about 10 minutes.
- Eyeball other activities based on real-life experience. Round up a bit.

## Wilderness Procedures

Hexes are 6 hours across. Not miles, hours. If miles are needed, the PCs can travel 30 miles a day. Horses don't let the PCs travel more quickly, but they do make the journey easier.

Every hex travelled on foot fills 1 Inventory Slot with Fatigue. Riding a horse or a cart negates the Fatigue gain unless the weather is terrible or the road is very rough.

Hexes contain an obvious feature (something the PCs will encounter) and a Hidden Feature (something the PCs might encounter if they search the hex, spend time there, or visit multiple times).

Test for a random encounter every 6 hours or whenever the PCs make a lot of noise or do something that's likely to attract attention. Usually, that's a 1 on a {{< rpg_roll "1d6" >}}.

Roll for the weather each day.

Most activities take 1 hour.

PCs can safely travel for 12 hours per day (2 hexes), or push their luck with 18 hours (3 hexes), losing the benefits of resting and having lunch.

# Magic

## Mishaps

When you suffer a Mishap, look up your school of magic and roll on the Mishap table. A mishap takes effect immediately.

## Dooms

Every apprentice knows that if they travel down the road of wizardry long enough, their doom will eventually claim them. It waits at the end of every wizard's career.

Each school of magic has different Dooms.

The first time you roll triples while casting a spell, you suffer your first Doom.

The second time you roll triples while casting a spell, you suffer your second Doom.

The third time you roll triples while casting a spell, you suffer your third and final Doom.

While your first and second Dooms tend to be survivable, your final Doom usually spells the end of your career (usually through your death).

There are three ways to avoid your Doom.

- Never use more than two casting dice at a time, forever limiting your magical power.
- Seek out a solution to your Doom. These are always unique quests that your DM designs for you. They are usually pretty epic.
- Become a warlock.

## Magic Robes

Wizards can wear armor without penalty. However, if they wear a magic robe, they get +1 casting dice, beginning in the morning when they wake up in the robe, and lasting until they remove it.

Anyone can wear a magic robe to get +1 casting die, even the Int 7 fighter. However, the fighter still cannot cast spells since they have no spells memorized (that requires spell slots).

## Magic Wands

A wand lets you cast a spell without having it memorized. It is essentially another spell slot with a fixed spell inside it.

If the Int 7 fighter wears a magic robe AND wields a magic wand, they can cast spells because they have a casting die (from the robe) and a spell (from the wand's spell slot).

## Magic Staves

There are all sorts of staves, and most of them are some variation of the wand. Most give you the ability to cast a new spell, and then bonuses if you can actually manage to cast that spell independently.

For example, the Briar Staff allows you to cast entangle but if you cast entangle without using the staff, the staff allows you to teleport to anywhere within 50' as long as you enter and exit a plant.

# Introduction for New Players

**There are elements of chance.**

Ever played cops and robbers or any other made-up games? Did you ever meet the one kid who said "Nuh uh, you didn't hit me, I have a bulletproof vest!" In this game of make-believe, there are a few rules to help decide who hits who, and how hard, and other things like that.

Your characters are also going to have some random numbers assigned to them. Sometimes the numbers will be good, and sometimes they'll be bad, and there's not much you can do about it. In this game the numbers aren't that important. Sometimes, a character will terrible stats and survive for ages, while a character with brilliant stats dies in the first hour of game.

**There are elements of skill.**

In Settlers of Catan, the rules are fixed and solid and balanced. You can't go "Hey Steve, I'll take my Knights and you take your Knights and we'll go pillage that Sheep tile." That's not in the rules. And that's fine. But in a game like this, you can come up with any plans you want to. In that way the game is like a real world, and the people in it are like real people. Nobody minds too much if you go around smashing pottery and looting houses in a video game, but in this game, that sort of thing has real consequences. Similarly, you can't lure Bowser out of his castle with a delicious meal in the video game because cooking wasn't coded into the game.

Coming up with a good plan and executing that plan is important. Be smart. Pay attention. Think of solutions that the rules don't cover.

**In Character vs Out of Character**

You don't have to do silly voices or wear costumes. You'll figure out how comfortable you are acting as your character as we go along. The main thing, right now, is to remember that your character knows things you don't know, and that you know things your character doesn't know.

Your character knows things about the world that you, as a player, don't know. They know how to ride a horse or make poison or identify magic runes. If there's a situation where that applies, I'll just tell you what your character knows. If I'm not sure, I might make you roll for it.

Similarly, there are things you know that your characters don't know. The main one is reason. We live in a logical age; the characters you're playing don't. They don't have the benefit of a post-Enlightenment education. They might not even be literate. You aren't afraid of the weather because you understand what weather is. Your characters don't. They might not understand things that we take for granted, and they might act on motives that we'd find archaic or ridiculous.

You, the player, might know things about other characters or the world that your character doesn't. You might know a secret about another character's past, or the best way to kill a vampire. But remember, your character can only act on knowledge they have in the game.We'll discuss this more as it comes up.

**Your characters are going to die.**

Did you ever play Super Mario Bros? Mario died a lot in that game. Sometimes he died because you made a mistake. Sometimes it was chance, or luck, or you were distracted, or you didn't understand how an enemy worked. This game is like that, except in the video game, Mario comes back again and again. In this game, each time you get a new character.

Having a character die doesn't mean you made a mistake or failed. It's part of the learning process. Sometimes it's just random chance.

You get to make a new character, and I'll find a way to introduce them to the group. You start at Level 1 again but it's not a big deal. A Level 1 character is just as useful as a Level 4 character almost every way. You'll never be completely outclassed.

**Levelling Up**

You level up and improve your character by looting treasure. Imagine a dragon and its hoard. Kill the dragon and you get 0 XP. Steal the treasure, by force or stealth, and it counts. You have to get it out of the dungeon and take it somewhere safe, but once it's safe - buried, spent, invested, or donated - it counts.

**The Social Contract**

If you like this game and you're having fun, show up on time, or tell me in advance if you can't make it. If you don't like this game, let me know and we'll make changes. If anything about this game makes you uncomfortable, bring it up immediately. If you don't feel comfortable doing that, or it only occurs to you later, you can always email me.

Please don't bring out your phones during game unless there's something urgent. Ideally this is the most interesting thing going on. In the same vein, understand that there are 5 other people in the room, so don't deliberately waste time.

**The Rules**

Are always available for you to read. They aren't secret. If you find inconsistencies or errors, let me know, but the rules aren't the law. As the GM, what I say goes, and if need be, what I say, went. If you think you've found a loophole, but the results of that loophole don't make any sense, it will stop working immediately.

**Questions**

If you have questions, let me know. Some example questions include:

- "Can I hit him with an arrow at this distance?"
- "What does X taste like?"
- "Does my character know anything about X?"
- "How much damage does a longsword do if I throw it at someone?"

Before we start, do you have any questions right now?

# Character Generation

1. Choose or roll for your **[Race](#table-of-races)**. Your character's Race will grant them a Perk, a Drawback, and one Stat they can reroll.
2. Roll your **[Stats](#stats)**. {{< rpg_roll "3d6" >}} in order. You may reroll the Stat given by your Race and pick the higher result.
3. In X-Mooks, all PCs are **[Wizards](#wizard-class)** at level 1! Choose a Wizard School [from Many Rats on a Stick](#choosing-a-wizard-school-option-1) OR [from the rest of the GLOG-osphere](#choosing-a-wizard-school-option-2).
4. [Gain the Wizard's Spellcasting Template A](#a-spellcasting).
5. Choose how your character's [innate spell potential manifests](#innate-magical-potential-manifestation).
6. Take items and bonuses dictacted by your Wizard class and chosen Wizard School.
7. Roll for any skills or items dictacted by your Wizard class and chosen Wizard School.
8. Gain {{< rpg_roll "1d10" >}} cp. All PCs gain a blanket (1 slot) and 3 rations (1 slot).

## The Base Adventurer

A newly created PC without any class templates is expected to be reasonably competent in most areas but not specialized in any one direction. X-Mooks is not about classes. Classes are just a set of extra tools to do things. Classes are significantly less important than **What You Do Around The Table**.

## Templates & Multiclassing

Each class has 4 Templates. Templates are gained sequentially (A, then B, then C, then D). To multiclass, simply pick the lowest template from another class. E.g. A level 4 character could pick Fighter A, Wizard A, Monk A, and Fighter B.

{{< xmooks >}} All PCs start at level 1 with Template A of the Wizard class with a Wizard School of their choice to represent their innate magical potential manifested. Unlike NPCs, who may or may not ever learn to unlock their innate magical potential. {{< /xmooks >}}

Multiclassing should make sense. Multiclassing for optimization or mechanical reasons should be strongly discouraged. The game is not primarily about the mechanics or having the biggest numbers. Bigger numbers will not save you, creative thinking might, no promises.

## Levelling Up

PCs gain experience points (XP) by looting stuff. Wages don't count. The loot must be taken to a place of safety and divided or assigned to the PCs to become XP. Items or equipment used by the characters and not sold don't count for XP purposes. Players should track a PC's XP (the total amount of treasure they have accumulated) along with their current cash. Purely frivolous spending converts 10% of the money spent into XP.

Whenever a PC levels, increase their HP, Attack, and base Save (before their Charisma bonus is added). A PC can also test to improve a stat of their choice. Declare the stat and roll {{< rpg_roll "3d6" >}}. If the result is over, the stat's value increases by 1.

| Level | XP    | HP (20 Max) | Class Templates | Attack | Base Save |
| ----- | ----- | ----------- | --------------- | ------ | --------- |
| 1     | -     | Con - 4     | 1               | 11     | 6         |
| 2     | 200   | Con - 2     | 2               | 12     | 7         |
| 3     | 400   | Con         | 3               | 12     | 7         |
| 4     | 700   | Con + 2     | 4               | 13     | 7         |
| 5     | 1,000 | Con + 4     | 5               | 13     | 8         |
| 6     | 1,400 | Con + 6     | -               | 14     | 8         |
| 7     | 1,800 | Con + 7     | -               | 14     | 8         |
| 8     | 2,200 | Con + 8     | -               | 15     | 9         |
| 9     | 2,600 | Con + 9     | -               | 15     | 9         |
| 10    | 3,000 | Con + 10    | -               | 15     | 10        |
| +1    | +500  | +1          | -               | 15     | 10        |
{.table .table-striped .table-bordered .table-sm}

At Level 6, and every time a PC levels up past Level 6, they can retire to safety. The GM cannot torment them anymore. If they can afford it, they can buy some land, set up a shop, teach at a wizard college, or beg in the gutter. At Level 10 and beyond, a PC who dies can fight death. If they succeed, they can return to life. All future Saves to avoid death will be at a penalty, but they gain a second chance.

| Stat  | Bonus | Stat     | Bonus | Stat     | Bonus |
| ----- | ----- | -------- | ----- | -------- | ----- |
| 1,2   | -3    | 9,10,11  | 0     | 18,19,20 | 3     |
| 3,4,5 | -2    | 12,13,14 | 1     | 21,22,23 | 4     |
| 6,7,8 | -1    | 15,16,17 | 2     | 24+      | 5     |
{.table .table-striped .table-bordered .table-sm}

## Classes

### Wizard Class

#### Choosing a Wizard School: Option 1

Select a school from a GM-approved GLOG supplement ([like Many Rats on a Stick by Skerples](https://coinsandscrolls.blogspot.com/2019/10/osr-glog-based-homebrew-v2-many-rats-on.html) ([PDF](/rpg/many_rats_on_stick_v2.pdf)))

{{< rpg_table name="WizardSchool" weighted=true >}}
| 1d12 | Wizard Schools |
| ---- | -------------- |
| 1    | Animist        |
| 2    | Biomancer      |
| 3    | Curse-Eater    |
| 4    | Drowned        |
| 5    | Elementalist   |
| 6    | Elf or Garden  |
| 7    | Geometer       |
| 8    | Illusionist    |
| 9    | Necromancer    |
| 10   | Orthodox       |
| 11   | Spider         |
| 12   | White Hand     |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

#### Choosing a Wizard School: Option 2

Choose a Wizard School from [any of the supplements in the Extra Resources section](#extra-resources) or anything you can find online.

#### Wizard

Starting Equipment: varies by Wizard School. If in doubt ask your GM to help you come up with something.

Starting Skill: Ask your GM.

##### Innate Magical Potential Manifestation

{{< xmooks >}} Everyone is born with the potential to access innate magical potential but many people will go their whole lives without ever accessing this potential. However, whether or not someone learns to access their innate magical potential, this potential will visibly manifest itself in either of the following ways:

- As a physical mark, extra appendage, abnormality on your body (burning hand, translucent skin, etc.), think Fallout mutations.
- As a spiritual aura that surrounds you, think JoJo.
- As a familiar that follows you around, think His Dark Materials.
- As anything else that a particularly creative player can come up with.

This visible manifestation may hint at what a person innate magical potential is. Although, that's not always the case.

{{< /xmooks >}}

#### A: Spellcasting

+1 MD, +1 Spell Slot, +1 Spell (1-6)

Spells are living creatures. Spells, enchantments, ghosts, and souls are all more or less the same. A wizard's spells range in intelligence from pond scum to ferrets. A spellbook is a menagerie-prison. A well-trained brain is a mind-gun loaded with spell-bullets. Minor spells, called cantrips, infest a wizard's soul and bind to it. It takes 1 hour to move any number of spells between a spell slot in your brain and a spellbook, scroll, or wand.

To cast a spell, select a number of Magic Dice (MD) you wish to invest, roll them, and add the numbers together. As a Wizard, you get +1 MD per Wizard template. Most spells depend on the number of [dice] invested and the [sum] they show. Doubles generate Mishaps (bad); triples generate Dooms (worse). Casting a spell from a scroll provides +1 MD as the scroll burns.

Dice that roll 1-3 return to your casting pool and can be used again that day. Dice that roll 4-6 are removed from your casting pool for the day. Your spells return at sunrise to last location they were imprisoned, when the octarine light of the sun touches the world and infuses Creation with an extra boost of raw magic. Your MD return if you get a good night's sleep. If you didn't sleep well, you can Save for each MD to have them return to your pool anyway.

When you gain Template A, roll {{< rpg_roll "1d6" >}} and gain the spell listed. Template B, roll a {{< rpg_roll "1d6" >}} and a {{< rpg_roll "1d8" >}}. Template C, roll {{< rpg_roll "1d10" >}}. Template D, choose 4 spells from the list. If a duplicate spell is rolled, you may choose to keep it or reroll.

You can try to bodge together a spell-like effect appropriate to your school by pouring any number of MD into a target and hoping for the best. Effects are adjudicated by the GM, but are usually haphazard and dangerous. Mishaps and Dooms apply.

You can detect strong ambient magic if you are not distracted. To learn details about spells or magic items, roll under Intelligence.

#### B: Book Casting

+1 MD, +1 Spell Slot, +1 Spell (1-6), +1 Spell (1-8)

You can cast from a scroll or a spellbook in a way that does not consume the scroll. This allows you to cast directly from your spellbook without loading the spell into your brain first. You do not gain the bonus MD that consuming a scroll generates. You must declare you are casting a spell from a book before initiatives are rolled for the turn. You automatically go last in the initiative round, and you automatically fumble the spell if you take any damage during the round. The spell vanishes from the scroll or book and returns the next morning.

#### C: Friendly Spell

+1 MD, +1 Spell Slot, +1 Spell (1-10)

Apply a random mutation to a spell you frequently cast.

#### D: Spell Mastery

+1 MD, +1 Spell Slot, Choose 4 spells.

### Non-Wizard Classes

If you're interested in building a multi-class Wizard with one or more Non-Wizard classes, find one in a GM-approved GLOG supplement ([like Many Rats on a Stick by Skerples](https://coinsandscrolls.blogspot.com/2019/10/osr-glog-based-homebrew-v2-many-rats-on.html) ([PDF](/rpg/many_rats_on_stick_v2.pdf))), [any of the supplements in the Extra Resources section](#extra-resources) or anything you can find online.

# Equipment

{{< rpg_combined_table Item Food Armor Weapon Light Tool AdventuringGear Clothing BookAndVanityItem >}}

## Food and Cooking

{{< rpg_table name="Food" >}}
| Item                  | Cost (Urban) | Cost(Rural) |
| --------------------- | ------------ | ----------- |
| Small Beer            | 2cp          | 1cp         |
| Bottle of Wine        | 5cp          | 1sp         |
| Standard Meal         | 5cp          | 3cp         |
| Fancy Meal            | 3sp          | -           |
| Ration (3/slot)       | 1sp          | 5cp         |
| Animal Feed (per day) | 3cp          | 2cp         |
| Cheese (5bs)          | 5sp          | 4sp         |
| Cookpot               | 1sp          | 2sp         |
| Dried Fruit (bag)     | 2sp          | 1sp         |
| Eggs (12)             | 7cp          | 3cp         |
| Herbs (bag)           | 3cp          | 1cp         |
| Lard (5lbs)           | 1cp          | 1cp         |
| Soap (1lb)            | 1cp          | 2cp         |
| Wooden Tub            | 2sp          | 1sp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Armor

{{< rpg_table name="Armor" >}}
| Item                        | Cost (Urban) | Cost(Rural) |
| --------------------------- | ------------ | ----------- |
| Leather Armour (Defense 12) | 25sp         | 50sp        |
| Chain Armour (Defense 14)   | 10gp         | -           |
| Plate Armour (Defense 16)   | 100gp        | -           |
| Shield (Defense +1)         | 5sp          | 5sp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Weapons

{{< rpg_table name="Weapon" >}}
| Item                                        | Cost (Urban) | Cost(Rural) |
| ------------------------------------------- | ------------ | ----------- |
| Light Weapon (1d6 + Str. Bonus) (3/slot)    | 5sp          | 5sp         |
| Medium Weapon (1d8/d10 + Str. Bonus)        | 2gp          | 5gp         |
| Heavy Weapon (1d12 + Str. Bonus) (0.5/slot) | 5gp          | 15gp        |
| Sling (1d6)                                 | 3sp          | 3sp         |
| Bow (1d6)                                   | 25sp         | 25sp        |
| Crossbow (1d12)                             | 5gp          | -           |
| Arrows/Bolts (20/slot)                      | 5cp each     | 5cp each    |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Light

{{< rpg_table name="Light" >}}
| Item                           | Cost (Urban) | Cost(Rural) |
| ------------------------------ | ------------ | ----------- |
| Candle (small, 1hr) (3/slot)   | 1cp          | 1cp         |
| Reading Candle (3hrs)          | 5cp          | 5cp         |
| Lantern                        | 3sp          | 5sp         |
| Lamp Oil (flask, 3/slot, 3hrs) | 5cp          | 5cp         |
| Tinderbox                      | 1sp          | 5sp         |
| Torch (3hrs) (3/slot)          | 1cp          | 1cp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Animals

{{< rpg_table name="Animal" >}}
| Item           | Cost (Urban) | Cost(Rural) |
| -------------- | ------------ | ----------- |
| Cattle         | 1gp          | 8sp         |
| Chicken        | 2cp          | 1cp         |
| Dog            | 1gp          | 5sp         |
| Hawk           | 10gp         | -           |
| Hog            | 5sp          | 3sp         |
| Horse (riding) | 10gp         | 10gp        |
| Horse (war)    | 75gp         | 65gp        |
| Donkey         | 8sp          | 5sp         |
| Sheep          | 3sp          | 1sp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Tools

{{< rpg_table name="Tool" >}}
| Item              | Cost (Urban) | Cost(Rural) |
| ----------------- | ------------ | ----------- |
| Anvil             | 2gp          | 3go         |
| Axe               | 4sp          | 3sp         |
| Bellows           | 4gp          | 6gp         |
| Block and Tackle  | 3sp          | 3sp         |
| Chisel            | 1sp          | 2sp         |
| Drill             | 5sp          | 5sp         |
| Hammer            | 1sp          | 2sp         |
| Hoe               | 3sp          | 2sp         |
| Iron Plough       | 15gp         | 17gp        |
| Nails (bag of 10) | 3cp          | 5cp         |
| Pick              | 6sp          | 12sp        |
| Prybar            | 2sp          | 2sp         |
| Shovel            | 3sp          | 2sp         |
| Speciality Tools  | 2gp          | -           |
| Spike (iron)      | 1sp          | 2sp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Adventuring Gear

{{< rpg_table name="AdventuringGear" >}}
| Item                   | Cost (Urban) | Cost(Rural) |
| ---------------------- | ------------ | ----------- |
| Air Bladder            | 1sp          | 1sp         |
| Bedroll                | 2sp          | 1sp         |
| Caltrops (bag of 30)   | 4sp          | -           |
| Fishing Gear           | 1sp          | 1sp         |
| Grappling Hook         | 3sp          | 5sp         |
| Holy Water             | 25sp         | 25sp        |
| Ladder (10')           | 6sp          | 3sp         |
| Pole (10')             | 1sp          | 5cp         |
| Rope (30')             | 3sp          | 3sp         |
| Tent (3-ling)          | 1gp          | 2gp         |
| Tent (personal)        | 5sp          | 10sp        |
| Vial, Bottle, or Flask | 2sp          | -           |
| Waterskin              | 1sp          | 1sp         |
| Whistle                | 5cp          | 5cp         |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Clothing

{{< rpg_table name="Clothing" >}}
| Item            | Cost (Urban) | Cost(Rural) |
| --------------- | ------------ | ----------- |
| Peasant Clothes | 1sp          | 5cp         |
| Working Clothes | 5sp          | 6sp         |
| Noble Clothes   | 30gp         | -           |
| Leather Boots   | 3sp          | -           |
| Furs            | 50gp         | -           |
| Rags            | 5cp          | 3 cp        |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## BooksAndVanityItems

{{< rpg_table name="BookAndVanityItem" >}}
| Item                           | Cost (Urban) | Cost(Rural) |
| ------------------------------ | ------------ | ----------- |
| Book (blank)                   | 3gp          | -           |
| Book (magic)                   | 30gp         | -           |
| Book (reading, poetry, etc.)   | 6gp          | -           |
| Holy Symbol (plain wood)       | 2cp          | 2cp         |
| Hourglass                      | 10gp         | -           |
| Ink                            | 1cp          | 5cp         |
| Mirror (silver)                | 3gp          | -           |
| Plates, Cups, Cutlery (6 sets) | 1gp          | -           |
| Gold Ring                      | 1gp          | -           |
| Scroll Case                    | 1sp          | 3 sp        |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}


## Hirelings and Followers

{{< rpg_table name="HirelingAndFollower" >}}
| Item                     | Cost (Urban) | Cost(Rural) |
| ------------------------ | ------------ | ----------- |
| Useless Peasant          | 2sp/month    | 1sp/month   |
| Labourer                 | 5sp/month    | 5sp/month   |
| Scribe                   | 6sp/month    | -           |
| Archer or Light Infantry | 1gp/month    | 1gp/month   |
| Mason                    | 1gp/month    | 1gp/month   |
| Camp Follower            | 15sp/month   | 15sp/month  |
| Armourer or Blacksmith   | 2gp/month    | 2gp/month   |
| Master Builder           | 5gp/month    | 5gp/month   |
| Barber-Surgeon           | 6gp/month    | 8gp/month   |
| Galley Crew (60)         | 30gp/month   | -           |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}


## Transportation and Lodging

{{< rpg_table name="TransportationAndLodging" >}}
| Item     | Cost (Urban) | Cost(Rural) |
| -------- | ------------ | ----------- |
| Sailboat | 600gp        | -           |
| Cart     | 3gp          | 3gp         |
| Raft     | 5sp          | 5sp         |
| Wagon    | 15gp         | 8gp         |
| Galley   | 800gp        | -           |
| Inn      | 5sp/night    | 3sp/night   |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

## Currency Calibration

1gp = 10sp = 100cp = $1 modern American = 1 ~1300 French denier. Prices are based on historical research and guesswork.

# Table of Races

{{< rpg_table name="Race" weighted=true >}}
| 1d50 | Race | Reroll | Bonus | Weakness | Flavor |
| --- | --- | --- | --- | --- | --- |
| 1-10 | Human | Choice | +1 to Strength for Inventory Slots. Gain a random item. | -4 to Save against being mutated or transformed. | The "hu" was a small, pink, avaricious, ugly little mole-like creature that the humans exterminated out of shame. |
| 11-12 | Elf | CHA | Do not require a Ration to heal at Lunch. | Save when you see ugly things or shun them, | Elves are improved, polished, and upgraded humans. The High Elves keep them as servants or pets. They are better than you. They are better than everyone |
| 13 | Gnome | INT | Become invisible if you close eyes, hold breath, don't move. | -2 to Movement. | Border-raiders, wilderness fighters, and mean bastards. Wearer of the 'bloodkap'. |
| 14 | Spiderling | DEX | Can secrete 30' of rope per day. | Cannot see anything more than 30' away. | Outcast and shunned. Weavers, money-lenders, scholars, doctors, and poor farmers. |
| 15 | Magpieling | DEX | Always know the approximate value of mundane items. | Must Save or pick up shiny objects. | Terrible and mostly undeserved reputation for petty crime and occasional acts of violence. |
| 16 | Eelling | INT | Can instantly strand up from prone. | Cannot see anything nearer than 1'. | Marsh-farmers, trader, and roving doctors. |
| 17 | Antling | CON | +2 to Strength for Inventory Slots. | Save vs Fear when alone. | Live in matriarchal town-like colonies of hundreds. Deeply religious, though somewhat naïve. Secretive. |
| 18 | Hedgehogling | WIS | +2 Defense. | Cannot wear armour on chest or limbs. | A surprising number of minor saints are hedgehoglings. |
| 19 | Deerling | CHA | Antlers (as a light weapon, bludgeoning). | When afraid, will run instead of staying still. | Rather offended by the idea that they all live timid pastoral lives in the forest. A few families are excellent bankers. |
| 20 | Slothling | STR | Automatically pass Saves vs Fear. | -2 to Wisdom for Initiative. Can never act in Surprise rounds. | An ancient line from untouched forests. Laughably poor warriors, according to popular tales. |
| 21 | Mouseling | WIS | Can very convincingly play dead. | -2 to Strength for Inventory Slots. | Raised in humility and duty. |
| 22 | Boarling | CON | Tusks (as a light weapon, piercing). | Constant snuffling. -2 Stealth. | Strong military tradition in many families. |
| 23 | Hawkling | INT | Can see detail at a great distance. | Must eat uncooked food. Rations spoil in 2 days. | Raised in a culture of boldness. |
| 24 | Houndling | CHA | Can track a creature by smell. | Save to avoid obeying direct commands for 1 round. | Jowly. Found throughout Creation, but rarely in positions of power. |
| 25 | Beetleling | STR | +1 Defense, take ½ fall damage. | Cannot wear armour on chest or limbs. | Either solitary hermits or from tight-knit town-based families. |
| 26 | Fishling | CON | Can hold breath for 10 minutes. | Drink twice as much water. | Urban or rural, fishlings have vast families and great ambitions. |
| 27 | Swanling | DEX | Can shout and sing incredibly well. | Cursed. -2 to Save. | Legend says swanlings are cursed to die beautifully. |
| 28 | Owlling | WIS | Can rotate head 180 degrees. | Cough up disgusting pellets after every meal. | Rumour that wisdom accumulates in one member of a family, sparing all the others. |
| 29 | Slugling | STR | Cannot be pushed in combat. | Salt deals 1d4 damage / round to you. | Renowned as farmers, orchard-keepers. Hermaphroditic. |
| 30 | Flyling | DEX | Can eat rotten food as rations. | Will not notice details unless they move. | Farmers and merchants. Half don't mind being seen as dung-eaters, half frantically try to "improve" their reputation. |
| 31 | Rabbitling | DEX | Jump twice as high. | When afraid, will freeze instead of running. | Good solid farmers, emergency peasant leavies, and fools. |
| 32 | Gooseling | CON | Prehensile neck, can fit head through small spaces. | When afraid, Save or attack enemy. | Notorious for elaborate weddings. Strong tradition of carefully organized community vengeance on outsiders. |
| 33 | Ravenling | CHA | Can eat rotten food as rations. | Must Save or pick up shiny objects. | Reputation, possibly inflated, for wisdom, dark magic, and low cunning. |
| 34 | Weaselling | STR | Can crawl through narrow spaces. | Must eat uncooked food. Rations spoil in 2 days. | Often boatmen, coastal sailors, and sappers. Frequently fussy over their fur. |
| 35 | Frogling | CHA | Prehensile tongue (as a whip, 10', 1d4 damage). | Drink twice as much water. | Widely dispersed through society. Traditional rivalry with Toadlings. |
| 36 | Toadling | STR | Jump twice as high. | Contagious warts. | Widely dispersed through society. Less prosperous than their traditional rivals, the Froglings. |
| 37 | Ratling | INT | Can crawl through narrow spaces. | Save vs Fear when alone. | Acts of bravery in war have redeemed the ratling in the eyes of many. |
| 38 | Goatling | DEX | No penalties to Movement for rough terrain. | Pervasive, unique stink. -2 to Stealth. | Popular poets, balladeers, and destroyers of community moral standards. Some become famous theologians. |
| 39 | Foxling | WIS | Can hear as accurately as sight at 20'. | Cannot tell the direct, blunt truth. | The life of any party. |
| 40 | Wormling | INT | Can shrink or grow by 25% in 1 round. | -2 to Strength for Inventory Slots. | Very few wormlings become scholars. Notoriously accident prone. |
| 41 | Flealing | STR | Can drink blood as rations. | Cannot wear armour on chest or limbs. | Widely despised. Constant utterly groundless rumours of child abduction, murder, and treachery. |
| 42 | Batling | WIS | Can roll Wis to "hear" walls and major features in the dark. | Will never notice details unless they move. | Rumoured to be theatrical and slightly eccentric. Prefer to work at night, adding to sinister tales. |
| 43 | Mothling | WIS | Can produce 1 cubic foot of rags per day. | Save or stare at bright lights for 1 round. | Often dressed in dozens of layers of clothing. Frequently solitary and studious. |
| 44 | Badgerling | STR | Can dig or excavate as if you have 2 shovels. | Incredibly surly. Save to suffer fools gladly. | Popular fiction describes them as solitary and violent, though they sometimes rise to leadership positions. |
| 45 | Newtling | CHA | Cannot be tied up or entangled in rope. | Heat of the noonday sun deals 1d4 damage / round to you. | Rare, brightly coloured, and furtive. Frequently from marshy areas. Known for strong family pride. |
| 46 | Duckling | CON | Can hold breath for 10 minutes. | Cannot whisper. | Bright and swaggering males, dun and cunning females, or so public opinion goes. |
| 47 | Moleling | INT | Can track a creature by smell. | Cannot see anything more than 30' away. | Raised in a culture of modesty and caution. |
| 48 | Cricketling | STR | Can jump twice as high. | Constant musical rasping. -2 Stealth. | Natural musicians, but primarily farmers in fertile plains. |
| 49 | Sparrowling | WIS | Climb as fast as you can run. | When afraid, will run instead of staying still. | Notoriously nervous and prone to gossip, sparrowlings travel in small groups as mercenaries or pilgrims. |
| 50 | Goblin | DEX | Can see/smell 20' in the dark. | ½ starting HP and Int. Speak in words of 2 syllables or fewer. | Universally loathed. Made of leftovers. Goblinism is contagious. |
{.table .table-striped .table-bordered .table-sm}
{{< /rpg_table >}}

# Extra Resources

Here's some extra reading if you're interested. If nothing you find speaks to you, work with your GM to make your own class or whatever else.

- [Many Rats on a Stick by Skerples](https://coinsandscrolls.blogspot.com/2019/10/osr-glog-based-homebrew-v2-many-rats-on.html). [PDF](/rpg/many_rats_on_stick_v2.pdf)
- [Wizards Post by Skerples](https://coinsandscrolls.blogspot.com/2018/06/osr-how-to-design-glog-wizards.html)
- [GLOG Wizards by Arnold K.](https://goblinpunch.blogspot.com/2016/09/the-glog-wizards.html) [PDF](/rpg/GLOG_wizards_v1.pdf)
- [Who is the GLOGosphere? Post](https://diyanddragons.blogspot.com/2019/03/who-is-glogosphere.html)
- [Wizard Megapost by Yami Bakura](http://www.remixesandrevelations.com/2018/06/the-wizard-megapost.html)
- [Orthodox Wizards Spells](https://coinsandscrolls.blogspot.com/2017/03/osr-100-orthodox-spells.html)
