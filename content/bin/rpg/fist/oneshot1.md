---
title: "FIST - One-Shot 1"
is_readable: true
no_search: true
is_rpg: true
---

Notes for running the FIST Hazard Function funnel mission (ref: https://itch.io/queue/c/2461905/compatible-with-fist?game_id=1684797)


# 1. Character generation

Use Character generator here https://fistref.com/random-merc

Each player should quickly create three FIST characters with one trait, 1D6 MAX HP, no items, no extra MAX HP, and no WAR DICE. Rolling to randomly generate characters is encouraged. Your codenames are referee- assigned alphanumerical designations, e.g. “Foxtrot-9” or “Bravo-7”.

The only available role is SURVIVOR: Describe why you want to live. If you live until the end of the mission, take another trait and gain a role, change your MAX HP to 6, then take a standard issue item, +1D6 MAX HP, or +1D6 WAR DICE.

# 2. Read intro text

> [MIC FEEDBACK] Good morning, patriots. You may be feeling a little woozy right now— that’s to be expected. For the last twenty- four hours, you have been anesthetized and placed in sensory deprivation tanks—that explains the pruny fingers!—while being intravenously administered lysergic acid diethylamide. There’s no need to panic— really, you’ll feel better if you don’t. Rest assured, your fellow bums, dope dealers, and degenerates have already forgotten about you, but your country—or the country you’re squatting in, as the case may be—will never forget the Crucible Program. Look alive, soldiers. [AUDIO ENDS]

# 3. Map reveal

Open the map in GIMP, share your screen and use the erase tool to gradually reveal the map as players walk through the rooms.

[Gimp project](map.xcf)

# 4. Describe room, let players play, repeat...

When players enter a room Dr. Stillman can make some comment to them.

# 5. Tables

{{< rpg_multi_table FullRoom Room Hazards BasicEnemies WildAnimals >}}

{{< rpg_table name="Room" weighted=true hide_table=true >}}
| 2d6+ | Room | Notes |
| ---  | ---  | --- |
| 2.78  | BUNKER (no cover) | Featureless save for bolts in the walls. |
| 5.56  | PADDED ROOM (no cover) | A paltry cage for a human being. |
| 8.33  | REACTOR ROOM (low cover)| A faux reactor dominates the chamber. |
| 11.11 | OFFICE BUILDING (low cover) | Singed paper and shattered glass. Open-plan. |
| 13.89 | PARKING LOT (low cover) | Streetlights illuminate a dusting of cars. |
| 16.67 | TRENCHES (medium cover) | Two muddy trenches, barbed wire and wood. |
| 13.89 | FACTORY (medium cover) | High steel catwalks and an assembly line. |
| 11.11 | WAREHOUSE (high cover) | A maze of high shelves and shipping containers. |
| 8.33  |  HOSPITAL (high cover) | Beds and equipment. Many plastic curtains. |
| 5.56  |  FOREST (high cover) | Transplated cedars densely packed in a cell. |
| 2.78  |  JUNGLE (high cover) | Realistically impenetrable plastic foliage. |
{{< /rpg_table >}}

## Encounters 
{{< rpg_roll "1d6" >}}

| 1d6+ + Rooms Cleared | Encounters | 
| --- | --- |
| 1. | Gun turret, mounted on ceiling |
| 2. | Training android, standing guard |
| 3. | 1D6 training androids, patrolling the room |
| 4. | Heavy android, ready to fight |
| 5. | Gun turret, on four fast robotic legs |
| 6. | Wild animal, starving and terrified (-2 HP) |
| 7. | Control subject, begging for help |
| 8. | 2D6 training androids, on standby mode |
| 9. | 2D6 control subjects bickering pointlessly |
| 10.|  1D6 wild animals, dosed with methamphetamine |
| 11.|  Control subject, dosed with methamphetamine |
| 12.|  1D6 heavy androids, patrolling the room |
| 13.|  Wild animal, 1D6 heavy androids |
| 14.|  2D6 training androids, 1 heavy with +1D6 HP |
| 15.|  Roll 3 × ENCOUNTERS 1D6+0 |
| 16+|  Stronger robot duplicate of a player (+6 MAX HP) |

## Items
{{< rpg_roll "1d6" >}}

| 1d6+ + Rooms Cleared | Items  | 
| --- | --- |
| 1.  | Armor-piercing ammo (weapon ignores ARMOR) |
| 2.  | Bolt-action rifle (1D6+1 DAMAGE) |
| 3.  | Bulletproof vest (1 ARMOR) |
| 4.  | Claymore mine (2D6 DAMAGE) |
| 5.  | Flashlight (can be attached to weapon) |
| 6.  | Gas grenade (1D6 damage to all in room) |
| 7.  | Gas mask (ignore breathing-based damage) |
| 8.  | Trait item (if needed) or lead pipe (1D6 DAMAGE) |
| 9.  | Light machine gun (1D6+1 DAMAGE) |
| 10. |  Medkit (heal 1D6+TAC HP, three uses) |
| 11. |  MRE field rations (heal 1D6 HP, one use) |
| 12. |  Painkillers (ignore 2 DAMAGE, one use) |
| 13. |  Revolver (1D6+1 DAMAGE) |
| 14. |  Riot shield (1 ARMOR, equip as weapon) |
| 15. |  Silencer (attach to any gun) |
| 16+ |  Trait item (if needed) or reroll ITEMS 1D6+8 |

## Enemies
{{< rpg_table name="BasicEnemies" >}}
| 1d6 | Enemy |
| --- | --- |
| 1 | CONTROL SUBJECT (3 HP, worst of 2D6 DAMAGE). An unaltered civilian. |
| 2 | GUN TURRET (6 HP, 1D6 DAMAGE, 1 ARMOR). Chrome, swivels menacingly. |
| 3 | HEAVY ANDROID (8 HP, 1D6+2 DAMAGE, 2 ARMOR). Ammo belts dangle from this boxy | monstrosity. |
| 4 | TRAINING ANDROID (6 HP, 1D6+1 DAMAGE). Manufactured with precision, proudly made in the | | USA. |
| 5 | WILD ANIMAL |
| 6 | None |
{{< /rpg_table >}}


{{< rpg_table name="WildAnimals" >}}
| 1d6 | Wild Animal |
| --- | --- |
| 1 | ALLIGATOR (8 HP, 1D6+2 DAMAGE, 1 ARMOR, roll +FRC to escape jaws) |
| 2 | BEAR (10 HP, 1D6+4 DAMAGE) |
| 3 | LION (8 HP, 1D6+4 DAMAGE) |
| 4 | RATTLESNAKE (3 HP, 3 DAMAGE, poison deals 1D6 DAMAGE when the victim next gets hurt) |
| 5 | 1D6 VULTURES (3 HP, 3 DAMAGE) |
| 6 | ZEBRA (6 HP, 1D6 DAMAGE) |
{{< /rpg_table >}}


## Hazards
{{< rpg_table name="Hazards" weighted=true hide_table=true >}}
| 2d6+ | Hazards | 
| --- | --- |
| 2.78  | Conveyor belt, crushing pistons (2D6 DAMAGE) |
| 5.56  | Flooded, electrified floor (1D6+2 DAMAGE) |
| 8.33  | Fillling with poison gas (1D6 damage) |
| 11.11 | Overturned barrels leaking crude oil |
| 13.89 | Pipes shooting steam (RFX roll or 2 DAMAGE) |
| 16.67 | Pitch black, no visibility |
| 13.89 | 1D6 red barrels (explosion deals 1D6 DAMAGE) |
| 11.11 | Hanging chains (RFX to avoid getting tangled) |
| 8.33  |  Security cameras, alarm system |
| 5.56  |  Laser security net, alarm system |
| 2.78  |  Compactor walls, slowly closing (2D6 DAMAGE) |
{{< /rpg_table >}}
