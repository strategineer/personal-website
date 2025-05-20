---
title: "GMing Tables"
is_readable: true
no_search: true
is_tabletop: true
---

One-click Rollable Tables for generating NPCs, factions, spells, traps, cities, dungeons, etc., using the amazing tables provided in Knave 2e ([credits and attributions](#credits)) and some of my own. If you're curious about why I built this tool or if you would like to contact me [see my notes below](#developer-notes).

<!--more-->

# How does this page work?

Basically, press a button to generate the specified thing (See the [NPC button](#npcs) or the [spell book, relic and patron buttons](#spells-and-relics) if you're unsure of where to start). This page can be of use to GMs prepping adventures for their groups. Also, during play, this page can help GMs to gracefully handle their players doing something unexpected or for GMs who want to generate something on the fly (like spell books or magic items).

{{< toc >}}

## Debug Button

{{< rpg_table_inspect_toggle >}}

# Note to self

## the owl bear stat block

Just use the owl bear stat block if I don't have a stat block for a creature.

owl bear
: AC 14, HP 20, LVL 5, ATK 2 claws (d8) and 1 bite (d8), MOV 40’, MRL 9, NA d4 (d4).

# My Rolls and Tables

## People

### NPCs

{{< rpg_table_button name="NPC" expr="{Name}. {Personality} {Profession}.<br>RP? {Mannerism}. {NPCDetail}.<br>Asset/Liability? {Asset}, {Liability}.<br>Wants to {Goal}.<br>Activity: {Activity}.<br>Relationships: {Relationship}, {Relationship}, {Relationship}." >}}

{{< rpg_table name="Name" >}}
| d2 | NPC |
| --- | --------|
| 1 | {MaleName} {Surname1}{Surname2} |
| 2 | {FemaleName} {Surname1}{Surname2} |
{{< /rpg_table >}}

### Groups

{{< rpg_table name="FactionDesc" >}}
| Faction Desc |
| --------|
|{FactionTrait} and {FactionTrait} {Faction}.<br>Want to {Mission}, {Mission}, {Mission}.<br>Rewards PCs with {Reward}, {Reward}, {Reward}.|
{{< /rpg_table >}}

## Places

### Overworld

{{< rpg_table_button name="LocationDesc" expr="{PlaceTrait} {Location}">}}

{{< rpg_table_button name="StructureDesc" expr="{PlaceTrait} {Structure}" >}}

### Settlements

{{< rpg_table_button name="City" expr="{CityTheme}. {CityTheme}, {CityTheme}. Streets: {StreetDetail}, {StreetDetail}, {StreetDetail}." >}}

{{< rpg_table_button name="Inn" expr="{InnName}.<br>Specialties:<br>Drink: {DrinkDesc}<br>Food: {FoodDesc}" >}}


{{< rpg_table name="InnName" >}}
| d2| Inn |
| --- | --------|
| 1 | The {InnName1} {InnName2} |
| 2 | The {InnName2} and {InnName2} |
{{< /rpg_table >}}


### Dungeons

{{< rpg_table name="DungeonDesc" >}}
| Dungeon Desc |
| --------|
| You stumble upon the {StructureDesc} near the {LocationDesc}.<br>---The following factions are interested in this location---<br>-{FactionDesc}<br>-{FactionDesc}<br>---Revevant NPCs---<br>-{NPC}<br>-{NPC}<br>---Key Rooms---<br>-{RoomDesc}<br>-{RoomDesc}<br>-{RoomDesc}<br>-{RoomDesc}<br>-{RoomDesc}. |
{{< /rpg_table >}}

{{< rpg_table_button name="RoomDesc" expr="{Room}. {RoomTheme}. {RoomDetail}." >}}


{{< rpg_table_button name="Trap" expr="{TrapEffect}. {Mechanism}, {Mechanism}, {Mechanism}. {Hazard}. " >}}


## Items

### Spells and Relics

{{< rpg_table_button name="SpellBook" expr="{SpellBookType} of {GeneratedSpell}" >}}

{{< rpg_table_button name="Relic" expr="{ItemTrait} {Item} of {GeneratedSpellForRelics}. {Decoration}. Made of {Material}.<br>Patron: {Patron}" >}}

{{< rpg_table name="Patron" >}}
| Patron |
| --------|
| {PatronDomains}. {Symbol}. Goal: {Goal}.<br>Personality: {Personality}. {Mannerism}. |
{{< /rpg_table >}}

{{< rpg_table name="PatronDomains" >}}
| d5 | Patron Domains |
| --- | --------|
| 1 | +{Domain}, +{Domain} |
| 2 | +{Domain}, -{Domain} |
| 3 | -{Domain}, -{Domain} |
| 4 | +{Domain} |
| 5 | -{Domain} |
{{< /rpg_table >}}

{{< rpg_table_button name="PotionDesc" expr="Potion of {Potion}. {Color}, {Texture}. Smells like {Scent}. Tastes like {Taste}. Made with {Ingredient}, {Ingredient}, {Ingredient}.">}}

{{< rpg_table name="SpellBookType" hide_button="true" >}}
| d2 | Spell Book Type |
| --- | --------|
| 1 | Tome |
| 2 | Book |
{{< /rpg_table >}}

{{< rpg_table_button name="SpellScroll" expr="Scroll of {GeneratedSpell}" >}}

{{< rpg_table name="Item" >}}
| d100 | Item |
| --- | --------|
| 1 | {Fabric} {Clothing} |
| 2 | {Weapon} |
| 3 | {Tool} |
{{< /rpg_table >}}

{{< rpg_table name="GeneratedSpellForRelics" >}}
| d6 | Spell Formulae |
| --- | --------|
| 1 | {Element} {Form} |
| 2 | {Effect} {Form} |
| 3 | {Effect} {Element} |
| 4 | The {Quality} {Element} {Form} |
| 5 | The {Quality} {Effect} {Form} |
| 6 | The {Quality} {Effect} {Element} |
{{< /rpg_table >}}

### Food and Drink

{{< rpg_table_button name="FoodDesc" expr="{FoodTrait} {Food}. Tastes like {Taste}, smells like {Scent}." >}}

{{< rpg_table_button name="DrinkDesc" expr="{Color} color, tastes like {Taste}, smells like {Scent}." >}}


## Monsters

{{< rpg_table_button name="MonsterDesc" expr="{MonsterTrait} {Monster}.<br>Strong/Weak? {Power}. {Weakness}. <br>Tactic? {Tactic}.<br>Sign/Sound/Scent? {Sign}. {Sound}. {Scent}.<br>Doing? {Activity}." >}}

{{< rpg_table_button name="Chimera" expr="{Animal}, {Animal}. With {Organ}, {Organ}, {Organ}." >}}

# Knave 2e Tables

## Careers

{{< rpg_table name="Career" count="2" >}}
| d100 | Career |
| --- | --------|
|1 | acolyte: candlestick, censer, incense	|
|2 | acrobat: flash powder, balls, lamp oil	|
|3 | actor: wig, makeup, costume	|
|4 | alchemist: acid, mortar/pestle, 6 vials	|
|5 | antiquarian: old coin, flag, lore book	|
|6 | arcanist: spell book, arcane robes, chalk	|
|7 | architect: plumb line, level, ruler	|
|8 | assassin: crossbow, garrote, soft boots	|
|9 | astrologer: star charts, almanac, telescope |
|10 | baker: rolling pin, flour bag, lard block	|
|11 | bandit: mask, manacles, caltrops	|
|12 | barber: scissors, hair oil, straight razor	|
|13 | beast tamer: whip, gloves, leash	|
|14 | beekeeper: honey, mask, smoke bomb	|
|15 | blacksmith: hammer, bellows, tongs	|
|16 | boatman: 10' pole, instrument, paddle	|
|17 | bookbinder: sewing kit, glue, quill/ink	|
|18 | brewer: mash paddle, beer keg, hops	|
|19 | burglar: lockpicks, grappling hook, rope  |
|20 | butcher: cleaver, meat hook, bacon	|
|21 | candlemaker: 10 candles, lamp oil, wax	|
|22 | carpenter: hammer, saw, box of nails	|
|23 | charlatan: costume, fake elixir, degree	|
|24 | cobbler: leather roll, fancy shoes, tacks	|
|25 | coachman: whip, lockbox, oilskin coat	|
|26 | cook: frying pan, salt, olive oil	|
|27 | courier: oilskin bag, local map, lantern	|
|28 | courtier: perfume, wig, fan	|
|29 | cultist: dagger, ritual robes, amulet	|
|30 | cutpurse: knife, caltrops, sack	|
|31 | dyer: 10' pole, dyes, soap	|
|32 | explorer: sextant, spyglass, crampons	|
|33 | falconer: bird cage, gloves, whistle	|
|34 | fence: short sword, file, sealing wax	|
|35 | fisherman: spear, net, fishing tackle	|
|36 | folklorist: prophecy, bones, scales	|
|37 | gambler: rapier, card deck, dice	|
|38 | gamekeeper: sling, horn, rope ladder	|
|39 | gardener: sickle, shovel, shears	|
|40 | grave robber: saw, crowbar, pulleys	|
|41 | gravedigger: shovel, pickaxe, bucket	|
|42 | groom: oats, horse brush, blanket	|
|43 | guard: halberd, livery, horn	|
|44 | headsman: axe, hood, garrote	|
|45 | herbalist: herbs, sickle, herb manual	|
|46 | hermit: staff, fungi, basket	|
|47 | hunter: tent, bearskin, bear trap	|
|48 | innkeeper: ladle, 10 candles, cauldron	|
|49 | inquisitor: manual, vestments, pliers	|
|50 | investigator: journal, manacles, vial	|
|51 | jailer: padlock, 10' chain, wine jug |
|52 | jester: scepter, donkey head, motley |
|53 | jeweler: pliers, loupe, tweezers |
|54 | knight: lady's favor, banner, signet ring |
|55 | kidnapper: chloroform, manacles, hood |
|56 | lawyer: fancy robe, law book, certificate |
|57 | locksmith: crowbar, picks, padlock |
|58 | mason: chisel, hammer, chalk |
|59 | merchant: scales, strongbox, bag of spice |
|60 | miner: pickaxe, lantern, pet canary |
|61 | musician: 3 instruments |
|62 | naturalist: fossil, insect case, geode |
|63 | officer: shoe polish, medal, spyglass |
|64 | oracle: tea leaves, tarot deck, crystal |
|65 | orator: 100 marbles, bullhorn, wax tablet |
|66 | painter: linseed oil, pigments, brushes |
|67 | peddler: bucket, 300' twine, mirror |
|68 | philosopher: staff, lantern, chalk |
|69 | physician: saw, scalpel, wine jug |
|70 | pilgrim: staff, relic, letter of passage |
|71 | pirate: sextant, cannonball, grappling hook |
|72 | pit fighter: net, whip, wine jug |
|73 | playwright: quill/ink, skull, 10 candles |
|74 | poacher: animal scent, bow, 20 arrows |
|75 | poet: stationery, bell, perfume |
|76 | priest: holy water, 10 stakes, prayer book |
|77 | prospector: 10 iron spikes, pickaxe, pan |
|78 | puppeteer: confetti, puppet, sewing kit |
|79 | rat catcher: cage, 10 rat traps, sack |
|80 | saboteur: air bladder, crowbar, bomb |
|81 | sailor: beeswax, pullies, spyglass |
|82 | scout: signal flags, black grease, dice |
|83 | scribe: lamp oil, quill/ink, sealing wax |
|84 | sculptor: chisel, clay, calipers |
|85 | servant: sponge, silverware, poker |
|86 | shepherd: crook, instrument, sling |
|87 | shipwright: drill, hammer, axe |
|88 | singer: mirror, makeup, locket |
|89 | smuggler: pulleys, rope, makeup |
|90 | soldier: tent, card deck, shovel |
|91 | spy: caltrops, poison, forged papers |
|92 | squire: torch, armor polish, trumpet |
|93 | tailor: sewing kit, scissors, soap |
|94 | tattooist: soot pot, needles, 10 candles |
|95 | thieftaker: bear trap, manacles, torch |
|96 | thug: poison, knife, lamp oil |
|97 | torturer: drill, hourglass, 10' chain |
|98 | trapper: bear trap, 300' twine, bear pelt |
|99 | watchman: lantern, trumpet, spear |
|00 | woodcutter: axe, firewood, 50' rope |
{{< /rpg_table >}}

## Traveling

{{< rpg_table name="TravelHazardDie" >}}
| d6 | Travel Hazard |
| --- | --------|
|1| encounter: The party has a random encounter.|
|2| fatigue: Each party member takes 1 damage unless they spend the next watch resting. Ignore while resting.|
|3| depletion: Roll a d6 for each perishable item. On a 1 it has gone bad.|
|4| travel shift: The weather changes.|
|5| sign: PCs find a sign of a nearby encounter or a clue to a secret.|
|6| free: No effect.|
{{< /rpg_table >}}

{{< rpg_table name="Weather" >}}
| 1-3 | Thunderstorm, blizzard in winter |
| 4-8 | Heavy rain, heavy snow in winter |
| 9-17 | Cold for the season |
| 18-28 | Light rain, snow in winter |
| 29-42 | Cool for the season |
| 43-58 | Mild for the season |
| 59-72 | Warm for the season |
| 73-83 | Windy |
| 84-92 | Hot for the season |
| 93-97 | Strong winds |
| 98-00 | Hail in spring, humidity in summer, fog in fall, frost in winter |
{{< /rpg_table >}}

{{< rpg_table name="TravelShift" >}}
| d100 | Travel Shift |
| --- | --------|
| 1 | Acid rain	|
| 2 | Animal migration |
| 3 | Anvil cloud	|
| 4 | Ash cloud	|
| 5 | Ash rain	|
| 6 | Aurora	|
| 7 | Avalanche	|
| 8 | Ball lightning	|
| 9 | Bird migration	|
| 10 | Black blizzard	|
| 11 | Blizzard	|
| 12 | Blood moon	|
| 13 | Brush fire	|
| 14 | {CityEvent} (p. 46)	|
| 15 | Cloudburst	|
| 16 | Cold wave	|
| 17 | Cold weather	|
| 18 | {Color} sky (p. 37)	|
| 19 | {Delusion} (p. 30)	|
| 20 | Dense fog	|
| 21 | {Disaster} (p. 31)	|
| 22 | Downburst	|
| 23 | Drizzle	|
| 24 | Dust devil	|
| 25 | Dust storm	|
| 26 | Earthquake	|
| 27 | {Effect} rain (p. 28)	|
| 28 | Electric storms	|
| 29 | {Element} rain (p. 29) |
| 30 | Fire whirls	|
| 31 | Fireflies	|
| 32 | Firestorms	|
| 33 | Flash flood	|
| 34 | Flooding	|
| 35 | Fluffy clouds	|
| 36 | Fog	|
| 37 | {Food} rain (p. 49)	|
| 38 | Forest fire	|
| 39 | Freezing fog	|
| 40 | Freezing rain	|
| 41 | Grass fire	|
| 42 | Haboob	|
| 43 | Hail	|
| 44 | Hailstorm	|
| 45 | Haze	|
| 46 | Heat lightning	|
| 47 | Heatwave	|
| 48 | Heavy rain	|
| 49 | Hot weather	|
| 50 | Hot winds	|
| 51 | Humidity |
| 52 | Hurricane |
| 53 | Ice storm |
| 54 | Insect swarm |
| 55 | Landslide |
| 56 | Lava flow |
| 57 | Light winds |
| 58 | Lunar eclipse |
| 59 | Meteor shower |
| 60 | Mirage |
| 61 | Mist |
| 62 | Misty rain |
| 63 | Monsoon |
| 64 | Mudflow |
| 65 | Murmuration |
| 66 | Northern lights |
| 67 | Overcast |
| 68 | Planet alignment |
| 69 | Pollen cloud |
| 70 | Pyroclastic flow |
| 71 | Rain of fish |
| 72 | Rain of frogs |
| 73 | Rain of worms |
| 74 | Rainbow |
| 75 | Salt storm |
| 76 | Sandstorm |
| 77 | {Scent} (p. 66) |
| 78 | Showers |
| 79 | Smog |
| 80 | Smoke |
| 81 | Solar eclipse |
| 82 | {Sound} (p. 66) |
| 83 | Stampede |
| 84 | Star jelly |
| 85 | Steam devils |
| 86 | Strong winds |
| 87 | Sulfur clouds |
| 88 | Swamp lights |
| 89 | {Taste} rain (p. 36) |
| 90 | {Texture} rain (p. 36) |
| 91 | Thunderstorms |
| 92 | Tornado |
| 93 | Tremors |
| 94 | Volcanic bombs |
| 95 | Warm rain |
| 96 | Warm winds |
| 97 | Waterspouts |
| 98 | {Weapon} rain (p. 43) |
| 99 | Windstorm |
| 00 | Wispy clouds |
{{< /rpg_table >}}

{{< rpg_table name="Sign" >}}
| d100 | ? |
| --- | --------|
|1| Arguing	|
|2| Ash	|
|3| Bile	|
|4| Blade marks	|
|5| Blood	|
|6| Blood tracks	|
|7| Bone fragments	|
|8| Bones	|
|9| Boreholes	|
|10| Bowers	|
|11| Broken branches |
|12| {Hazard} (p. 17)	|
|13| Burrow	|
|14| Carcass	|
|15| Chewed plants	|
|16| Claw marks	|
|17| {Clothing} (p. 40)	|
|18| Cocoons	|
|19| Crushed grass	|
|20| Dams	|
|21| Diagrams	|
|22| Digging sounds	|
|23| Droppings	|
|24| Droppings scent |
|25| Eggs	|
|26| Eggshells	|
|27| {Element} trail (p. 29) |
|28| {Fabric} scrap (p. 41) |
|29| Fallen trees	|
|30| Feathers	|
|31| Fighting sounds  |
|32| Fire pit	|
|33| Flags	|
|34| Fleeing prey	|
|35| Food cache	|
|36| Food scent	|
|37| {Food} scraps (p. 49) |
|38| Footprints	|
|39| Fruit pits	|
|40| Fur	|
|41| Graffiti	|
|42| Graves	|
|43| Hives	|
|44| Hunters	|
|45| Injured prey	|
|46| Lair	|
|47| Lair scent	|
|48| Letters	|
|49| Mating ground	|
|50| {Mechanism} (p. 17) |
|51| Middens|
|52| {MiscItem} (p. 39)|
|53| Molted husk|
|54| Mounds|
|55| Mucus|
|56| Mud tracks|
|57| Musk|
|58| Nest|
|59| Nesting sounds|
|60| Offspring|
|61| {Organ} (p. 64)|
|62| Pellets|
|63| Pheromones|
|64| Polished surface|
|65| Pollen|
|66| Ritual remnants|
|67| Saliva|
|68| Scales|
|69| {Scent} (p. 66)|
|70| Scorch marks|
|71| Shadows|
|72| Shed skin|
|73| Shells|
|74| Signaling sounds|
|75| Singing|
|76| Slime trails|
|77| {Sound} (p. 66)|
|78| Stalking sounds|
|79| Stripped bark|
|80| Symbols|
|81| Teeth marks|
|82| {Texture} trail (p. 36)|
|83| {Tool} (p. 39)|
|84| Trails|
|85| Traps|
|86| Trash|
|87| Tree scratches|
|88| Tunnels|
|89| Urine|
|90| Urine scent|
|91| Voices|
|92| Wallows|
|93| Warning scent|
|94| Warning sounds|
|95| Warnings|
|96| Wax|
|97| {Weapon} (p. 43)|
|98| Webs|
|99| Wings|
|00| Worshipers|
{{< /rpg_table >}}

{{< rpg_table name="Location">}}
| d100 | ? |
| --- | --------|
|1| Ashland	|
|2| Badland	|
|3| Bamboo forest	|
|4| Basalt columns	|
|5| Bay	|
|6| Beach	|
|7| Bluff	|
|8| Bog	|
|9| Boulder field	|
|10| Brook	|
|11| Butte	|
|12| Caldera	|
|13| Canyon	|
|14| Cave	|
|15| Cliff	|
|16| Cloud forest	|
|17| Coniferous forest |
|18| Copse	|
|19| Crag	|
|20| Crater	|
|21| Creek	|
|22| Crossing	|
|23| Crystals	|
|24| Deciduous forest |
|25| Delta	|
|26| Dunes	|
|27| Dust bowl	|
|28| {Element} field (p. 35)|
|29| Fen	|
|30| Fjord	|
|31| Floodplain	|
|32| Gas vent	|
|33| Geyser	|
|34| Glacier	|
|35| Gorge	|
|36| Grotto	|
|37| Grove	|
|38| Gulch	|
|39| Heath	|
|40| Highland	|
|41| Hollow	|
|42| Hoodoo	|
|43| Hot Spring	|
|44| Ice Sheet	|
|45| Jungle	|
|46| Knoll	|
|47| Lagoon	|
|48| Lair	|
|49| Lake	|
|50| Lakebed |
|51| Lava field|
|52| Lava tube|
|53| Loch|
|54| Mangrove swamp|
|55| Marsh|
|56| Meadow|
|57| Mesa|
|58| Mire|
|59| Moor|
|60| Mountain|
|61| Mud plain|
|62| Oasis|
|63| Oil seep|
|64| Pass|
|65| Pasture|
|66| Petrified forest|
|67| Pit|
|68| Plateau|
|69| Pond|
|70| Prairie|
|71| Quicksand|
|72| Rainforest|
|73| Rapids|
|74| Ravine|
|75| Ridge|
|76| River|
|77| Riverland|
|78| Rockslide|
|79| Salt Flat|
|80| Salt Marsh|
|81| Savanna|
|82| Scree Slope|
|83| Scrubland|
|84| Sinkhole|
|85| Spring|
|86| Steppe|
|87| Stream|
|88| Sulfur Spring|
|89| Swamp|
|90| Taiga|
|91| Tar Pit|
|92| Thicket|
|93| Tundra|
|94| Valley|
|95| Volcanic Plain|
|96| Volcano|
|97| Wasteland|
|98| Waterfall|
|99| Wetlands|
|00| Whirlpool|
{{< /rpg_table >}}

{{< rpg_table name="Structure" >}}
| d100 | Structure |
| --- | --------|
|1 | Abbey	|
|2 | Altar	|
|3 | Amphitheater	|
|4 | Aqueduct	|
|5 | Archive	|
|6 | Asylum	|
|7 | Bandit camp	|
|8 | Barn	|
|9 | Battlefield	|
|10 | Bell tower	|
|11 | Bonfire	|
|12 | Bower	|
|13 | Brazier	|
|14 | {Building} (p. 47)	|
|15 | Cairn	|
|16 | Cart track	|
|17 | Castle	|
|18 | Catacomb	|
|19 | Chapel	|
|20 | City	|
|21 | Cistern	|
|22 | Convent	|
|23 | Crossroads	|
|24 | Dam	|
|25 | Dirt road	|
|26 | Dolmen	|
|27 | {Dungeon} (p. 16)	|
|28 | Farm	|
|29 | Ferry	|
|30 | Festival	|
|31 | Fishing hut	|
|32 | Ford	|
|33 | Forester lodge	|
|34 | Fort	|
|35 | Gallows	|
|36 | Garden	|
|37 | Garrison	|
|38 | Gate	|
|39 | Gibbet	|
|40 | Graveyard	|
|41 | Hamlet	|
|42 | Henge	|
|43 | Hermitage	|
|44 | Hideout	|
|45 | Highway	|
|46 | Hunter's camp	|
|47 | Hunting lodge	|
|48 | {InnName} (inn) (p. 48)	|
|49 | Keep	|
|50 | Library	|
|51 | Lighthouse |
|52 | Logging camp |
|53 | Manor |
|54 | Market |
|55 | Memorial |
|56 | Mill |
|57 | Mine |
|58 | Monastery |
|59 | Monolith |
|60 | Monument |
|61 | Mule track |
|62 | Obelisk |
|63 | Orchard |
|64 | Outpost |
|65 | Paved road |
|66 | Pen |
|67 | Pilgrim camp |
|68 | Pillar |
|69 | Port |
|70 | Prison |
|71 | Pyramid |
|72 | Refugee camp |
|73 | Road |
|74 | {Room} (p. 14) |
|75 | Ruin |
|76 | Shepherd hut |
|77 | Shrine |
|78 | Signal tower |
|79 | Stable |
|80 | Statue |
|81 | Stone bridge |
|82 | Stone circle |
|83 | Surveyor camp |
|84 | Tavern |
|85 | Temple |
|86 | Toll house |
|87 | Tomb |
|88 | Tower |
|89 | Town |
|90 | Trader camp |
|91 | Trail |
|92 | {Trap} (pp. 16-17) |
|93 | Village |
|94 | Wall |
|95 | Watchtower |
|96 | Watermill |
|97 | Well |
|98 | Windmill |
|99 | Wizard tower |
|00 | Wooden bridge |
{{< /rpg_table >}}

{{< rpg_table name="PlaceTrait">}}
| d100 | Place Trait |
| --- | --------|
|1 | Ashen	|
|2 | Bewitching	|
|3 | Black	|
|4 | Blessed	|
|5 | Blighted	|
|6 | Bloody	|
|7 | Boiling	|
|8 | Bright	|
|9 | Broken	|
|10 | Buried	|
|11 | Burning	|
|12 | Charred	|
|13 | Collapsed	|
|14 | {Color} (p. 37)	|
|15 | Crawling	|
|16 | Crimson	|
|17 | Crumbling	|
|18 | Crystalline	|
|19 | Cursed	|
|20 | Dark	|
|21 | Dead	|
|22 | Desolate	|
|23 | Disorienting	|
|24 | Divine	|
|25 | Doomed	|
|26 | Echoing	|
|27 | Eerie	|
|28 | {Effect} (p. 28)	|
|29 | Elder	|
|30 | Eldritch	|
|31 | {Element} (p. 29)	|
|32 | Endless	|
|33 | Filthy	|
|34 | Flooded	|
|35 | Forbidden	|
|36 | Forgotten	|
|37 | Frozen	|
|38 | Ghostly	|
|39 | Glittering	|
|40 | Gloomy	|
|41 | Grim	|
|42 | Haunted	|
|43 | Hidden	|
|44 | Holy	|
|45 | Humid	|
|46 | Infernal	|
|47 | Infested	|
|48 | Jagged	|
|49 | Labyrinthine	|
|50 | Living	|
|51 | Loathsome|
|52 | Mechanical|
|53 | Misty|
|54 | Murmuring|
|55 | Mysterious|
|56 | Oozing|
|57 | Overgrown|
|58 | Perilous|
|59 | Petrified|
|60 | Phantasmal|
|61 | Phasing|
|62 | Pristine|
|63 | {Quality} (p. 28)|
|64 | Ravaged|
|65 | Ravenous|
|66 | Restless|
|67 | Revered|
|68 | {RoomTheme} (p. 15)|
|69 | Savage|
|70 | Scorching|
|71 | Screaming|
|72 | Shadowy|
|73 | Shifting|
|74 | Shivering|
|75 | Shrouded|
|76 | Silent|
|77 | Singing|
|78 | Sinister|
|79 | Sinking|
|80 | Sleeping|
|81 | {Sound} (p. 66)|
|82 | Stony|
|83 | Sunken|
|84 | Swamped|
|85 | Swarming|
|86 | Sweltering|
|87 | Terrifying|
|88 | {Texture} (p. 36)|
|89 | Thorny|
|90 | Thundering|
|91 | Twisting|
|92 | Unquiet|
|93 | Vandalized|
|94 | Vast|
|95 | Watching|
|96 | Whispering|
|97 | Windy|
|98 | Withered|
|99 | Wondrous|
|00 | Writhing|
{{< /rpg_table >}}

## Delving

{{< rpg_table name="DungeonHazardDie" >}}
| d6 | NPC |
| --- | --------|
|1| encounter: The party has an encounter, usually rolled from a table designed for the dungeon. The GM determines the encounter’s reaction, activity, distance from the party, and if they are surprised (p. 19).|
|2| fatigue: Each party member takes 1 damage unless they spend the next turn resting. The damage may be higher in dungeons with harsh conditions. Ignore this result while resting.|
|3| burn: Lit torches burn out. New torches can be lit from the embers of the previous ones.|
|4| delve shift: The dungeon environment changes. If a dungeon doesn’t have any obvious shifts, use minor effects like sounds, temperature shifts, wind, falling debris, apparitions, or vermin.  Possible shifts: 1. {DelveShift} 2. {DelveShift} 3. {DelveShift}|
|5| sign: The players find a sign (p. 10) that a random encounter (p. 19) is nearby. The next time an encounter is rolled in this dungeon, the PCs meets that creature. Alternatively, reveal a clue to something hidden. Possible Signs: 1. {Sign} 2. {Sign} 3. {Sign}|
|6| free: No effect.
{{< /rpg_table >}}

{{< rpg_table name="DelveShift" >}}
| d100 | Delve Shift |
| --- | --------|
|1| Alarm	|
|2| Animal sounds	|
|3| Apparition	|
|4| Awakening	|
|5| Battle	|
|6| Blessing	|
|7| Blood scent	|
|8| Ceilings moves	|
|9| Ceremony	|
|10| {CityEvent} (p. 46)	|
|11| Cleaning	|
|12| Cloud of flies	|
|13| Combat sounds	|
|14| Construction	|
|15| Crystal growth	|
|16| Curse	|
|17| Dead rise	|
|18| Decay scent	|
|19| Decreased patrols |
|20| {Delusion} (p. 30)	|
|21| Device activates |
|22| {Disaster} (p. 31)	|
|23| Doors close	|
|24| Doors open	|
|25| Draining	|
|26| Dungeon rotates |
|27| Dungeon slides	|
|28| Dungeon tilts	|
|29| Dust cloud	|
|30| Earthquake	|
|31| Element flow (p.29) |
|32| Eruption	|
|33| Excavation	|
|34| Faction alliance	|
|35| Faction truce	|
|36| Faction war	|
|37| Feast	|
|38| Fire	|
|39| Flammable gas	|
|40| Flooding	|
|41| Floors move	|
|42| Fog	|
|43| Food scent	|
|44| Foraging	|
|45| Freezing	|
|46| Gravel flow	|
|47| Hatching	|
|48| Hot	|
|49| Humid	|
|50| Hunt |
|51| Incense|
|52| Increased patrols|
|53| Invasion|
|54| Lava flow|
|55| Leak|
|56| Liquid sounds|
|57| Machine sounds|
|58| Manure scent|
|59| Monster scent|
|60| Monster sounds|
|61| Mud flow|
|62| Music|
|63| Nesting|
|64| New faction|
|65| New monster|
|66| New rooms|
|67| Oil flow|
|68| Passages close|
|69| Passages open|
|70| Plague|
|71| Planar overlay|
|72| Plants bloom|
|73| Plants grow|
|74| Plants wither|
|75| Repairs|
|76| Rift opens|
|77| Room revolves|
|78| Room slides|
|79| Room tilts|
|80| Rooms filled in|
|81| Rooms rearrange|
|82| Sand flow|
|83| {Scent} (p. 66)|
|84| Singing|
|85| Sleep|
|86| Smoke|
|87| {Sound} (p. 66)|
|88| Static charge|
|89| Summoning|
|90| Total silence|
|91| {TrapEffect} (p. 28)|
|92| Traps rearm|
|93| Vermin swarm|
|94| Voices|
|95| Walls close in|
|96| Walls move|
|97| Walls widen|
|98| Water flow|
|99| Wind|
|00| Worship|
{{< /rpg_table >}}

{{< rpg_table name="Room" >}}
| d100 | Room |
| --- | --------|
|1 | Alchemy room	|
|2 | Alcohol cellar	|
|3 | Arboretum	|
|4 | Archery range	|
|5 | Arena	|
|6 | Armory	|
|7 | Arsenal	|
|8 | Art gallery	|
|9 | Art studio	|
|10 | Audience hall	|
|11 | Aviary	|
|12 | Ballroom	|
|13 | Banquet hall	|
|14 | Barracks	|
|15 | Baths	|
|16 | Bed chamber	|
|17 | Brewery	|
|18 | {Building} (p. 47)	|
|19 | Catacombs	|
|20 | Cave	|
|21 | Cell	|
|22 | Chapel	|
|23 | Chasm	|
|24 | Church	|
|25 | Cistern	|
|26 | Cloakroom	|
|27 | Concert hall	|
|28 | Conjuring room |
|29 | Courtroom	|
|30 | Courtyard	|
|31 | Crematorium	|
|32 | Crypt	|
|33 | Dining room	|
|34 | Divination room |
|35 | Dormitory	|
|36 | {Dungeon} (p. 16)	|
|37 | Dressing room	|
|38 | Embalming room |
|39 | Fighting pit	|
|40 | Fissure	|
|41 | Forge	|
|42 | Fountain room	|
|43 | Gallery	|
|44 | Game room	|
|45 | Garden	|
|46 | Gatehouse	|
|47 | Great hall	|
|48 | Guardroom	|
|49 | Hall	|
|50 | Infirmary	|
|51 | Junk room|
|52 | Kennel|
|53 | Kitchen|
|54 | Laboratory|
|55 | Lair|
|56 | Larder|
|57 | Latrine|
|58 | Library|
|59 | Lounge|
|60 | Map room|
|61 | Maze|
|62 | {Mechanism} (p. 17)|
|63 | Meditation room|
|64 | Menagerie|
|65 | Mess hall|
|66 | Mews|
|67 | Museum|
|68 | Music room|
|69 | Nursery|
|70 | Observatory|
|71 | Pantry|
|72 | Parlor|
|73 | Pit|
|74 | Poison room|
|75 | Pool|
|76 | Prison|
|77 | Record room|
|78 | {Location} (p. 10)|
|79 | Salon|
|80 | Scriptorium|
|81 | Scullery|
|82 | Sculpture gallery|
|83 | Shop|
|84 | Shrine|
|85 | Slaughterhouse|
|86 | Smoking room|
|87 | Stables|
|88 | Storeroom|
|89 | {Structure} (p. 11)|
|90 | Study|
|91 | Tapestry room|
|92 | Theater|
|93 | Throne room|
|94 | Torture room|
|95 | Training hall|
|96 | Treasury|
|97 | Trophy room|
|98 | Vault|
|99 | Work pit|
|00 | Workshop|
{{< /rpg_table >}}

{{< rpg_table name="RoomDetail" >}}
| d100 | ? |
| --- | --------|
|1| Alcohol	|
|2| Alcove	|
|3| Altar	|
|4| {Archetype} (p. 53)	|
|5| Balcony	|
|6| Bars	|
|7| Bas-relief	|
|8| Bath	|
|9| Bed	|
|10| Bones	|
|11| {Book} (book) (p. 40)	|
|12| Brazier	|
|13| Broken glass	|
|14| Cabinet	|
|15| Cage	|
|16| Carpet	|
|17| Carvings	|
|18| Cauldron	|
|19| Chains	|
|20| Chalk marks	|
|21| Chandelier	|
|22| Chest	|
|23| {Clothing} (p. 40)	|
|24| Coffin	|
|25| Coins	|
|26| Collapsed ceiling |
|27| Collapsed floor	|
|28| Collapsed walls	|
|29| Crawlspace	|
|30| Crumbling ceiling |
|31| Crumbling floors |
|32| Crumbling walls |
|33| Curtain	|
|34| Dais	|
|35| Dishes	|
|36| Display case	|
|37| Dumbwaiter	|
|38| Elevator	|
|39| {Fabric} (p. 41)	|
|40| Fireplace	|
|41| Flowing water	|
|42| {Food} (p. 49)	|
|43| Fountain	|
|44| Fungi	|
|45| Graffiti	|
|46| {Hazard} (p. 17)	|
|47| Incense	|
|48| {Ingredient} (p. 37)	|
|49| Instrument	|
|50| Lantern	|
|51| Map |
|52| {Material} (p. 42) |
|53| {Mechanism} (p. 17) |
|54| Message |
|55| Mine cart |
|56| Mirror |
|57| {MiscItem} (p. 39) |
|58| {Monster} (p. 61) |
|59| Mural |
|60| Nest |
|61| Painting |
|62| Pews |
|63| Pillar |
|64| Pipes |
|65| Pool |
|66| Portcullis |
|67| {Potion} (p. 35) |
|68| Refuse pile |
|69| Repairs |
|70| Roots |
|71| Rubble |
|72| {Scent} (p. 66) |
|73| Shaft |
|74| Shelf |
|75| {Sign} (p. 10) |
|76| Skeletons |
|77| Smoke |
|78| Sofa |
|79| {Sound} (p. 66) |
|80| Spyhole |
|81| Stairs |
|82| Stalactites |
|83| Statues |
|84| Stove |
|85| {StreetDetail} (p. 47) |
|86| {Symbol} (p. 33) |
|87| Table |
|88| Tapestry |
|89| Thick dust |
|90| Throne |
|91| Toilet |
|92| {Tool} (p. 39) |
|93| Torch |
|94| Torture device |
|95| Training dummy |
|96| Trap door |
|97| {Treasure} (p. 42) |
|98| Vines |
|99| Wardrobe |
|00| {Weapon} (p. 43)|
{{< /rpg_table >}}

{{< rpg_table name="RoomTheme" >}}
| d100 | Room Theme |
| --- | --------|
|1 | {Activity} (p. 19)	|
|2 | Blessings	|
|3 | Blindness	|
|4 | Blood	|
|5 | Bones	|
|6 | {Book} (p. 40)	|
|7 | Brains	|
|8 | Chaos	|
|9 | {CityTheme} (p. 46) |
|10 | Collapse	|
|11 | Combat	|
|12 | Corpses	|
|13 | Corruption	|
|14 | Creation	|
|15 | Criminal activity |
|16 | Crows	|
|17 | Cults	|
|18 | Curses	|
|19 | Death	|
|20 | Decay	|
|21 | Disease	|
|22 | Divination	|
|23 | {Domain} (p. 33)	|
|24 | Dragons	|
|25 | Drowning	|
|26 | Eyes	|
|27 | {Effect} (p. 28)	|
|28 | {Element} (p. 29)	|
|29 | Faces	|
|30 | Feasting	|
|31 | Fog	|
|32 | Gateways	|
|33 | Ghosts	|
|34 | Gods	|
|35 | Hands	|
|36 | Holy war	|
|37 | Hunger	|
|38 | Hunting	|
|39 | Imprisonment	|
|40 | Invasion	|
|41 | Invention	|
|42 | Inversion	|
|43 | {ItemTrait} (p. 43)	|
|44 | Judgment	|
|45 | Light	|
|46 | Locks	|
|47 | Madness	|
|48 | {MagicSchool} (p. 31) |
|49 | Memory	|
|50 | Mirrors	|
|51 | Mouths|
|52 | Music|
|53 | Mutation|
|54 | Outsiders|
|55 | Pageantry|
|56 | Paranoia|
|57 | {PlaceTrait} (p. 11)|
|58 | Poison|
|59 | Priests|
|60 | Prophecy|
|61 | Rats|
|62 | Refugees|
|63 | Restless dead|
|64 | Revenge|
|65 | Riches|
|66 | Rituals|
|67 | Rival factions|
|68 | Sacrifice|
|69 | Savage fury|
|70 | Secret knowledge|
|71 | Serpents|
|72 | Shadows|
|73 | Skulls|
|74 | Slavery|
|75 | Slime|
|76 | Smoke|
|77 | Songs|
|78 | Souls|
|79 | Spiders|
|80 | Stasis|
|81 | Statues|
|82 | Summoning|
|83 | Survival|
|84 | Teeth|
|85 | Tentacles|
|86 | Tests and trials|
|87 | The moon|
|88 | The stars|
|89 | The sun|
|90 | Thorns|
|91 | Trickery|
|92 | Tyranny|
|93 | Vampires|
|94 | Water|
|95 | Wild growth|
|96 | Wine|
|97 | Winter|
|98 | Wolves|
|99 | Worms|
|00 | Zealotry|
{{< /rpg_table >}}

{{< rpg_table name="Dungeon" >}}
| d100 | ? |
| --- | --------|
|1| Alchemy lab	|
|2| Animal burrow	|
|3| Aquarium	|
|4| Arboretum	|
|5| Archive	|
|6| Arena	|
|7| Armory	|
|8| Art gallery	|
|9| Asylum	|
|10| Automaton	|
|11| Aviary	|
|12| Bank	|
|13| Bathhouse	|
|14| {Building} (p. 47)	|
|15| Bunker	|
|16| Casino	|
|17| Castle	|
|18| Catacombs	|
|19| Cathedral	|
|20| Cave system	|
|21| Cistern	|
|22| City	|
|23| Clock	|
|24| Corpse	|
|25| Court	|
|26| Criminal den	|
|27| Curiosity cabinet |
|28| Dam	|
|29| Deathtrap	|
|30| Depot	|
|31| Dig site	|
|32| Dormitory	|
|33| Faction hideout	|
|34| Factory	|
|35| Fashion gallery	|
|36| Feasting hall	|
|37| Forge	|
|38| Garbage pit	|
|39| Gateway	|
|40| Guildhall	|
|41| Historical gallery |
|42| Hospital	|
|43| Hotel	|
|44| Ice caves	|
|45| Insect hive	|
|46| Instrument	|
|47| Kennel	|
|48| Kitchen	|
|49| Labyrinth	|
|50| Larder |
|51| Lava tubes|
|52| Library|
|53| Living dungeon|
|54| Lock|
|55| Mansion|
|56| Marketplace|
|57| Mausoleum|
|58| Memorial|
|59| Menagerie|
|60| Mill|
|61| Mine|
|62| Monastery|
|63| Monster gallery|
|64| Monster lab|
|65| Monster lair|
|66| Museum|
|67| Mushroom forest|
|68| Nest|
|69| Nursery|
|70| Observatory|
|71| Orrery|
|72| Palace|
|73| Prison|
|74| Race track|
|75| {Room} (p. 14)|
|76| Sanctum|
|77| Sculpture gallery|
|78| Sewer|
|79| Ship|
|80| Silo|
|81| Slaughterhouse|
|82| Stable|
|83| Stronghold|
|84| {Structure} (p. 11)|
|85| Summoning site|
|86| Temple|
|87| Testing ground|
|88| Theater|
|89| Theme park|
|90| Tomb|
|91| Tower|
|92| Training complex|
|93| Treasure vault|
|94| Tree|
|95| Warehouse|
|96| Warren|
|97| Waterworks|
|98| Weapon gallery|
|99| Wine cellar|
|00| Work pit|
{{< /rpg_table >}}

{{< rpg_table name="TrapEffect" >}}
| d100 | ? |
| --- | --------|
|1| Absorbing	|
|2| Accelerating	|
|3| Arranging	|
|4| Attracting	|
|5| Balancing	|
|6| Beating	|
|7| Bending	|
|8| Blocking	|
|9| Blowing	|
|10| Bludgeoning	|
|11| Boiling	|
|12| Burning	|
|13| Bursting	|
|14| Burying	|
|15| Catching	|
|16| Charging	|
|17| Choking	|
|18| Closing	|
|19| Compressing	|
|20| Contracting	|
|21| Counting down	|
|22| Crushing	|
|23| Deafening	|
|24| Delivering	|
|25| {DelveShift} (p. 14) |
|26| Desiccating	|
|27| Dividing	|
|28| Draining	|
|29| Dropping	|
|30| {Effect} (p. 28)	|
|31| Expanding	|
|32| Extending	|
|33| Filling	|
|34| Flapping	|
|35| Floating	|
|36| Focusing	|
|37| Freezing	|
|38| Grabbing	|
|39| Hardening	|
|40| Hooking	|
|41| Immobilizing	|
|42| Imprisoning	|
|43| Inflating	|
|44| Inserting	|
|45| Launching	|
|46| Lifting	|
|47| Locking	|
|48| Loosening	|
|49| Lowering	|
|50| Opening |
|51| Oscillating|
|52| Piercing|
|53| Pinching|
|54| Pointing|
|55| Poking|
|56| Pulling|
|57| Pushing|
|58| Reflecting|
|59| Releasing|
|60| Removing|
|61| Repelling|
|62| Rolling|
|63| Scooping|
|64| Scrambling|
|65| Severing|
|66| Shaking|
|67| Shocking|
|68| Shooting|
|69| Shredding|
|70| Sifting|
|71| Sinking|
|72| Slashing|
|73| Sliding|
|74| Slowing|
|75| Smothering|
|76| Soaking|
|77| Softening|
|78| Spinning|
|79| Squeezing|
|80| Staining|
|81| Sticking|
|82| Stretching|
|83| Swinging|
|84| Tangling|
|85| Tearing|
|86| Tightening|
|87| Tilting|
|88| Toppling|
|89| Transporting|
|90| Tripping|
|91| Turning|
|92| Twisting|
|93| Unbalancing|
|94| Unearthing|
|95| Unlocking|
|96| Weighing|
|97| Whipping|
|98| Winding|
|99| Wobbling|
|00| Wrapping|
{{< /rpg_table >}}

{{< rpg_table name="Hazard" >}}
| d100 | ? |
| --- | --------|
|1| Acceleration	|
|2| Acid	|
|3| Alarm	|
|4| Alcohol	|
|5| {Animal} (p. 64)	|
|6| Arrow	|
|7| Automatons	|
|8| Avalanche	|
|9| Axe	|
|10| Bat	|
|11| Blinding light	|
|12| Boiling tar	|
|13| Boiling water	|
|14| Cold	|
|15| Crocodile	|
|16| Crude oil	|
|17| Darkness	|
|18| Deafening noise  |
|19| {Delusion} (p. 30)	|
|20| {DelveShift} (p. 14)  |
|21| {Disaster} (p. 31)	|
|22| Disease	|
|23| Drill	|
|24| Dust	|
|25| {Effect} (p. 28)	|
|26| Electricity	|
|27| {Element} (p. 29)	|
|28| Fall	|
|29| Fear gas	|
|30| Fire	|
|31| Fire ant	|
|32| Force field	|
|33| Glass shard	|
|34| Glue	|
|35| Grease	|
|36| Guillotine	|
|37| Hammer	|
|38| Heat	|
|39| Heavy gas	|
|40| Hook	|
|41| Hot metal	|
|42| Hot wax	|
|43| Hydrogen	|
|44| Ice block	|
|45| Ink	|
|46| Lantern oil	|
|47| Lava	|
|48| Log	|
|49| Magnet	|
|50| Mercury |
|51| Metal jaws|
|52| Mold|
|53| Molten gold|
|54| Molten iron|
|55| {Monster} (p. 61)|
|56| Mud|
|57| {Mutation} (p. 30)|
|58| Nail|
|59| Needle|
|60| Noose|
|61| Ooze|
|62| Phosphorus|
|63| Piano wire|
|64| Piranha|
|65| Poison|
|66| Poison gas|
|67| Quicksand|
|68| Radiation|
|69| Rage gas|
|70| Rat|
|71| Sand|
|72| Saw|
|73| Scissor|
|74| Sewage|
|75| Shredder|
|76| Sleeping gas|
|77| Smoke|
|78| Snake|
|79| Spear|
|80| {Spell} (pp. 22-25)|
|81| Spider|
|82| Spike|
|83| Spore|
|84| Steam|
|85| Stench|
|86| Stone block|
|87| Sulfur|
|88| Sword|
|89| Tar|
|90| Thin air|
|91| Thorns|
|92| {TravelShift} (p. 9)|
|93| Vacuum|
|94| Vine|
|95| Wasps|
|96| Water|
|97| {Weapon} (p. 43)|
|98| Web|
|99| Wet cement|
|00| Wind|
{{< /rpg_table >}}

{{< rpg_table name="Mechanism" >}}
| d100 | ? |
| --- | --------|
|1| Air pump	|
|2| Ball bearings	|
|3| Barrel	|
|4| Bars	|
|5| Basket	|
|6| Beam	|
|7| Bell	|
|8| Bellows	|
|9| Belt	|
|10| Bow	|
|11| Breaks	|
|12| Bucket	|
|13| Button	|
|14| Cable	|
|15| Cage	|
|16| Capstan	|
|17| Cartwheel	|
|18| Catapult	|
|19| Chain pull	|
|20| Chains	|
|21| Channel	|
|22| Claw	|
|23| Clock	|
|24| Copper wire	|
|25| Corridor	|
|26| Crane	|
|27| Creature	|
|28| Crossbow	|
|29| Curtain	|
|30| Cylinder	|
|31| Dial	|
|32| Door	|
|33| Drain	|
|34| Drum	|
|35| Fan	|
|36| Float	|
|37| Gears	|
|38| Grate	|
|39| Hamster wheel	|
|40| Handwheel	|
|41| Hook	|
|42| Hourglass	|
|43| Hydrogen tank	|
|44| Jack	|
|45| Ladder	|
|46| Latch	|
|47| Lens	|
|48| Lift	|
|49| Light beam	|
|50| Lock |
|51| Mirror|
|52| Net|
|53| Paddle|
|54| Pendulum|
|55| Pin|
|56| Pipes|
|57| Pit|
|58| Platform|
|59| Plug|
|60| Pneumatics|
|61| Pole|
|62| Portcullis|
|63| Pressure plate|
|64| Pulley|
|65| Rack and pinion|
|66| Rails|
|67| Ramp|
|68| Ratchet|
|69| Reservoir|
|70| Room|
|71| Scales|
|72| Scissor lift|
|73| Screw|
|74| Scoop|
|75| Shaft|
|76| Slide|
|77| Sluice|
|78| Sphere|
|79| Spring|
|80| Stairs|
|81| Switch|
|82| Tank treads|
|83| Tap|
|84| Thread|
|85| {Tool} (p. 39)|
|86| Trap door|
|87| Treadmill|
|88| Trigger|
|89| Tripwire|
|90| Trolley|
|91| Vacuum pump|
|92| Valve|
|93| Vice|
|94| Walls|
|95| Water pump|
|96| Waterwheel|
|97| Wedge|
|98| Weights|
|99| Winch|
|00| Windmill|
{{< /rpg_table >}}

## Encounters

{{< rpg_table name="NpcReaction" >}}
| d100 | NPC Reaction |
| --- | -------- |
| 1-3 | Kill the PCs |
| 4-8 | Injure or capture the PCs |
| 9-17 | Harass or rob the PCs |
| 18-28 | Insult, threaten, or command the PCs |
| 29-42 | Avoid the PCs |
| 43-58 | Ignore the PCs |
| 59-72 | Follow or observe the PCs |
| 73-83 | Greet or question the PCs |
| 84-92 | Share information with the PCs |
| 93-97 | Perform minor favors the PCs |
| 98-00 | Ask to join the PCs’ party |
{{< /rpg_table >}}

{{< rpg_table name="Activity" >}}
| d100 | Activity |
| --- | --------|
|1| Ambushing	|
|2| Arguing	|
|3| Awarding	|
|4| Beautifying	|
|5| Befouling	|
|6| Begging	|
|7| Besieging	|
|8| Birthing	|
|9| Blessing	|
|10| Brawling	|
|11| Building	|
|12| Burgling	|
|13| Burying	|
|14| Camping	|
|15| Capturing	|
|16| Carving	|
|17| Celebrating	|
|18| Chasing	|
|19| Cleaning	|
|20| Clearing	|
|21| Climbing	|
|22| Collecting	|
|23| Competing	|
|24| Convening	|
|25| Cooking	|
|26| Courting	|
|27| Crafting	|
|28| Cursing	|
|29| Dancing	|
|30| Defacing	|
|31| Defending	|
|32| Delivering	|
|33| Destroying	|
|34| Dousing	|
|35| Dueling	|
|36| Dying	|
|37| Eating	|
|38| {Effect} (p. 28)	|
|39| Escaping	|
|40| Escorting	|
|41| Excavating	|
|42| Executing	|
|43| Feasting	|
|44| Fighting	|
|45| Fleeing	|
|46| Foraging	|
|47| Fortifying	|
|48| Gambling	|
|49| {Goal} (p. 57)	|
|50| Guarding	|
|51| Harvesting|
|52| Hauling|
|53| Healing|
|54| Hiding|
|55| Igniting|
|56| Infiltrating|
|57| Initiating|
|58| Instructing|
|59| Kidnapping|
|60| Looting|
|61| Mapping|
|62| Marrying|
|63| {Mission} (p. 51)|
|64| Mourning|
|65| Murdering|
|66| Pardoning|
|67| Parleying|
|68| Patrolling|
|69| Performing|
|70| Planning|
|71| Planting|
|72| Playing|
|73| Praying|
|74| Preaching|
|75| Processing|
|76| Questioning|
|77| Repairing|
|78| Rescuing|
|79| Resting|
|80| Rioting|
|81| Robbing|
|82| Sacrificing|
|83| Scavenging|
|84| Scouting|
|85| Searching|
|86| Selling|
|87| Singing|
|88| Sleeping|
|89| {Sound} (p. 66)|
|90| Summoning|
|91| Surrendering|
|92| Swindling|
|93| {Tactic} (p. 67)|
|94| Tending|
|95| Threatening|
|96| Tracking|
|97| Trading|
|98| Training|
|99| Traveling|
|00| Worshiping|
{{< /rpg_table >}}

## Spellcasting

{{< rpg_table name="Spell" show_table="true" >}}
| d100 | Spell |
| --- | --------|
|1| adhere: INT objects become sticky enough to hold a PC to a ceiling. Lasts until washed. |
|2| animal friendship: INT animals obey your orders as well as a trained dog for one day. |
|3| animate object: INT objects obey your orders. They move 15' per round. |
|4| anthropomorphize: INT animals gain human intelligence for one day. |
|5| arcane eye: You create a magic eye that flies around under your control for INT turns. You can see through it as well as your normal eyes. |
|6| astral prison: An object is frozen in time and space within an invulnerable crystal shell for INT turns. |
|7| attract: INT + 1 objects are strongly magnetically attracted to each other if they come within 10'. |
|8| auditory illusion: You can create illusory sounds that seem to come from INT directions of your choice. |
|9| babble: INT creatures must loudly and clearly repeat everything you think. They are otherwise mute. |
|10| beast form: You and your possessions turn into an animal for up to INT days. |
|11| befuddle: A creature is unable to form short-term memories for INT turns. |
|12| bend fate: Roll INT + 1 d20s. After this point, when any creature you can see makes a check, use and discard one of the rolled results until they are all gone. |
|13| body swap: You switch bodies with a creature you touch for INT turns. If one body dies, the other dies as well. |
|14| catherine: A woman wearing a blue dress appears for INT hours. She will obey polite, safe requests. |
|15| charm: INT humanoids believe they are close friends with you until proven otherwise. |
|16| command: A creature obeys a single, INT-word command that doesn't harm it. |
|17| comprehend: You are fluent in all languages for INT hours. |
|18| control plants: Plants within INT x 10' obey you. They move 5' per round. |
|19| control weather: You control your hex's weather for INT hours. |
|20| detect magic: Anything magical within line of sight glows and reveals its properties on request. Lasts 1 day or until you make INT requests. |
|21| disassemble: INT body parts may be detached at will. You can still control them. Lasts until they are reattached. |
|22| disguise: You may alter the look of INT humanoids as long as they remain humanoid. Lasts until the subjects speak. |
|23| displace: An object appears to be up to INT x 10' from its actual position. |
|24| duplicate: Create INT fragile, porcelain copies of items you can see. |
|25| earthquake: The ground shakes violently for INT rounds. |
|26| elasticity: Your body can stretch up to INT x 10'. |
|27| elemental wall: Creates a wall of ice or fire INT x 40' long, 5' wide and 10' tall. The wall can curve however you want. |
|28| filch: INT visible items teleport to your hands. |
|29| fog cloud: Fog spreads out in a INT x 10' radius from you. Fades in one turn. |
|30| gravity shift: INT creatures can alter their "down" direction at will. |
|31| greed: INT creatures become obsessed with possessing a visible item. |
|32| haste: INT creatures have their movement speed tripled. |
|33| hatred: INT creatures start attacking each other for one turn or until one dies. |
|34| hear whispers: A creature can hear all sounds up to 120' away for INT turns.  |
|35| hover: Make INT objects hover 2' above the ground, frictionless. They can support the weight of up to INT people.  |
|36| hypnotize: A creature enters a trance and will answer INT yes or no questions.  |
|37| icy touch: An ice layer spreads across a surface, up to INT x 10' in radius. |
|38| increase gravity: The gravity within INT x 10' of you triples. |
|39| invisible tether: INT objects within 10' of each other cannot be moved more than 10' apart from each other. |
|40| knock: INT locks unlock. |
|41| leap: You can jump up to INT x 10'. |
|42| liquid air: The air within INT x 10' of you becomes swimmable. |
|43| lock: A door cannot be opened by mundane means for INT turns. |
|44| magic suppressor: All magic is nullified while within INT x 10' of you. |
|45| manse: A furnished house with INT rooms appears for 1 day. It has no food or gear and does not count as a safe haven. |
|46| marble madness: Your pockets refill with marbles every round for INT rounds. |
|47| masquerade: All creatures within INT x 10' of you are compelled to dance.  |
|48| miniaturize: You and INT other touched creatures become mouse-sized. |
|49| mirror image: INT illusory copies of you, under your control, appear. |
|50| mirrorwalk: A mirror becomes a gate to another mirror you touched today. |
|51| multiarm: You gain INT extra arms. |
|52| night sphere: An INT x 40' wide sphere of total darkness appears. |
|53| objectify: INT willing creatures become inanimate, immobile objects of your choice for as long as they wish. They can still hear and see. |
|54| ooze form: Your body and gear become living slime for INT turns. |
|55| pacify: INT creatures develop an intense hatred of violence unless attacked. |
|56| phantom coach: A coach scoops up INT creatures (who are outdoors) and deposits them in a random adjacent hex.  |
|57| phobia: INT creatures become terrified of an object. |
|58| pit: A pit 10' wide and INT x 10' deep opens in the ground. |
|59| primeval surge: An object grows to the size of an elephant for INT turns. If it is a creature, it is enraged. |
|60| psychometry: The GM answers INT yes or no questions about an object. |
|61| pull: An object of any size is pulled directly towards you with the force of INT men for one round. |
|62| push: An object of any size is pushed directly away from you with the force of INT men for one round. |
|63| raise dead: INT unarmed skeletons rise from the ground to serve you. |
|64| read mind: You can hear the surface thoughts of creatures for INT turns. |
|65| repel: INT + 1 objects are strongly magnetically repelled from each other if they come within 10'. |
|66| scry: You can share the vision of a creature you touched today for INT turns. |
|67| sculpt elements: Inanimate material acts like clay in your hands for INT turns. |
|68| shroud: INT creatures are invisible for as long as they can hold their breath (CON x 3 rounds). |
|69| shuffle: INT creatures switch places randomly. |
|70| silence: All sound is deadened within 10' of you for INT turns. |
|71| sleep: INT creatures fall asleep. |
|72| smoke form: Your body and gear become living smoke for INT turns. |
|73| snail knight: In 10 minutes, a knight atop a giant snail rides into view. He may aid you for INT days if he finds you worthy. The snail cannot move faster than a walk. |
|74| sniff: A creature can smell all scents up to 120' away for INT turns. |
|75| sort: Inanimate items sort themselves according to INT categories you set. The categories must be visually verifiable. |
|76| speak with dead: The spirit of a touched dead body appears and will answer INT questions (if it can). |
|77| spectacle: A clearly unreal illusion appears under your control for INT days. It may be up to the size of a palace and has full motion and sound. |
|78| spellseize: Cast this as a reaction to another spell of level INT or less being cast to make a temporary copy of it that you can cast within 1 day. |
|79| spider climb: You can climb surfaces like a spider for INT turns. |
|80| summon cube: You may summon or banish a 5' cube of earth 5 times per round for INT rounds. Cubes must be affixed to the earth or to other cubes. |
|81| summon idol: A carved stone statue up to INT x 10' tall rises from the ground. |
|82| swarm: You become a swarm of crows, rats, or piranhas for INT turns. You only take damage from area effects. |
|83| telekinesis: You may mentally manipulate items (one at a time) up to 10 feet away for INT turns. |
|84| telepathy: You can project your thoughts into a mind within INT hexes. |
|85| teleport: An object teleports to a clear patch of ground up to INT x 40' away from its origin point. |
|86| thaumaturgic anchor: An object becomes the target of every spell cast within 120' of it for INT turns. |
|87| thicket: A thicket of trees and dense brush up to INT x 40' wide sprouts up over the course of one round. |
|88| time jump: An object disappears as it jumps INT turns into the future. When it returns, it destroys any matter in its space. |
|89| time rush: Time within INT x 10' of you goes 10 times faster than the rest of the world. Lasts 10 rounds (for you). |
|90| time slow: Time within INT x 10' of you goes 10 times slower than the rest of the world. Lasts 10 rounds (for you). |
|91| truth sense: You can detect lies for INT hours. |
|92| unravel: Cast this as a reaction to another spell of level INT or less going off to nullify it. |
|93| upwell: A spring of seawater erupts, producing a thousand cubic feet of water per turn for INT turns. |
|94| vision: You create an illusory object with full motion and sound that only one creature can sense. Lasts INT turns. |
|95| visual illusion: You create INT silent, immobile, illusory objects that last until they are touched. |
|96| ward: A silver circle 40' across appears on the ground around you. Until you leave the circle, INT types of things that you name cannot cross it. |
|97| web: You can shoot INT x 40' of strong, sticky web. Lasts until burned. |
|98| whirlwind: You create a vortex of air INT x 10' wide that can deflect missiles. |
|99| wizard mark: Your finger produces ulfire-colored paint for INT hours. This paint is only visible to you, and can be seen at any distance, even through objects. 1 |
|00| x-ray vision: You can see through INT feet of material.|
{{< /rpg_table >}}

{{< rpg_table name="GeneratedSpell" >}}
| d12 | Spell Formulae |
| --- | --------|
| 1 | {Element} {Form} |
| 2 | {Effect} {Form} |
| 3 | {Effect} {Element} |
| 4 | The {Quality} {Element} {Form} |
| 5 | The {Quality} {Effect} {Form} |
| 6 | The {Quality} {Effect} {Element} |
| 7 | {WizardName}’s {Element} {Form} |
| 8 | {WizardName}’s {Effect} {Form} |
| 9 | {WizardName}’s {Effect} {Element} |
| 10 | {WizardName}’s {Quality} {Element} {Form} |
| 11 | {WizardName}’s {Quality} {Effect} {Form} |
| 12 | {WizardName}’s {Quality} {Effect} |
{{< /rpg_table >}}


{{< rpg_table name="WizardName" >}}
| d100 | Wizard Name |
| ---- | --------|
| 1 | Abrogast |
| 2 | Angvar |
| 3 | Armolok |
| 4 | Asterwin |
| 5 | Azerphon |
| 6 | Barbaloff |
| 7 | Boglin |
| 8 | Borgarot |
| 9 | Byzby |
| 10 | Candula |
| 11 | Chalgot |
| 12 | Cronibal |
| 13 | Cydinax |
| 14 | Darj |
| 15 | Dormog |
| 16 | Dregwith |
| 17 | Dulzant |
| 18 | Elmeer |
| 19 | Eofast |
| 20 | Evthalon |
| 21 | Felonse |
| 22 | Fenundor |
| 23 | Folgun |
| 24 | Gelonvir |
| 25 | Garzant |
| 26 | Gathifex |
| 27 | Gilux |
| 28 | Gyodo |
| 29 | Hashman |
| 30 | Helkhal |
| 31 | Hetemtul |
| 32 | Hoonai |
| 33 | Ifit |
| 34 | Ildefad |
| 35 | Imzirian |
| 36 | Irolo |
| 37 | Jorkhal |
| 38 | Jorphdan |
| 39 | Kaldash |
| 40 | Karneblin |
| 41 | Kirtep |
| 42 | Kisdal |
| 43 | Krolgo |
| 44 | Leodelf |
| 45 | Lexikrin |
| 46 | Lestin |
| 47 | Lomard |
| 48 | Majdin |
| 49 | Mazifant |
| 50 | Melkash |
| 51 | Mizisto |
| 52 | Mordandred |
| 53 | Nazmok |
| 54 | Nobtrik |
| 55 | Nothry |
| 56 | Noonund |
| 57 | Nizmo |
| 58 | Obrigal |
| 59 | Ornoza |
| 60 | Osrat |
| 61 | Otilix |
| 62 | Pandelo |
| 63 | Panderbal |
| 64 | Perdeo |
| 65 | Pevin |
| 66 | Quartat |
| 67 | Quasmir |
| 68 | Quilian |
| 69 | Quinfan |
| 70 | Redrak |
| 71 | Roshmor |
| 72 | Rudishan |
| 73 | Rumalto |
| 74 | Sekeen |
| 75 | Sivinez |
| 76 | Snilimar |
| 77 | Sofnu |
| 78 | {Surname} (p. 55) |
| 79 | Tasham |
| 80 | Tchamukal |
| 81 | Tenat |
| 82 | Turminster |
| 83 | Ukanel |
| 84 | Umbalem |
| 85 | Uneni |
| 86 | Urokar |
| 87 | Vanceus |
| 88 | Vermulsin |
| 89 | Voriel |
| 90 | Wallester |
| 91 | Wenton |
| 92 | Wiltrik |
| 93 | Xedu |
| 94 | Xepheran |
| 95 | Xolark |
| 96 | Yamorthrax |
| 97 | Yandant |
| 98 | Zanuptra |
| 99 | Zarugaz |
| 00 | Zilik |
{{< /rpg_table >}}

{{< rpg_table name="Quality" >}}
| d100 | Quality |
| ---- | --------|
| 1 | Abnormal |
| 2 | Abominable |
| 3 | Advanced |
| 4 | Ancestral |
| 5 | Ancient |
| 6 | Arcane |
| 7 | Artful |
| 8 | Baleful |
| 9 | Bizarre |
| 10 | Canonical |
| 11 | Celestial |
| 12 | Cerebral |
| 13 | Chaotic |
| 14 | {Color} (p. 37) |
| 15 | Cosmic |
| 16 | Crafty |
| 17 | Cryptic |
| 18 | Curious |
| 19 | Detestable |
| 20 | Dismal |
| 21 | Dreadful |
| 22 | Elder |
| 23 | Eldritch |
| 24 | Enigmatic |
| 25 | Esoteric |
| 26 | Excellent |
| 27 | Exquisite |
| 28 | Extraordinary |
| 29 | Fantastic |
| 30 | Fey |
| 31 | Foul |
| 32 | Galactic |
| 33 | Ghastly |
| 34 | Grand |
| 35 | Grim |
| 36 | Grotesque |
| 37 | Hateful |
| 38 | Hideous |
| 39 | Horrible |
| 40 | Incomparable |
| 41 | Incomprehensible |
| 42 | Inexplicable |
| 43 | Infernal |
| 44 | Ingenious |
| 45 | Inscrutable |
| 46 | Insidious |
| 47 | Iridescent |
| 48 | Jocular |
| 49 | Lawful |
| 50 | Legendary |
| 51 | Loathsome |
| 52 | Magnificent |
| 53 | Majestic |
| 54 | Marvelous |
| 55 | Masterful |
| 56 | Miraculous |
| 57 | Mysterious |
| 58 | Noetic |
| 59 | Noxious |
| 60 | Odious |
| 61 | Ominous |
| 62 | Original |
| 63 | Orthodox |
| 64 | Ostentatious |
| 65 | Otherworldly |
| 66 | Peculiar |
| 67 | Pernicious |
| 68 | Phenomenal |
| 69 | {PlaceTrait} (p. 11) |
| 70 | Planar |
| 71 | Planetary |
| 72 | Preeminent |
| 73 | Primal |
| 74 | Primeval |
| 75 | Primordial |
| 76 | Prodigious |
| 77 | Psychedelic |
| 78 | Remarkable |
| 79 | Resplendent |
| 80 | Royal |
| 81 | Sacred |
| 82 | {Scent} (p. 66) |
| 83 | Sinister |
| 84 | {Sound} (p. 66) |
| 85 | Splendid |
| 86 | Subtle |
| 87 | Superior |
| 88 | Supreme |
| 89 | {Taste} (p. 36) |
| 90 | {Texture} (p. 36) |
| 91 | True |
| 92 | Uncanny |
| 93 | Unfathomable |
| 94 | Unnatural |
| 95 | Unorthodox |
| 96 | Unspeakable |
| 97 | Vile |
| 98 | Whimsical |
| 99 | Wondrous |
| 00 | Wretched |
{{< /rpg_table >}}

{{< rpg_table name="Effect" >}}
| d100 | Effect |
| ---- | --------|
| 1 | Absorbing |
| 2 | Accelerating |
| 3 | {Activity} (p. 19) |
| 4 | Amusing |
| 5 | Animating |
| 6 | Armoring |
| 7 | Attracting |
| 8 | Avenging |
| 9 | Awakening |
| 10 | Banishing |
| 11 | Beautifying |
| 12 | Bewildering |
| 13 | Binding |
| 14 | Blinding |
| 15 | Blossoming |
| 16 | Burning |
| 17 | Charming |
| 18 | Cleansing |
| 19 | Commanding |
| 20 | Communicating |
| 21 | Concealing |
| 22 | Condemning |
| 23 | Corroding |
| 24 | Corrupting |
| 25 | Crushing |
| 26 | Darkening |
| 27 | Dazzling |
| 28 | Deafening |
| 29 | Deciphering |
| 30 | Diminishing |
| 31 | Disguising |
| 32 | Diing |
| 33 | Draining |
| 34 | Duplicating |
| 35 | Electrifying |
| 36 | Emboldening |
| 37 | Enraging |
| 38 | Enticing |
| 39 | Etherealizing |
| 40 | Excruciating |
| 41 | Expanding |
| 42 | Foreseeing |
| 43 | Freezing |
| 44 | Fusing |
| 45 | Hardening |
| 46 | Haunting |
| 47 | Healing |
| 48 | Identifying |
| 49 | Illuminating |
| 50 | Imprisoning |
| 51 | Infecting |
| 52 | Intoxicating |
| 53 | Irradiating |
| 54 | Irritating |
| 55 | Levitating |
| 56 | Liquefying |
| 57 | Maddening |
| 58 | Menacing |
| 59 | Mending |
| 60 | Mesmerizing |
| 61 | Mindreading |
| 62 | Mocking |
| 63 | Monitoring |
| 64 | Multiplying |
| 65 | Mutating |
| 66 | Nauseating |
| 67 | Nullifying |
| 68 | Pacifying |
| 69 | Persuading |
| 70 | Petrifying |
| 71 | Piercing |
| 72 | Preserving |
| 73 | Pummeling |
| 74 | Putrefying |
| 75 | Reflecting |
| 76 | Refreshing |
| 77 | Regenerating |
| 78 | Repelling |
| 79 | Retrieving |
| 80 | Revealing |
| 81 | Saddening |
| 82 | Sanctifying |
| 83 | Scrying |
| 84 | Sealing |
| 85 | Shielding |
| 86 | Silencing |
| 87 | Slicing |
| 88 | Spawning |
| 89 | Stinging |
| 90 | Strangling |
| 91 | Summoning |
| 92 | Teleporting |
| 93 | Terrifying |
| 94 | Transmuting |
| 95 | {TrapEffect} (p. 28) |
| 96 | Transporting |
| 97 | Vaporizing |
| 98 | Warding |
| 99 | Wearying |
| 00 | Withering |
{{< /rpg_table >}}

{{< rpg_table name="Element" >}}
| d100 | Element |
| ---- | --------|
| 1 | Acid |
| 2 | Amber |
| 3 | Ash |
| 4 | Beer |
| 5 | Bile |
| 6 | Blood |
| 7 | Blossom |
| 8 | Bone |
| 9 | Brass |
| 10 | Brimstone |
| 11 | Brine |
| 12 | Butter |
| 13 | Chalk |
| 14 | Chaos |
| 15 | Clay |
| 16 | Cloud |
| 17 | Cold |
| 18 | Crystal |
| 19 | Darkness |
| 20 | Death |
| 21 | {Domain} (p. 33) |
| 22 | Dream |
| 23 | Dust |
| 24 | {Fabric} (p. 41) |
| 25 | Flame |
| 26 | Flesh |
| 27 | Foam |
| 28 | Fog |
| 29 | {Food} (p. 49) |
| 30 | Frost |
| 31 | Fume |
| 32 | Fungus |
| 33 | Ghost |
| 34 | Glass |
| 35 | Glue |
| 36 | Gravel |
| 37 | Hail |
| 38 | Heat |
| 39 | Honey |
| 40 | Ice |
| 41 | Incense |
| 42 | Ink |
| 43 | Iron |
| 44 | Ivory |
| 45 | Lava |
| 46 | Lead |
| 47 | Leaf |
| 48 | Light |
| 49 | Lightning |
| 50 | Marmalade |
| 51 | {Material} (p. 42) |
| 52 | Memory |
| 53 | Miasma |
| 54 | Moss |
| 55 | Mud |
| 56 | Nectar |
| 57 | Oatmeal |
| 58 | Obsidian |
| 59 | Oil |
| 60 | Paint |
| 61 | Paper |
| 62 | Perfume |
| 63 | Plague |
| 64 | Poison |
| 65 | Pollen |
| 66 | Quicksilver |
| 67 | Radiation |
| 68 | Rain |
| 69 | Root |
| 70 | Rot |
| 71 | Salt |
| 72 | Sand |
| 73 | Sap |
| 74 | Shadow |
| 75 | Silk |
| 76 | Slime |
| 77 | Smoke |
| 78 | Snow |
| 79 | Soot |
| 80 | Spark |
| 81 | Speed |
| 82 | Spore |
| 83 | Steam |
| 84 | Stench |
| 85 | Stone |
| 86 | Storm |
| 87 | Sugar |
| 88 | Syrup |
| 89 | Taffy |
| 90 | Tar |
| 91 | Tea |
| 92 | Tears |
| 93 | Thorn |
| 94 | Vine |
| 95 | Void |
| 96 | Water |
| 97 | Wax |
| 98 | Wind |
| 99 | Wine |
| 00 | Wood |
{{< /rpg_table >}}

{{< rpg_table name="Form" >}}
| d100 | Form |
| ---- | --------|
| 1 | {Animal} (p. 6 ) |
| 2 | Arc |
| 3 | Archer |
| 4 | Armor |
| 5 | Arrow |
| 6 | Aura |
| 7 | Avalanche |
| 8 | Axe |
| 9 | Beacon |
| 10 | Beam |
| 11 | Beast |
| 12 | Blade |
| 13 | Blast |
| 14 | Blob |
| 15 | Bolt |
| 16 | Bubble |
| 17 | Cage |
| 18 | Carriage |
| 19 | Chain |
| 20 | Chariot |
| 21 | Circle |
| 22 | Cloak |
| 23 | {Clothing} (p. 40) |
| 24 | Cloud |
| 25 | Coil |
| 26 | Colossus |
| 27 | Column |
| 28 | Cone |
| 29 | Crown |
| 30 | Cube |
| 31 | Disk |
| 32 | Dragon |
| 33 | Eye |
| 34 | Fang |
| 35 | Finger |
| 36 | Fissure |
| 37 | Fist |
| 38 | Flood |
| 39 | Fly |
| 40 | Fountain |
| 41 | Gate |
| 42 | Gaze |
| 43 | Geyser |
| 44 | Gloves |
| 45 | Guardian |
| 46 | Hammer |
| 47 | Hand |
| 48 | Hawk |
| 49 | Horn |
| 50 | Hound |
| 51 | Key |
| 52 | Knife |
| 53 | Knight |
| 54 | Mask |
| 55 | {Mechanism} (p. 17) |
| 56 | {MiscItem} (p. 39) |
| 57 | Monolith |
| 58 | {Monster} (p. 61) |
| 59 | Mouth |
| 60 | {Organ} (p. 64) |
| 61 | Path |
| 62 | Pit |
| 63 | Pool |
| 64 | Pulse |
| 65 | Pyramid |
| 66 | Ray |
| 67 | Rune |
| 68 | Sanctuary |
| 69 | Serpent |
| 70 | Servant |
| 71 | Shield |
| 72 | Skeleton |
| 73 | Skin |
| 74 | Song |
| 75 | Spear |
| 76 | Sphere |
| 77 | Spider |
| 78 | Spike |
| 79 | Spray |
| 80 | Staff |
| 81 | Steed |
| 82 | Storm |
| 83 | Strike |
| 84 | {Structure} (p. 11) |
| 85 | {Symbol} (p. 33) |
| 86 | Tangle |
| 87 | {Tool} (p. 39) |
| 88 | Torrent |
| 89 | Touch |
| 90 | Tree |
| 91 | Tunnel |
| 92 | Vortex |
| 93 | Wall |
| 94 | Wave |
| 95 | {Weapon} (p. 43) |
| 96 | Web |
| 97 | Wheel |
| 98 | Whip |
| 99 | Word |
| 00 | Zone |
{{< /rpg_table >}}

{{< rpg_table name="Mutation" >}}
| d100 | Mutation |
| --- | --------|
|1| Ages backwards  |
|2| Ages faster	|
|3| {Animal} body (p. 64) |
|4| {Animal} ears (p. 64) |
|5| {Animal} eyes (p. 64) |
|6| {Animal} form (p. 64) |
|7| {Animal} head (p. 64) |
|8| {Animal} limb (p. 64) |
|9| {Animal} scent (p. 64) |
|10| {Animal} skin (p. 64) |
|11| {Animal} tail (p. 64) |
|12| {Animal} teeth (p. 64) |
|13| {Animal} voice (p. 64) |
|14| Antennae	|
|15| Antlers	|
|16| Arms grow	|
|17| Bat wings	|
|18| Beak	|
|19| Bird wings	|
|20| Bleeds acid	|
|21| Chameleon eyes |
|22| Claws	|
|23| {Color} skin (p. 37)	|
|24| Crystal growth	|
|25| Drooling	|
|26| Duck bill	|
|27| Ears grow	|
|28| {Element} blood (p. 29) |
|29| {Element} body (p. 29) |
|30| {Element} breath (p. 29) |
|31| Emits fumes	|
|32| Excretes ooze	|
|33| Extra arms	|
|34| Extra eyes	|
|35| Extra fingers	|
|36| Extra heads	|
|37| Extra legs	|
|38| Eye stalks	|
|39| Eyes grow	|
|40| Fangs	|
|41| Feathers	|
|42| Feet swell	|
|43| Fins	|
|44| Fly eyes	|
|45| Fungal growth	|
|46| Gain d20 inches  |
|47| Gills	|
|48| Hair growth	|
|49| Hair loss	|
|50| Hands swell |
|51| Head swells|
|52| Horns|
|53| Invisible head|
|54| Jelly arms|
|55| Legs grow|
|56| Long tongue|
|57| Lose d20 inches|
|58| {Mannerism} (p. 59)|
|59| {MonsterTrait} (p. 65)|
|60| No eyes|
|61| No nose|
|62| No teeth|
|63| {NPCDetail} (p. 56)|
|64| One arm|
|65| One eye|
|66| One leg|
|67| {Organ} (p. 64)|
|68| {Personality} (p. 56)|
|69| Pig snout|
|70| {Power} (p. 65)|
|71| Rat tail|
|72| Scales|
|73| {Scent} (p. 66)|
|74| Scorpion tail|
|75| Shaggy fur|
|76| Shell|
|77| Skin boils|
|78| Skin hardens|
|79| Skin pattern|
|80| Skin sags|
|81| Skin shedding|
|82| Smoke breath|
|83| Snake hair|
|84| {Sound} (p. 66)|
|85| Spines|
|86| Spinnerets|
|87| Suction cups|
|88| Sweats blood|
|89| Tentacles|
|90| {Texture} body (p. 36)|
|91| Totally numb|
|92| Translucent skin|
|93| Transparent skin|
|94| Tusks|
|95| Two faces|
|96| Warts|
|97| Webbed hands|
|98| Weight doubles|
|99| Weight halves|
|00| Wooly|
{{< /rpg_table >}}

{{< rpg_table name="Delusion" >}}
| d100 | ? |
| --- | --------|
|1| {Activity} (p. 19)	|
|2| Always drunk	|
|3| Always polite	|
|4| Always rude	|
|5| Always sleepy	|
|6| Amnesia	|
|7| {Animal} (p. 64)	|
|8| {Asset} (p. 58)	|
|9| Aura reading	|
|10| Automaton	|
|11| Being followed	|
|12| Cannot count	|
|13| Cannot lie	|
|14| Cannot read	|
|15| Chosen one	|
|16| Clone	|
|17| Constant rage	|
|18| Dark vision	|
|19| Demonic	|
|20| Divine	|
|21| Extra limb	|
|22| Falls in love	|
|23| Famous	|
|24| Fears birds	|
|25| Fears blood	|
|26| Fears {Domain} (p. 33)  |
|27| Fears fire	|
|28| Fears gold	|
|29| Fears iron	|
|30| Fears music	|
|31| Fears own hand  |
|32| Fears PC	|
|33| Fears rain	|
|34| Fears rivers	|
|35| Fears sleep	|
|36| Fears sunlight	|
|37| Fears {Symbol} (p. 33) |
|38| Fears the moon	|
|39| Flight	|
|40| Genius	|
|41| Gets lost	|
|42| {Goal} (p. 57)	|
|43| Gorgeous	|
|44| Hates violence	|
|45| Healing touch	|
|46| Hideous	|
|47| Illuminati	|
|48| Immortal	|
|49| In an RPG	|
|50| Infamous |
|51| Invisible|
|52| Invisible servant|
|53| Invulnerable|
|54| Language switch|
|55| {Liability} (p. 58)|
|56| {Mannerism} (p. 59)|
|57| Medium|
|58| Mind controlled|
|59| Missing limb|
|60| {Mission} (p. 51)|
|61| {Monster} (p. 61)|
|62| {MonsterTrait} (p. 65)|
|63| Must dance|
|64| Must lie|
|65| Must obey|
|66| Must shout|
|67| Must skip|
|68| Must steal|
|69| {Name} (pp. 54-55)|
|70| {NPCDetail} (p. 56)|
|71| {Organ} (p. 64)|
|72| Personal army|
|73| {Personality} (p. 56)|
|74| Planar traveler|
|75| {Power} (p. 65)|
|76| {Profession} (p. 57)|
|77| Prophet|
|78| Reincarnated|
|79| Rich|
|80| Says thoughts|
|81| Secret monarch|
|82| Sees dead people|
|83| Shapeshifter|
|84| Silent|
|85| Skin {Texture} (p. 36)|
|86| {Sound} (p. 66)|
|87| Spy|
|88| Super strength|
|89| Talks to animals|
|90| Talks to plants|
|91| Telekinetic|
|92| Telepathic|
|93| Time traveler|
|94| Vampire|
|95| {Weakness} (p. 67)|
|96| Weather control|
|97| Werewolf|
|98| Whispers|
|99| {WizardName} (p. 27)|
|00| X-ray vision|
{{< /rpg_table >}}

{{< rpg_table name="Disaster" >}}
| d100 | ? |
| --- | --------|
|1 |Acid rain	|
|2 |Aging accelerates |
|3 |Aging reverses	|
|4 |All iron rusts	|
|5 |Amnesia	|
|6 |Animal revolt	|
|7 |Animals die	|
|8 |Animals mutate |
|9 |Animals speak	|
|10 |Birds attack	|
|11 |Birds die	|
|12 |Body swaps	|
|13 |Cities move	|
|14 |City appears	|
|15 |City changes	|
|16 |Deadly fog	|
|17 |{Delusion} (p. 30)	|
|18 |Demon invasion |
|19 |Doors lock	|
|20 |Dragon wakes	|
|21 |Dream plague	|
|22 |Drought	|
|23 |Earth to sand	|
|24 |Earthquake	|
|25 |{Effect} rain (p. 28)	|
|26 |{Element} rain (p. 29) |
|27 |Endless day	|
|28 |Endless night	|
|29 |Endless rain	|
|30 |Endless storm	|
|31 |Endless twilight |
|32 |Endless winter	|
|33 |Eruption	|
|34 |Fae return	|
|35 |Famine	|
|36 |Fear epidemic	|
|37 |Firestorm	|
|38 |Fish die	|
|39 |Fish speak	|
|40 |Flesh to stone	|
|41 |Flood	|
|42 |Forest appears	|
|43 |Forgetfulness	|
|44 |Giants march	|
|45 |Gold to tin	|
|46 |Graves open	|
|47 |Gravity decreases |
|48 |Gravity increases |
|49 |Hills move	|
|50 |Iron to cloth |
|51 |Language loss|
|52 |Lightning storm|
|53 |Living nightmare|
|54 |Locusts|
|55 |Maggots|
|56 |Magic barrier|
|57 |Mass blindness|
|58 |Mass hypnosis|
|59 |Mass insanity|
|60 |Mass possession|
|61 |Mass slumber|
|62 |Mass telepathy|
|63 |Meteor strike|
|64 |Mirages|
|65 |Mirrors speak|
|66 |{Mutation} (p. 30)|
|67 |No stars|
|68 |Objects animate|
|69 |Outsider enters|
|70 |People shrink|
|71 |People vanish|
|72 |Pits open|
|73 |Plague|
|74 |Planar overlay|
|75 |Plants wither|
|76 |Portal opens|
|77 |Rage epidemic|
|78 |Rampant growth|
|79 |Rifts open|
|80 |Rivers move|
|81 |Rivers reverse|
|82 |Roads move|
|83 |Shadows detach|
|84 |Shadows speak|
|85 |Smoke|
|86 |Space distorts|
|87 |Stone to flesh|
|88 |Stones speak|
|89 |{Texture} rain (p. 36)|
|90 |Time loop|
|91 |Time slows|
|92 |Time warp|
|93 |Tornado|
|94 |Total silence|
|95 |Tower appears|
|96 |Trees march|
|97 |Voices of dead|
|98 |Water to blood|
|99 |{Weapon} rain (p. 43)|
|00 |Windstorm|
{{< /rpg_table >}}

{{< rpg_table name="MagicSchool" >}}
| d100 | ? |
| --- | --------|
|1| Abjuration	|
|2| Air	|
|3| Alchemy	|
|4| Alteration	|
|5| Animation	|
|6| Anti-magic	|
|7| Archery	|
|8| Architecture	|
|9| Armor	|
|10| Artifice	|
|11| Beasts	|
|12| Biomancy	|
|13| Birds	|
|14| {Book} (p. 40)	|
|15| Charms	|
|16| Chromatic	|
|17| Conjuration	|
|18| Counterspells	|
|19| Creation	|
|20| Darkness	|
|21| Death	|
|22| Desert	|
|23| Destruction	|
|24| Divination	|
|25| {Domain} (p. 33)	|
|26| Dragons	|
|27| Dreams	|
|28| Earth	|
|29| Emotions	|
|30| Enchantment	|
|31| Evocation	|
|32| Fear	|
|33| Finding	|
|34| Fire	|
|35| Fish	|
|36| Flight	|
|37| Food	|
|38| Force	|
|39| Forest	|
|40| Fungi	|
|41| Geometry	|
|42| Healing	|
|43| Ice	|
|44| Ignorance	|
|45| Illness	|
|46| Illumination	|
|47| Illusion	|
|48| Insects	|
|49| Invocation	|
|50| Knowledge |
|51| Lightning|
|52| Martial arts|
|53| Memory|
|54| Metamagic|
|55| Mind control|
|56| Mirrors|
|57| Misdirection|
|58| Mist|
|59| Music|
|60| Necromancy|
|61| Oratory|
|62| Outsiders|
|63| Planes|
|64| Portals|
|65| Power|
|66| Protection|
|67| Rays|
|68| Reptiles|
|69| Revelation|
|70| {RoomTheme} (p. 15)|
|71| Sea|
|72| Servants|
|73| Shadow|
|74| Shaping|
|75| Sight|
|76| Sound|
|77| Speed|
|78| Stars|
|79| Stasis|
|80| Staves|
|81| Stealth|
|82| Stones|
|83| Storms|
|84| Summoning|
|85| Sun|
|86| Swords|
|87| Telekinesis|
|88| Telepathy|
|89| Teleportation|
|90| Theft|
|91| Time|
|92| Transmutation|
|93| Trickery|
|94| Vampirism|
|95| Walls|
|96| Water|
|97| Weapons|
|98| Wild magic|
|99| Wind|
|00| Witchery|
{{< /rpg_table >}}

## Relic Magic 
{{< rpg_table name="Domain" >}}
| d100 | ? |
| --- | --------|
|1| Acid	|
|2| Alchemy	|
|3| Beauty	|
|4| Bees	|
|5| Beggars	|
|6| Betrayal	|
|7| Birds	|
|8| Blades	|
|9| Blood	|
|10| Blossoms	|
|11| {Book} (p. 40)	|
|12| Clay	|
|13| Clouds	|
|14| Commerce	|
|15| Courage	|
|16| Cowards	|
|17| Craftsmanship	|
|18| Crows	|
|19| Darkness	|
|20| Deserts	|
|21| Destruction	|
|22| Disease	|
|23| Doors	|
|24| Dreams	|
|25| Duels	|
|26| Eagles	|
|27| Earthquakes	|
|28| Fire	|
|29| Fish	|
|30| Forge	|
|31| Fungi	|
|32| Gluttony	|
|33| Greed	|
|34| Healing	|
|35| Horses	|
|36| Hunger	|
|37| Illusions	|
|38| Jealousy	|
|39| Language	|
|40| Lava	|
|41| Libraries	|
|42| Light	|
|43| Lightning	|
|44| Love	|
|45| Luck	|
|46| Machines	|
|47| Madness	|
|48| {MagicSchool} (p. 31) |
|49| Mazes	|
|50| Mirrors |
|51| Mountains|
|52| Murderers|
|53| Music|
|54| Oratory|
|55| Performance|
|56| Poison|
|57| Priests|
|58| Prisoners|
|59| Rage|
|60| Rain|
|61| Revenge|
|62| Revolution|
|63| Roads|
|64| {RoomTheme} (p. 15)|
|65| Royalty|
|66| Rust|
|67| Sand|
|68| Secrets|
|69| Serpents|
|70| Silence|
|71| Slaves|
|72| Sleep|
|73| Smoke|
|74| Soldiers|
|75| Spiders|
|76| Swamps|
|77| Tailors|
|78| The blind|
|79| The elderly|
|80| The future|
|81| The grave|
|82| The harvest|
|83| The hearth|
|84| The hunt|
|85| The haw|
|86| The sea|
|87| Thieves|
|88| Thorns|
|89| Travelers|
|90| Trees|
|91| Trickery|
|92| Truth|
|93| Tundra|
|94| Tunnels|
|95| Vermin|
|96| Walls|
|97| Wind|
|98| Wine|
|99| Winter|
|00| Wolves|
{{< /rpg_table >}}

{{< rpg_table name="Symbol" >}}
| d100 | ? |
| --- | --------|
|1| {Animal} (p. 64)	|
|2| Antlers	|
|3| Arrow	|
|4| Axe	|
|5| Bear	|
|6| Bell	|
|7| Bird	|
|8| Blood drop	|
|9| Book	|
|10| Boots	|
|11| Bow	|
|12| Bowl	|
|13| Branch	|
|14| Brazier	|
|15| Cauldron	|
|16| Chain	|
|17| Chariot	|
|18| Circle	|
|19| {Clothing} (p. 40)	|
|20| Cloud	|
|21| Coin	|
|22| Constellation	|
|23| Crab	|
|24| Cross	|
|25| Crown	|
|26| Crystal	|
|27| Dagger	|
|28| Deer	|
|29| Dice	|
|30| Eye	|
|31| Fangs	|
|32| Feather	|
|33| Fish	|
|34| Fist	|
|35| Flower	|
|36| Fountain	|
|37| {Food} (p. 49)	|
|38| {Form} (p. 29)	|
|39| Fox	|
|40| Frog	|
|41| Gate	|
|42| Goat	|
|43| Hammer	|
|44| Hand	|
|45| Heart	|
|46| Helmet	|
|47| Hook	|
|48| Horn	|
|49| Horse	|
|50| Hourglass |
|51| Key|
|52| Knot|
|53| Lamp|
|54| Leaf|
|55| Lightning bolt|
|56| Lock|
|57| Mask|
|58| {MiscItem} (p. 39)|
|59| Moon|
|60| Nut|
|61| Octopus|
|62| {Organ} (p. 64)|
|63| Ox|
|64| Pen|
|65| Pincer|
|66| Pine cone|
|67| Planet|
|68| Rabbit|
|69| Rat|
|70| Ring|
|71| Scorpion|
|72| Scales|
|73| Scroll|
|74| Serpent|
|75| Shield|
|76| Sickle|
|77| Skull|
|78| Snail|
|79| Snowflake|
|80| Spear|
|81| Spiral|
|82| Square|
|83| Staff|
|84| Star|
|85| Sun|
|86| Sword|
|87| Tentacle|
|88| Throne|
|89| Tooth|
|90| Torch|
|91| Tree|
|92| Triangle|
|93| Turtle|
|94| Wave|
|95| {Weapon} (p. 43)|
|96| Web|
|97| Whale|
|98| Whip|
|99| Wings|
|00| Wolf|
{{< /rpg_table >}}

## Alchemy

{{< rpg_table name="Potion">}}
| d100 | Potion |
| ---- | --------|
| 1 | Age	|
| 2 | All languages	|
| 3 | Alter body	|
| 4 | Alter face	|
| 5 | Alter voice	|
| 6 | {Animal} form (p. 64) |
| 7 | Armor	|
| 8 | Beast-speech	|
| 9 | Bird-speech	|
| 10 | Breathlessness	|
| 11 | Claws	|
| 12 | Cold-proof	|
| 13 | Courage	|
| 14 | Cure disease	|
| 15 | Cure poison	|
| 16 | Cure wounds	|
| 17 | Dark vision	|
| 18 | Dead-speech	|
| 19 | {Delusion} (p. 30)	|
| 20 | {Effect} (p. 28)	|
| 21 | Elasticity	|
| 22 | {Element} form (p. 29) |
| 23 | Extra arms	|
| 24 | False death	|
| 25 | Fear	|
| 26 | Fire form	|
| 27 | Fish-speech	|
| 28 | Flight	|
| 29 | Forgetfulness	|
| 30 | Friendship	|
| 31 | Growth	|
| 32 | Grub-speech	|
| 33 | Hate	|
| 34 | Healing	|
| 35 | Hearing	|
| 36 | Heat-proof	|
| 37 | Hunger-proof	|
| 38 | Ice form	|
| 39 | Illumination	|
| 40 | Intangibility	|
| 41 | Invisibility	|
| 42 | Invulnerability	|
| 43 | Iron stomach	|
| 44 | Jumping	|
| 45 | Lightning form	|
| 46 | Lightning-proof |
| 47 | Love	|
| 48 | Lycanthropy	|
| 49 | Magic-proof	|
| 50 | {Mannerism} (p. 59) |
| 51 | Metal-proof |
| 52 | Might |
| 53 | Mind reading |
| 54 | {MonsterTrait} (p. 65) |
| 55 | {Mutation} (p. 30) |
| 56 | {NPCDetail} (p. 56) |
| 57 | {Organ} (p. 64) |
| 58 | Ooze form |
| 59 | Paranoia |
| 60 | {Personality} (p. 56) |
| 61 | Plant-speech |
| 62 | Poison-proof |
| 63 | {Power} (p. 65) |
| 64 | {Profession} (p. 57) |
| 65 | Rage |
| 66 | Sense danger |
| 67 | Sense direction |
| 68 | Sense evil |
| 69 | Sense gold |
| 70 | Sense heat |
| 71 | Sense illusion |
| 72 | Sense lies |
| 73 | Sense magic |
| 74 | Sense undead |
| 75 | Shrinking |
| 76 | Sleep |
| 77 | Sleeplessness |
| 78 | Smoke form |
| 79 | Sniffing |
| 80 | Sovereign acid |
| 81 | Sovereign glue |
| 82 | Sovereign grease |
| 83 | Sovereign poison |
| 84 | Speed |
| 85 | Spines |
| 86 | Stinger |
| 87 | Stone-speech |
| 88 | Swimming |
| 89 | Telekinesis |
| 90 | Thought-sending |
| 91 | Undeath |
| 92 | Vampirism |
| 93 | Ventriloquism |
| 94 | Vision |
| 95 | Wall-crawling |
| 96 | Water-breathing |
| 97 | Water-walking |
| 98 | Web-slinging |
| 99 | X-ray vision |
| 00 | Youth |
{{< /rpg_table >}}


{{< rpg_table name="Texture" >}}
| d100 | ? |
| --- | --------|
|1| Aerated	|
|2| Battery	|
|3| Blended	|
|4| Boiling	|
|5| Brackish	|
|6| Bubbling	|
|7| Buttery	|
|8| Caramelized	|
|9| Chalky	|
|10| Chilled	|
|11| Chunky	|
|12| Churning	|
|13| Clotted	|
|14| Coagulated	|
|15| Condensed	|
|16| Congealed	|
|17| Cool	|
|18| Creamy	|
|19| Crystalized	|
|20| Curdled	|
|21| Dregs	|
|22| Effervescent	|
|23| Filmy	|
|24| Fizzing	|
|25| Flakes	|
|26| Foaming	|
|27| Foggy	|
|28| Frigid	|
|29| Frosty	|
|30| Frothy	|
|31| Gelatinous	|
|32| Glimmering	|
|33| Gloppy	|
|34| Glowing	|
|35| Gluey	|
|36| Grainy	|
|37| Greasy	|
|38| Gritty	|
|39| Grounds	|
|40| Gummy	|
|41| Gunky	|
|42| Gurgling	|
|43| Hissing	|
|44| Humming	|
|45| Ichorous	|
|46| Icy	|
|47| Jellied	|
|48| Living	|
|49| Lukewarm	|
|50| Lumpy |
|51| Mashed|
|52| Metallic|
|53| Motes|
|54| Moving|
|55| Muddy|
|56| Murky|
|57| Mushy|
|58| Oily|
|59| Oozy|
|60| Pasty|
|61| Powdery|
|62| Pudding|
|63| Pulpy|
|64| Pulsing|
|65| Pureed|
|66| Quicksilver|
|67| Reflective|
|68| Rippling|
|69| Roiling|
|70| Sandy|
|71| Sappy|
|72| Scalding|
|73| Scummy film|
|74| Sediment|
|75| Shining|
|76| Silty|
|77| Simmering|
|78| Sizzling|
|79| Slimy|
|80| Slushy|
|81| Smoking|
|82| Smoky|
|83| Soapy|
|84| Sparkling|
|85| Steaming|
|86| Sticky|
|87| Swirling|
|88| Syrupy|
|89| Tarry|
|90| Thin|
|91| Throbbing|
|92| Trembling|
|93| Turbulent|
|94| Vibrating|
|95| Viscid|
|96| Viscous|
|97| Warm|
|98| Watery|
|99| Whirling|
|00| Whistling|
{{< /rpg_table >}}

{{< rpg_table name="Taste" >}}
| d100 | ? |
| --- | --------|
|1| Absinthe	|
|2| Allspice	|
|3| Almond	|
|4| Ammonia	|
|5| {Animal} (p. 64)	|
|6| Asparagus	|
|7| Basil	|
|8| Beer	|
|9| Berries	|
|10| Black currant	|
|11| Blackberry	|
|12| Blood	|
|13| Butter	|
|14| Camphor	|
|15| Candy	|
|16| Caramel	|
|17| Cardamom	|
|18| Cherry	|
|19| Chili pepper	|
|20| Chives	|
|21| Chocolate	|
|22| Cinnamon	|
|23| Cloves	|
|24| Coconut	|
|25| Coffee	|
|26| Copper	|
|27| Cranberry	|
|28| Crude oil	|
|29| Cucumber	|
|30| Cumin	|
|31| Curry	|
|32| Dates	|
|33| Elderberry	|
|34| Figs	|
|35| Flowers	|
|36| {Food} (p. 49)	|
|37| Garlic	|
|38| Ginger	|
|39| Gooseberry	|
|40| Grapefruit	|
|41| Grass	|
|42| Herbs	|
|43| Honey	|
|44| Honeysuckle	|
|45| Horseradish	|
|46| Huckleberry	|
|47| Hyacinth	|
|48| Leather	|
|49| Lemon	|
|50| Lemongrass |
|51| Licorice|
|52| Lime|
|53| Loam|
|54| Maple syrup|
|55| Mead|
|56| Milk|
|57| Mineral|
|58| Mint|
|59| Mud|
|60| Mustard|
|61| Nutmeg|
|62| Oak|
|63| Olive oil|
|64| Onion|
|65| Orange|
|66| Oregano|
|67| Peach|
|68| Pears|
|69| Pepper|
|70| Phlegm|
|71| Pickle juice|
|72| Pine|
|73| Pistachios|
|74| Plum|
|75| Pumpkin|
|76| Quince|
|77| Rhubarb|
|78| Roast duck|
|79| Rose|
|80| Rosemary|
|81| Rust|
|82| Saffron|
|83| Sage|
|84| Salt water|
|85| {Scent} (p. 66)|
|86| Soap|
|87| Soursop|
|88| Spearmint|
|89| Sulphur|
|90| Tamarind|
|91| Tea|
|92| Tears|
|93| Thyme|
|94| Tobacco|
|95| Vanilla|
|96| Walnuts|
|97| Whiskey|
|98| Wine|
|99| Wintergreen|
|00| Wormwood|
{{< /rpg_table >}}

{{< rpg_table name="Color" >}}
| d100 | ? |
| --- | --------|
|1| Acid green	|
|2| Alabaster	|
|3| Amber	|
|4| Amethyst	|
|5| Apricot	|
|6| Aquamarine	|
|7| Asparagus	|
|8| Auburn	|
|9| Aureolin	|
|10| Avocado	|
|11| Azure	|
|12| Baby blue	|
|13| Beige	|
|14| Bone	|
|15| Bottle green	|
|16| Bronze	|
|17| Bubblegum	|
|18| Carmine	|
|19| Carrot	|
|20| Celadon	|
|21| Cerise	|
|22| Cerulean	|
|23| Champagne	|
|24| Charcoal	|
|25| Chartreuse	|
|26| Chestnut	|
|27| Cinnamon	|
|28| Colorless	|
|29| Coppery	|
|30| Coral pink	|
|31| Creamy	|
|32| Crimson	|
|33| Cyan	|
|34| Dove grey	|
|35| Dun	|
|36| Eggshell	|
|37| Electric blue	|
|38| Emerald	|
|39| Flesh	|
|40| Fuchsia	|
|41| Fuligin	|
|42| Golden	|
|43| Grape juice	|
|44| Heliotrope	|
|45| Ice blue	|
|46| Indigo	|
|47| Inky	|
|48| Invisible	|
|49| Ivory	|
|50| Kelly green |
|51| Lavender|
|52| Lilac|
|53| Lime|
|54| Magenta|
|55| Mahogany|
|56| Maroon|
|57| Mauve|
|58| Milk white|
|59| Moss green|
|60| Mustard|
|61| Ochre|
|62| Olive|
|63| Opalescent|
|64| Oxblood|
|65| Pea green|
|66| Peach|
|67| Peacock blue|
|68| Pearl|
|69| Periwinkle|
|70| Pine green|
|71| Plum|
|72| Primrose|
|73| Pumpkin|
|74| Rainbow|
|75| Rose|
|76| Ruby|
|77| Russet|
|78| Rusty|
|79| Saffron|
|80| Salmon|
|81| Sapphire|
|82| Scarlet|
|83| Sepia|
|84| Shocking pink|
|85| Silver|
|86| Slate blue|
|87| Smokey grey|
|88| Tangerine|
|89| Teal|
|90| Terracotta|
|91| Titian red|
|92| Tomato|
|93| Turquoise|
|94| Tyrian|
|95| Ultramarine|
|96| Umber|
|97| Verdigris|
|98| Vermilion|
|99| Violet|
|00| Viridian|
{{< /rpg_table >}}

{{< rpg_table name="Ingredient" >}}
| d100 | ? |
| --- | --------|
|1| {Animal} (p. 64)	|
|2| Antimony	|
|3| Arsenic	|
|4| Belladonna	|
|5| Bitumen	|
|6| Black pearl	|
|7| Blind eye	|
|8| {Book} (p. 40)	|
|9| Brimstone	|
|10| Camphor	|
|11| Celandine	|
|12| Chalk	|
|13| {Clothing} (p. 40)	|
|14| Cobalt	|
|15| Cocklebur	|
|16| Coffin nail	|
|17| Columbine	|
|18| Copper	|
|19| Corpse's hair	|
|20| Crossroad dust	|
|21| Dandelion	|
|22| Deathcap	|
|23| Devil's trumpet	|
|24| Element	|
|25| {Fabric} (p. 41)	|
|26| {Food} (p. 49)	|
|27| Foxglove	|
|28| Funeral wine	|
|29| Gold	|
|30| Grave dust	|
|31| Hellebore	|
|32| Hemlock	|
|33| Henbane	|
|34| Holly	|
|35| Honey	|
|36| Hyssop	|
|37| Iron	|
|38| Killer's hand	|
|39| King's tooth	|
|40| Larkspur	|
|41| Last breath	|
|42| Lead	|
|43| Liar's tongue	|
|44| Lightning bolt	|
|45| Lime	|
|46| Lodestone	|
|47| Lotus	|
|48| Lye	|
|49| Mandrake	|
|50| {Material} (p. 42) |
|51| Meadowsweet|
|52| {MiscItem} (p. 39)|
|53| Mistletoe|
|54| Monk's vow|
|55| {Monster} (p. 61)|
|56| Moonflower|
|57| Mugwort|
|58| Natron|
|59| Nectar|
|60| Nettle|
|61| Newborn's cry|
|62| Nickel|
|63| Nightshade|
|64| {Organ} (p. 64)|
|65| Platinum|
|66| Poppy|
|67| {Potion} (p. 35)|
|68| Pyre ember|
|69| Queen bee|
|70| Queen's blood|
|71| Quicksilver|
|72| Ragwort|
|73| Resin|
|74| Rosemary|
|75| Sage|
|76| Sea water|
|77| Ship's barnacle|
|78| Silver|
|79| Snakeweed|
|80| Soot|
|81| Star-metal|
|82| Stinkhorn|
|83| Sugar|
|84| Thief's finger|
|85| Thistle|
|86| Tin|
|87| Tomb flower|
|88| {Tool} (p. 39)|
|89| {Treasure} (p. 42)|
|90| Valerian|
|91| Verdigris|
|92| Vinegar|
|93| Wax|
|94| {Weapon} (p. 43)|
|95| Wedding ring|
|96| Widow's tears|
|97| Witch hazel|
|98| Wizard's skull|
|99| Wolfsbane|
|00| Wormwood|
{{< /rpg_table >}}

## Equipment

{{< rpg_table name="CostOfLiving" >}}
cost of living (per month)
| d12 | ? |
| --- | --------|
| 1 | destitute: Beggars, Outlaws (90c). |
| 2 | poor: Servants, Laborers, Sailors, |
| 3 | Farmers, Soldiers (300c). |
| 4 | humble: Innkeepers, Bakers, Craftsmen, |
| 5 | Scribes, Priests, Mercenaries (600c). |
| 6 | respectable: Physicians, Merchants, |
| 7 | Lawyers, Master Craftsmen (1200c). |
| 8 | wealthy: Courtiers, Knights, Rich |
| 9 | Merchants, Bishops, Gentry (3000c). |
| 10 | minor noble: Barons, Counts (12,000c). |
| 11 | major noble: Dukes, Princes (60,000c). |
| 12 | royal: Kings, Emperors (600,000c). |
{{< /rpg_table >}}

{{< rpg_table name="Tool" >}}
| d100 | ? |
| --- | --------|
|1| Acid vial	|
|2| Animal scent	|
|3| Antitoxin	|
|4| Astrolabe	|
|5| Bandoleer	|
|6| Bear trap	|
|7| Bedroll	|
|8| Beeswax	|
|9| Bell	|
|10| Bellows	|
|11| Birdcage	|
|12| Blank book	|
|13| Blanket	|
|14| Block and tackle |
|15| Boltcutters	|
|16| Bottle	|
|17| Bucket	|
|18| Bullseye lantern  |
|19| Caltrops	|
|20| Candle	|
|21| Censer	|
|22| Chain	|
|23| Chalk	|
|24| Chisel	|
|25| Climbing hook	|
|26| Compass	|
|27| Copper wire	|
|28| Crowbar	|
|29| Dice	|
|30| Door ram	|
|31| Ear trumpet	|
|32| Ether	|
|33| Fire oil	|
|34| Fishing hook	|
|35| Flashbomb	|
|36| Flashpowder	|
|37| Garlic	|
|38| Glue	|
|39| Grappling hook  |
|40| Grease	|
|41| Hacksaw	|
|42| Hammer	|
|43| Hand drill	|
|44| Hemp rope	|
|45| Hog holder	|
|46| Hooded lantern	|
|47| Hound	|
|48| Hourglass	|
|49| Incense	|
|50| Iron pot |
|51| Iron tongs|
|52| Lantern|
|53| Large sack|
|54| Lockpicks|
|55| Lodestone|
|56| Magnifying lens|
|57| Manacles|
|58| Marbles|
|59| Metal File|
|60| Mortar and pestle|
|61| Mule|
|62| Net|
|63| Padlock and key|
|64| Pen and ink|
|65| Pickaxe|
|66| Pitchfork|
|67| Piton|
|68| Pliers|
|69| Poison|
|70| Pole (10')|
|71| Pure alcohol|
|72| Rat|
|73| Rum|
|74| Salve|
|75| Scissors|
|76| Sealing wax|
|77| Sewing needle|
|78| Sextant|
|79| Shovel|
|80| Silk rope|
|81| Sledgehammer|
|82| Smokebomb|
|83| Smoked goggles|
|84| Soap|
|85| Spikes|
|86| Spyglass|
|87| Stake|
|88| Steel mirror|
|89| Sundial|
|90| Tent|
|91| Thick gloves|
|92| Tinderbox|
|93| Torch|
|94| Trumpet|
|95| Twine|
|96| Vial|
|97| Waterskin|
|98| Whetstone|
|99| Whistle|
|00| Wolfsbane|
{{< /rpg_table >}}

{{< rpg_table name="MiscItem" >}}
| d100 | ? |
| --- | --------|
|1| Amulet	|
|2| Arrowhead	|
|3| Birdcage	|
|4| {Book} (p. 40)	|
|5| Bowl	|
|6| Box	|
|7| Brooch	|
|8| Button	|
|9| Card	|
|10| Cipher	|
|11| Clock	|
|12| {Clothing} (p. 40)	|
|13| Coin	|
|14| Comb	|
|15| Crystal	|
|16| Cup	|
|17| Degree	|
|18| Doll	|
|19| Drum	|
|20| Egg	|
|21| Embroidery	|
|22| {Fabric} (p. 41)	|
|23| Feather	|
|24| Figurine	|
|25| Finger bone	|
|26| Flag	|
|27| Flute	|
|28| {Food} (p. 49)	|
|29| {Food} recipe	|
|30| Fork	|
|31| Game piece	|
|32| Gem	|
|33| Hair oil	|
|34| Hairbrush	|
|35| Handkerchief	|
|36| Horn	|
|37| Icon	|
|38| {Ingredient} (p. 37)	|
|39| Jar	|
|40| Key	|
|41| Knife	|
|42| Ladle	|
|43| Leg bone	|
|44| Lens	|
|45| Letter	|
|46| List of demands	|
|47| Lock of hair	|
|48| Locket	|
|49| Lotion	|
|50| Lute |
|51| Lyre|
|52| Manifesto|
|53| Map|
|54| Mascara|
|55| {Material} (p. 42)|
|56| Military orders|
|57| Mirror|
|58| Orb|
|59| {Organ} (p. 64)|
|60| Paintbrush|
|61| Painting|
|62| Passport|
|63| Pearl|
|64| Perfume|
|65| Pipe|
|66| Pipes|
|67| Poem|
|68| Portrait|
|69| {Potion} (p. 35)|
|70| {Potion} recipe (p. 35)|
|71| Prayer|
|72| Pressed flower|
|73| Purse|
|74| Puzzle box|
|75| Pyramid|
|76| Razor|
|77| Ribbon|
|78| Ring|
|79| Rouge|
|80| Shopping list|
|81| Signet ring|
|82| Sketchbook|
|83| Skull|
|84| Snuffbox|
|85| Spatula|
|86| {SpellScroll} (p. 22)|
|87| {SpellBook} (p. 22)|
|88| Spoon|
|89| Star chart|
|90| Ticket|
|91| {Tool} (p. 39)|
|92| Tooth|
|93| {Treasure} (p. 42)|
|94| Treaty|
|95| Tuning fork|
|96| Wand|
|97| Warrant|
|98| {Weapon} (p. 43)|
|99| Wine|
|00| Yarn|
{{< /rpg_table >}}

{{< rpg_table name="Book" >}}
| d100 | ? |
| --- | --------|
|1| Adventure novel |
|2| Agriculture	|
|3| Almanac	|
|4| Anatomy	|
|5| Ancient history	|
|6| Archaeology	|
|7| Architecture	|
|8| Astrology	|
|9| Bestiary	|
|10| Biography	|
|11| Blackmail	|
|12| Botany	|
|13| Calendars	|
|14| {CityTheme} (p. 46) |
|15| Comedic novel	|
|16| Commerce	|
|17| Condemnation	|
|18| Confession	|
|19| Conspiracies	|
|20| Cookbook	|
|21| Criminal secrets |
|22| Cryptography	|
|23| Culture	|
|24| Customs	|
|25| Diplomacy	|
|26| {Disaster} (p. 31)	|
|27| Divination	|
|28| {Domain} (p. 33)	|
|29| {Dungeon} (p. 16)	|
|30| Epic poems	|
|31| Espionage	|
|32| Ethics	|
|33| Etiquette	|
|34| {Faction} (p. 50)	|
|35| Fashion	|
|36| Finance	|
|37| Fishing	|
|38| Folklore	|
|39| Genealogy	|
|40| Geography	|
|41| Geology	|
|42| Ghosts	|
|43| Gods	|
|44| Hagiography	|
|45| Heraldry	|
|46| Horror stories	|
|47| Hunting	|
|48| Husbandry	|
|49| Journal	|
|50| Language |
|51| Laws|
|52| Letters|
|53| Libraries|
|54| Logic|
|55| Lost empires|
|56| Lost places|
|57| Love poems|
|58| {MagicSchool} (p. 31)|
|59| Mathematics|
|60| Medicine|
|61| Modern history|
|62| {Monster} (p. 61)|
|63| Music|
|64| Mystery novel|
|65| Mythology|
|66| Nation|
|67| Navigation|
|68| Oceanography|
|69| Painting|
|70| Planar studies|
|71| Politics|
|72| {Potion} recipe (p. 35)|
|73| Prayers|
|74| {Profession} (p. 57)|
|75| Propaganda|
|76| Prophecies|
|77| Psychology|
|78| Region|
|79| Religion|
|80| Rhetoric|
|81| Romantic novel|
|82| {RoomTheme} (p. 15)|
|83| Sages|
|84| Sayings|
|85| Sculpture|
|86| Secret societies|
|87| Shipbuilding|
|88| Shrines|
|89| Siegecraft|
|90| Songs|
|91| {Spell} (pp. 22-25)|
|92| State secrets|
|93| Sword fighting|
|94| Theology|
|95| {Trap} (pp. 16-17)|
|96| Treasures|
|97| Utopian novel|
|98| War chronicle|
|99| Who's who|
|00| Witch-hunting|
{{< /rpg_table >}}

{{< rpg_table name="Clothing" >}}
| d100 | ? |
| --- | --------|
|1| Alb	|
|2| Arm wrap	|
|3| Arming doublet  |
|4| Bascinet	|
|5| Belt	|
|6| Beret	|
|7| Bicorne hat	|
|8| Blouse	|
|9| Bodice	|
|10| Bonnet	|
|11| Boots	|
|12| Bracelet	|
|13| Braies	|
|14| Breastplate	|
|15| Breeches	|
|16| Buckler	|
|17| Cap	|
|18| Cape	|
|19| Cassock	|
|20| Chaperon	|
|21| Chasuble	|
|22| Cincture	|
|23| Cloak	|
|24| Clogs	|
|25| Coat	|
|26| Codpiece	|
|27| Corset	|
|28| Cotte	|
|29| Cowl	|
|30| Cravat	|
|31| Curiass	|
|32| Dalmatic	|
|33| Doublet	|
|34| Dress	|
|35| Earing	|
|36| Eyepatch	|
|37| Fez	|
|38| Frog mouth helm |
|39| Gambeson	|
|40| Gauntlet	|
|41| Girdle	|
|42| Gloves	|
|43| Gorget	|
|44| Gown	|
|45| Great helm	|
|46| Greaves	|
|47| Hat	|
|48| Hauberk	|
|49| Headdress	|
|50| Helmet |
|51| Hood|
|52| Hose|
|53| Hounskull helm|
|54| Houppeland|
|55| Jacket|
|56| Jerkin|
|57| Kerchief|
|58| Kilt|
|59| Kirtle|
|60| Leg wrap|
|61| Maniple|
|62| Mask|
|63| Mitre|
|64| Nasal helm|
|65| Necklace|
|66| Nightcap|
|67| Pauldron|
|68| Petticoat|
|69| Pocket|
|70| Pointed hat|
|71| Purse|
|72| Rerebrace|
|73| Robe|
|74| Sabatons|
|75| Salet|
|76| Sandals|
|77| Sash|
|78| Scarf|
|79| Shield|
|80| Shirt|
|81| Shoes|
|82| Skirt|
|83| Sleeves|
|84| Slippers|
|85| Smock|
|86| Socks|
|87| Stockings|
|88| Stole|
|89| Surcoat|
|90| Surplice|
|91| Tabard|
|92| Tower shield|
|93| Tricorn hat|
|94| Trousers|
|95| Tunic|
|96| Turban|
|97| Vambrace|
|98| Veil|
|99| Vest|
|00| Wimple|
{{< /rpg_table >}}

{{< rpg_table name="Fabric" >}}
| d100 | ? |
| --- | --------|
|1| Alligator skin	|
|2| Alpaca wool	|
|3| {Animal} skin (p. 64) |
|4| Badger skin	|
|5| Bamboo weave	|
|6| Barkcloth	|
|7| Bearskin	|
|8| Beaver skin	|
|9| Blanket	|
|10| Brass	|
|11| Brocade	|
|12| Bronze	|
|13| Burlap	|
|14| Calfskin	|
|15| Calico	|
|16| Camel hair	|
|17| Camel skin	|
|18| Canvas	|
|19| Cashmere wool  |
|20| Cat hair	|
|21| Chambray	|
|22| Chiffon	|
|23| Chino	|
|24| Coconut fiber	|
|25| Copper	|
|26| Corduroy	|
|27| Cotton	|
|28| Cow skin	|
|29| Crepe	|
|30| Damask	|
|31| Deerskin	|
|32| Denim	|
|33| Dog hair	|
|34| Eel skin	|
|35| Felt	|
|36| Fish skin	|
|37| Fishnet	|
|38| Flannel	|
|39| Flax	|
|40| Fleece	|
|41| Fox skin	|
|42| Gauze	|
|43| Gingham	|
|44| Goatskin	|
|45| Grass weave	|
|46| Hemp	|
|47| Herringbone	|
|48| Horse hair	|
|49| Horse skin	|
|50| Iron	|
|51| Jute|
|52| Lace|
|53| Lamb wool|
|54| Lambskin|
|55| Leather|
|56| Leopard skin|
|57| Linen|
|58| Lion skin|
|59| Llama wool|
|60| Mail|
|61| Mesh|
|62| Mink fur|
|63| Mink skin|
|64| Mohair wool|
|65| {Monster} skin (p. 61)|
|66| Muslin|
|67| Oilcloth|
|68| Ostrich skin|
|69| Otter skin|
|70| Patchwork|
|71| Pig skin|
|72| Quilt|
|73| Rabbit skin|
|74| Rags|
|75| Rat skin|
|76| Reindeer skin|
|77| Sailcloth|
|78| Satin|
|79| Sealskin|
|80| Seersucker|
|81| Sheepskin|
|82| Sheep wool|
|83| Silk|
|84| Snake skin|
|85| Squirrel skin|
|86| Steel|
|87| Stingray skin|
|88| Suede|
|89| Taffeta|
|90| Tartan|
|91| Terrycloth|
|92| Tiger skin|
|93| Tinsel|
|94| Tulle|
|95| Tweed|
|96| Twill|
|97| Velour|
|98| Velvet|
|99| Wolf skin|
|00| Yak wool|
{{< /rpg_table >}}

{{< rpg_table name="Decoration" >}}
| d100 | ? |
| --- | --------|
|1| Antique	|
|2| Beaded	|
|3| Beast motif	|
|4| Bells	|
|5| Bird motif	|
|6| Bloody	|
|7| Bones	|
|8| Buckles	|
|9| Buttons	|
|10| Chains	|
|11| Chimes	|
|12| Cloud motif	|
|13| Coat of arms	|
|14| {Color} (p. 37)	|
|15| Cords	|
|16| Decorative coins |
|17| Distressed	|
|18| Down-stuffed	|
|19| Emblem	|
|20| Embroidered	|
|21| Enamel pins	|
|22| Feathers	|
|23| Flamboyant	|
|24| Flame motif	|
|25| Flower motif	|
|26| Flowers	|
|27| Food-stained	|
|28| Formal	|
|29| Fringe	|
|30| Fur lined	|
|31| Fur trim	|
|32| Gold studs	|
|33| Gold thread	|
|34| Harlequin	|
|35| Heavyweight	|
|36| Heraldry	|
|37| Horns	|
|38| Ink-stained	|
|39| {ItemTrait} (p. 43)	|
|40| Jewels	|
|41| Lace trim	|
|42| Laced up	|
|43| Medallions	|
|44| Mold	|
|45| Monster motif	|
|46| Moon motif	|
|47| Moth-eaten	|
|48| Muddy	|
|49| Ocean motif	|
|50| Ornate border |
|51| Oversized|
|52| Padded|
|53| Paisley|
|54| Patches|
|55| Pearls|
|56| Perfumed|
|57| Plated|
|58| Pockets|
|59| Punctured|
|60| Reeking|
|61| Rhinestones|
|62| Ribbed|
|63| Ribbons|
|64| Ruffles|
|65| Satin bows|
|66| Scandalous|
|67| {Scent} (p. 66)|
|68| Secret pocket|
|69| Sequins|
|70| Shimmering|
|71| Sigils|
|72| Silver studs|
|73| Silver thread|
|74| Skintight|
|75| Skull motif|
|76| Slashed|
|77| Sparkling|
|78| Spiked|
|79| Spot pattern|
|80| Star motif|
|81| Starched|
|82| Stonewashed|
|83| Striped|
|84| Studded|
|85| Sun designs|
|86| Sun-faded|
|87| {Symbol} (p. 33)|
|88| Tassels|
|89| Taxidermy|
|90| Threadbare|
|91| Tie-died|
|92| Torn|
|93| Tree motif|
|94| Undersized|
|95| Unfashionable|
|96| Velvet applique|
|97| Wave designs|
|98| Wine-stained|
|99| Wrinkled|
|00| Zigzag pattern|
{{< /rpg_table >}}

{{< rpg_table name="Treasure" >}}
| d100 | ? |
| --- | --------|
|1| Alchemical device |
|2| Amulet	|
|3| Armor	|
|4| Arrows	|
|5| Astrolabe	|
|6| Belt	|
|7| Blackmail	|
|8| Blueprints	|
|9| {Book} (p. 40)	|
|10| Bow	|
|11| Bowl	|
|12| Bracelet	|
|13| Business record	|
|14| Calligraphy	|
|15| Candelabra	|
|16| Carpet	|
|17| Celestial map	|
|18| Chalice	|
|19| Chandelier	|
|20| Clock	|
|21| {Clothing} (p. 40)	|
|22| Codpiece	|
|23| Comb	|
|24| Compass	|
|25| Contract	|
|26| Couch	|
|27| Crown	|
|28| Crystal	|
|29| Dagger	|
|30| Deed	|
|31| Doll	|
|32| Dress	|
|33| Earrings	|
|34| Embroidery	|
|35| Fine china	|
|36| Fine liquor	|
|37| Furs	|
|38| Gaming set	|
|39| Gemstone	|
|40| Helmet	|
|41| {Ingredient} (p. 37)	|
|42| Instrument	|
|43| Ivory carving	|
|44| Lamp	|
|45| Letter	|
|46| {Material} (p. 42)	|
|47| Medal	|
|48| Mirror	|
|49| {Monster} skin (p. 61) |
|50| Mosaic |
|51| Mural|
|52| Music box|
|53| Necklace|
|54| {Organ} (p. 64)|
|55| Orrery|
|56| Painting|
|57| Pen|
|58| Perfume|
|59| Pipe|
|60| Planar map|
|61| Porcelain figure|
|62| {Potion} (p. 35)|
|63| Prayer book|
|64| Printing block|
|65| Rare coin|
|66| {Relic} |
|67| {Reward} (p. 51)|
|68| Ring|
|69| Royal robes|
|70| Scabbard|
|71| Scientific device|
|72| Scrimshaw|
|73| Sextant|
|74| Sheet music|
|75| Shield|
|76| Shoes|
|77| Signet ring|
|78| Silk|
|79| Silverware|
|80| Snuffbox|
|81| Spear|
|82| {Spell} (pp. 22-25)|
|83| Spices|
|84| Spyglass|
|85| Stained glass|
|86| State secrets|
|87| Stone statue|
|88| Sword|
|89| Table|
|90| Tapestry|
|91| Taxidermy|
|92| Tea set|
|93| Telescope|
|94| Throne|
|95| Treasure map|
|96| Trophy|
|97| Trunk|
|98| Vase|
|99| Watch|
|00| {Weapon} (p. 43)|
{{< /rpg_table >}}

{{< rpg_table name="Material" >}}
| d100 | ? |
| --- | --------|
|1| Adamantine	|
|2| Alabaster	|
|3| Amber	|
|4| Ambergris	|
|5| Aquamarine	|
|6| Aventurine	|
|7| Azurite	|
|8| Beryl	|
|9| Black alabaster	|
|10| Black opal	|
|11| Black pearl	|
|12| Bloodstone	|
|13| Bloodwood	|
|14| Blue amber	|
|15| Blue jade	|
|16| Blue opal	|
|17| Bone china	|
|18| Cairngorm	|
|19| Carbuncle	|
|20| Carnelian	|
|21| Cat's-eye	|
|22| Chalcedony	|
|23| Cherry amber	|
|24| Cinnabar	|
|25| Citrine	|
|26| Crystal	|
|27| Cyclops agate	|
|28| Dendritic agate	|
|29| Diamond	|
|30| Dragon bone	|
|31| Ebony	|
|32| Emerald	|
|33| Fire agate	|
|34| Fire coral	|
|35| Fire jasper	|
|36| Fire opal	|
|37| Garnet	|
|38| Gold	|
|39| Heliodor	|
|40| Hematite	|
|41| Horn	|
|42| Ironwood	|
|43| Jet	|
|44| Kingfisher jade	|
|45| Koa wood	|
|46| Lapis lazuli	|
|47| Lavender jade	|
|48| Lingum vitae	|
|49| Mahogany	|
|50| Malachite	|
|51| Mammoth tusk|
|52| Moonstone|
|53| Morganite|
|54| Moss agate|
|55| Mother of pearl|
|56| Narwhal horn|
|57| Nephrite|
|58| Obsidian|
|59| Onyx|
|60| Orichalcum|
|61| Palladium|
|62| Pearl|
|63| Peridot|
|64| Petrified wood|
|65| Pink sapphire|
|66| Platinum|
|67| Polyhedroid agate|
|68| Porcelain|
|69| Porcelain jasper|
|70| Porphyry|
|71| Purpleheart wood|
|72| Quartz|
|73| Quetzal jade|
|74| Rainbow agate|
|75| Rainbow jasper|
|76| Rainbow obsidian|
|77| Redheart wood|
|78| Rose opal|
|79| Rose quartz|
|80| Rosewood|
|81| Ruby|
|82| Sandalwood|
|83| Sapphire|
|84| Sard|
|85| Serpentine|
|86| Silver|
|87| Snakewood|
|88| Spinel|
|89| Star Iron|
|90| Star rose quartz|
|91| Star sapphire|
|92| Sunstone|
|93| Tiger's eye|
|94| Tigerwood|
|95| Topaz|
|96| Tourmaline|
|97| Turquoise|
|98| Turtle shell|
|99| Unicorn horn|
|00| Whale ivory|
{{< /rpg_table >}}

{{< rpg_table name="Weapon" >}}
| d100 | ? |
| --- | --------|
|1| Arming sword	|
|2| Backsword	|
|3| Bardiche	|
|4| Baton	|
|5| Battleaxe	|
|6| Beheading sword |
|7| Bill hook	|
|8| Blowgun	|
|9| Blowpipe	|
|10| Boar spear	|
|11| Bolas	|
|12| Boomerang	|
|13| Brass knuckles	|
|14| Bullet crossbow  |
|15| Butterfly sword	|
|16| Censer flail	|
|17| Cestus	|
|18| Chain whip	|
|19| Chakram	|
|20| Claymore	|
|21| Club	|
|22| Crossbow	|
|23| Cutlass	|
|24| Dagger	|
|25| Dao	|
|26| Deer horn knives |
|27| Dirk	|
|28| Double flail	|
|29| Emeici	|
|30| Falchion	|
|31| Flail	|
|32| Flambard	|
|33| Flying claws	|
|34| Gauntlet sword	|
|35| Gladius	|
|36| Glaive	|
|37| Halberd	|
|38| Hatchet	|
|39| Hook sword	|
|40| Horsebow	|
|41| Hunting knife	|
|42| Ice pick	|
|43| Javelin	|
|44| Katana	|
|45| Katar	|
|46| Kopesh	|
|47| Kukri	|
|48| Lance	|
|49| Lasso	|
|50| Longbow |
|51| Longsword|
|52| Lucerne hammer|
|53| Mace|
|54| Machete|
|55| Man catcher|
|56| Maul|
|57| Messer|
|58| Meteor hammer|
|59| Military fork|
|60| Morningstar|
|61| Nunchaku|
|62| Pickaxe|
|63| Pike|
|64| Poleaxe|
|65| Push dagger|
|66| Ranseur|
|67| Rapier|
|68| Recurve bow|
|69| Rondel dagger|
|70| Rope dart|
|71| Sabre|
|72| Sai|
|73| Scimitar|
|74| Scourge|
|75| Shortbow|
|76| Shortsword|
|77| Shuriken|
|78| Sickle|
|79| Side sword|
|80| Sling|
|81| Slingshot|
|82| Spear|
|83| Staff|
|84| Stave sling|
|85| Stiletto|
|86| Swordstaff|
|87| Tanto|
|88| Three-part staff|
|89| Throwing axe|
|90| Throwing knife|
|91| Tiger claws|
|92| Tonfa|
|93| Trident|
|94| Triple flail|
|95| Wakizashi|
|96| War scythe|
|97| Warhammer|
|98| Warpick|
|99| Whip|
|00| Zweihander|
{{< /rpg_table >}}

{{< rpg_table name="ItemTrait" >}}
| d100 | ? |
| --- | --------|
|1| Ancient	|
|2| Avant-garde	|
|3| Blessed	|
|4| Bloody	|
|5| Brittle	|
|6| Broken	|
|7| Bulky	|
|8| Carved	|
|9| Classy	|
|10| Cold	|
|11| Collectible	|
|12| {Color} (p. 37)	|
|13| Compact	|
|14| Crusty	|
|15| Cultural value	|
|16| Cursed	|
|17| Cutting edge	|
|18| Damaged	|
|19| Damp	|
|20| Defective	|
|21| Detects foes	|
|22| Disguised	|
|23| Draws foes	|
|24| Dusty	|
|25| Edible	|
|26| {Effect} (p. 28)	|
|27| {Element} (p. 29)	|
|28| Embellished	|
|29| Encoded	|
|30| Eroded	|
|31| Expandable	|
|32| Extra-planar	|
|33| Famous	|
|34| Fashionable	|
|35| Filthy	|
|36| Flaking	|
|37| Floppy	|
|38| Foldable	|
|39| Forbidden	|
|40| Fragile	|
|41| Gaudy	|
|42| Glowing	|
|43| Gold-plated	|
|44| Gooey	|
|45| Gorgeous	|
|46| Heavy	|
|47| Hot	|
|48| Icy	|
|49| Immovable	|
|50| Impractical |
|51| Indestructible|
|52| Infamous|
|53| Intelligent|
|54| Kitchy|
|55| Loud|
|56| Lukewarm|
|57| Luxurious|
|58| Masterwork|
|59| Military value|
|60| Miniature|
|61| Minimalist|
|62| Modified|
|63| Mythic|
|64| Non-human|
|65| Organic|
|66| Oversized|
|67| Owned|
|68| Padded|
|69| Painted|
|70| Partial|
|71| Perfumed|
|72| {Personality} (p. 56)|
|73| Political value|
|74| Prickly|
|75| Pulsing|
|76| Reflective|
|77| Refurbished|
|78| Religious value|
|79| Repaired|
|80| Reviled|
|81| Rotting|
|82| {Scent} (p. 66)|
|83| Sharp|
|84| Shiny|
|85| Shoddy|
|86| Silent|
|87| Slippery|
|88| Smoke-stained|
|89| {Sound} (p. 66)|
|90| Spiky|
|91| Squishy|
|92| Sticky|
|93| Stinky|
|94| Talking|
|95| {Texture} (p. 36)|
|96| Toxic|
|97| Twitching|
|98| Ugly|
|99| Vulgar|
|00| Whispering|
{{< /rpg_table >}}


## Buildings

{{< rpg_table name="Building" >}}
| d100 | ? |
| --- | --------|
| 1 | Poor hovel 100|
| 2 | Humble cottage 1k|
| 3 | Respectable house, chapel 10k|
| 4 | Wealthy house, guildhall, theater, warehouse 50k|
| 5 | Church, stone tower 100k|
| 6 | Small castle 2m|
| 7 | Minor noble’s mansion, temple, medium castle 8m|
| 8 | Large castle 32m|
| 9 | Major noble’s estate, cathedral 100m|
| 10 | Imperial palace, basilica 400m |
{{< /rpg_table >}}

{{< rpg_table name="RoomStyle" >}}
| d6 | ? |
| --- | --------|
| 1 | poor: Earth walls, thatched roofs,
earth floors. (10) |
| 2 | humble: Wattle and daub walls with some bricks or field stone, thatched roofs, reed floors. (50) |
| 3 | respectable: Wood and brick walls with some stone, shingled roof, wood floors. 250
wealthy: Mostly stone walls with some wood and brick, shingled roof, wood floors. This is also the cost for a 5’ cube of defensive stone walls. (1k) |
| 4 | minor nobles and castles: Stone walls, shingled roof, flagstone floors. Some use of materials like glass and marble, minor architectural flourishes. (5k) |
| 5 | major nobles: Stone walls, stone roof, tiled floors, glass windows, high ceilings, significant architectural flourishes. (50k) |
| 6 | royal: Marble walls, stone roof, marble floors, glass windows, soaring ceilings, art everywhere. (100k) |
{{< /rpg_table >}}

{{< rpg_table name="CityTheme" >}}
| d100 | ? |
| --- | --------|
|1| Alchemy	|
|2| {Animal} (p. 64)	|
|3| Aristocracy	|
|4| Art	|
|5| Asylums	|
|6| {Activity} (p. 19)	|
|7| Banking	|
|8| Baths	|
|9| Begging	|
|10| Bells	|
|11| Brewing	|
|12| Bridges	|
|13| {Building} (p. 47)	|
|14| Bureaucracy	|
|15| Business	|
|16| Canals	|
|17| Catacombs	|
|18| Cats	|
|19| {CityEvent} (p. 46)	|
|20| Courts	|
|21| Crime families	|
|22| Cults	|
|23| Dancing	|
|24| {Delusion} (p. 30)	|
|25| Dining	|
|26| {Disaster} (p. 31)	|
|27| {Domain} (p. 33)	|
|28| Drinking	|
|29| Dueling	|
|30| {Dungeon} (p. 16)	|
|31| {Element} (p. 29)	|
|32| {Faction} (p. 50)	|
|33| {FactionTrait} (p. 50) |
|34| Fashion	|
|35| Festivals	|
|36| Feuds	|
|37| Fishing	|
|38| Flowers	|
|39| {Food} (p. 49)	|
|40| Fortifications	|
|41| Fountains	|
|42| Gambling	|
|43| Gangs	|
|44| Gardens	|
|45| Government	|
|46| Guilds	|
|47| {Hazard} (p. 17)	|
|48| Horses	|
|49| Hunger	|
|50| Industry |
|51| Inventions|
|52| Leisure|
|53| Libraries|
|54| Livestock|
|55| {MagicSchool} (p. 31)|
|56| Marketplaces|
|57| Mausoleums|
|58| Medicine|
|59| Mercenaries|
|60| Military|
|61| Monasteries|
|62| Monuments|
|63| Museums|
|64| Music|
|65| {Mutation} (p. 30)|
|66| Opulence|
|67| Perfume|
|68| Printing|
|69| Prisons|
|70| {Profession} (p. 57)|
|71| Punishment|
|72| Rats|
|73| Ravens|
|74| Refuse|
|75| Rituals|
|76| {RoomTheme} (p. 15)|
|77| Ruins|
|78| Sacrifices|
|79| Science|
|80| Shipyards|
|81| Slavery|
|82| Slums|
|83| Smithing|
|84| Smoke|
|85| Song|
|86| Spices|
|87| Spores|
|88| Steam power|
|89| {Structure} (p. 11)|
|90| Temples|
|91| Textiles|
|92| Theaters|
|93| Thievery|
|94| Towers|
|95| Training|
|96| {TravelShift} (p. 9)|
|97| {Treasure} (p. 42)|
|98| Trees|
|99| Universities|
|00| Wizardry|
{{< /rpg_table >}}

{{< rpg_table name="CityEvent" >}}
| d100 | ? |
| --- | --------|
|1| {Activity} (p. 19)	|
|2| Alcohol ban	|
|3| Art trend	|
|4| Assassination	|
|5| Beggar crowds	|
|6| Blessing	|
|7| Building collapse |
|8| Carnival	|
|9| Conscription	|
|10| Consecration	|
|11| Construction	|
|12| Coronation	|
|13| Coup	|
|14| Crime wave	|
|15| Curfew	|
|16| Delegation	|
|17| {Delusion} (p. 30)	|
|18| Demolition	|
|19| {Disaster} (p. 31)	|
|20| Discovery	|
|21| Dueling trend	|
|22| Earthquake	|
|23| Election	|
|24| Excavation	|
|25| Execution	|
|26| Exodus	|
|27| Faction war (p. 50) |
|28| Fashion ban	|
|29| Fashion trend	|
|30| Fasting	|
|31| Feasting	|
|32| Fire	|
|33| Flood	|
|34| Funeral	|
|35| Gambling ban	|
|36| Gang war	|
|37| Grain shortage	|
|38| Heresy	|
|39| Holy day	|
|40| House war	|
|41| Hysteria	|
|42| Iconoclasm	|
|43| Immigration	|
|44| Inquisition	|
|45| Insurrection	|
|46| Invasion	|
|47| Jailbreak	|
|48| Kidnapping	|
|49| Landslide	|
|50| Magic ban |
|51| Manhunt|
|52| Mass arrests|
|53| Mass conversion|
|54| Mass execution|
|55| Mass expulsion|
|56| Mass pardon|
|57| Meat shortage|
|58| Military parade|
|59| Missionaries|
|60| Mourning|
|61| Mud|
|62| {Mutation} (p. 30)|
|63| New invention|
|64| Patrols|
|65| Peace talks|
|66| Pilgrims|
|67| Plague|
|68| Political scandal|
|69| Preaching|
|70| Procession|
|71| Proclamation|
|72| Protests|
|73| Public debate|
|74| Public games|
|75| Public prayer|
|76| Refugees|
|77| Religious council|
|78| Religious scandal|
|79| Religious war|
|80| Rioting|
|81| Sacrifice|
|82| Schism|
|83| Serial killer|
|84| Siege|
|85| Sinkhole|
|86| Smoke|
|87| Social scandal|
|88| Stench|
|89| Street racing|
|90| Summoning|
|91| Surrender|
|92| Taxation|
|93| Textile shortage|
|94| Tournament|
|95| {TravelShift} (p. 9)|
|96| Trial|
|97| Vandalism|
|98| Vermin|
|99| Weapons ban|
|00| Wedding|
{{< /rpg_table >}}

{{< rpg_table name="StreetDetail" >}}
| d100 | ? |
| --- | --------|
|1| {Activity} (p. 19)	|
|2| {Animal} (many) (p. 64)	|
|3| Aqueduct	|
|4| Arcade	|
|5| Archway	|
|6| Awnings	|
|7| Balconies	|
|8| Barricades	|
|9| Benches	|
|10| Bonfire	|
|11| Bricklayers	|
|12| Bridge	|
|13| Broken glass	|
|14| {Building} (p. 47)	|
|15| Canal	|
|16| Carpets	|
|17| Carriages	|
|18| Carts	|
|19| Catwalks	|
|20| Checkpoint	|
|21| Children	|
|22| Chimneys	|
|23| Clergy	|
|24| Climbable walls	|
|25| Clotheslines	|
|26| Compost	|
|27| Crates	|
|28| Crowd	|
|29| Crumbling walls |
|30| Dead end	|
|31| Dusty	|
|32| Entertainers	|
|33| Fence	|
|34| Flooding	|
|35| Food stalls	|
|36| Fountain	|
|37| Fresh paint	|
|38| Fungi	|
|39| Gardens	|
|40| Gas leak	|
|41| Gates	|
|42| Graffiti	|
|43| Gravel	|
|44| Guards	|
|45| Hay bales	|
|46| {Hazard} (p. 17)	|
|47| Hot coals	|
|48| Ladders	|
|49| Lampposts	|
|50| Lanterns |
|51| Livestock|
|52| Long steps|
|53| Manure pile|
|54| {MiscItems} (many) (p. 39)|
|55| Mud|
|56| Narrow|
|57| Nobility|
|58| Oil spill|
|59| Overgrown|
|60| Palanquins|
|61| Pickpockets|
|62| Piles of rags|
|63| {PlaceTrait} (p. 11)|
|64| Pollen clouds|
|65| Pool|
|66| Posters|
|67| {Profession} (p. 57)|
|68| Roof access|
|69| {RoomDetail} (p. 15)|
|70| Roots|
|71| Ropes|
|72| Roundabout|
|73| Sand pile|
|74| Scaffolding|
|75| Sewage|
|76| Sewer access|
|77| Shrine|
|78| Sinkhole|
|79| Skybridge|
|80| Smoke|
|81| Spilled fruit|
|82| Statues|
|83| Steam|
|84| Steep roofs|
|85| Steep streets|
|86| Stepping stones|
|87| Street cleaners|
|88| Street criers|
|89| Teens|
|90| Tents|
|91| Thugs|
|92| Torches|
|93| Torn up street|
|94| Trees|
|95| Tunnel|
|96| Vermin swarms|
|97| Weapon stalls|
|98| Well|
|99| Wet cement|
|00| Wine spill|
{{< /rpg_table >}}

{{< rpg_table name="Buildings" >}}
| d100 | ? |
| --- | --------|
|1| Academy	|
|2| Alchemist	|
|3| Apothecary	|
|4| Archive	|
|5| Armorer	|
|6| Art dealer	|
|7| Asylum	|
|8| Baker	|
|9| Bank	|
|10| Barber	|
|11| Bathhouse	|
|12| Blacksmith	|
|13| Bookbinder	|
|14| Bookseller	|
|15| Boyer	|
|16| Brewery	|
|17| Butcher	|
|18| Candlemaker	|
|19| Carpenter	|
|20| Castle	|
|21| Catacombs	|
|22| Chandler	|
|23| Cheesemaker	|
|24| Clockmaker	|
|25| Clothier	|
|26| Cobbler	|
|27| Courthouse	|
|28| Criminal den	|
|29| Curiosity shop	|
|30| Dock	|
|31| {Dungeon} (p. 16)	|
|32| Dyer	|
|33| Fighting pit	|
|34| Fletcher	|
|35| Fortune teller	|
|36| Furrier	|
|37| Gallery	|
|38| Gambling hall	|
|39| Garden	|
|40| Gatehouse	|
|41| Glassworks	|
|42| Goldsmith	|
|43| Guildhall	|
|44| Haberdashery	|
|45| Hospital	|
|46| {Inn} (p. 48)	|
|47| Jeweler	|
|48| Law office	|
|49| Leatherworks	|
|50| Library |
|51| Locksmith|
|52| Lounge|
|53| Manor|
|54| Marketplace|
|55| Mason|
|56| Menagerie|
|57| Monastery|
|58| Moneylender|
|59| Museum|
|60| Observatory|
|61| Opera house|
|62| Orphanage|
|63| Outfitter|
|64| Palace|
|65| Park|
|66| Physician|
|67| Potter|
|68| Printer|
|69| Prison|
|70| Restaurant|
|71| Rope maker|
|72| {Room} (p. 14)|
|73| Saddler|
|74| Sewers|
|75| Shipyards|
|76| Shrine|
|77| Slaughterhouse|
|78| Stables|
|79| Stockyard|
|80| Stonecarver|
|81| {Structure} (p. 11)|
|82| Tailor|
|83| Tannery|
|84| Tattooist|
|85| Taxidermist|
|86| Temple|
|87| Theater|
|88| Tobacconist|
|89| Townhouse|
|90| University|
|91| Veterinarian|
|92| Warehouse|
|93| Watchtower|
|94| Watermill|
|95| Weapon smith|
|96| Weaver|
|97| Windmill|
|98| Winery|
|99| Wizard's tower|
|00| Workshop|
{{< /rpg_table >}}


{{< rpg_table name="InnName1" >}}
| d100 | ? |
| --- | --------|
|1| {Activity} (p. 19)	|
|2| Bellowing	|
|3| Bitter	|
|4| Black	|
|5| Blazing	|
|6| Bleak	|
|7| Blessed	|
|8| Bloody	|
|9| Blue	|
|10| Broken	|
|11| Bucking	|
|12| Busy	|
|13| Cacophonous	|
|14| {Color} (p. 37)	|
|15| Copper	|
|16| Courageous	|
|17| Crimson	|
|18| Cunning	|
|19| Dancing	|
|20| Dead	|
|21| Disdainful	|
|22| Drunken	|
|23| Extravagant	|
|24| Floating	|
|25| Flying	|
|26| Frosty	|
|27| Ghastly	|
|28| Ghostly	|
|29| Glittering	|
|30| Golden	|
|31| Graceful	|
|32| Green	|
|33| Grotesque	|
|34| Harmless	|
|35| Heartless	|
|36| Helpful	|
|37| Hideous	|
|38| Honeyed	|
|39| Howling	|
|40| Hungry	|
|41| Jolly	|
|42| Kindly	|
|43| Last	|
|44| Lazy	|
|45| Loathsome	|
|46| Lovesick	|
|47| Loyal	|
|48| Melancholy	|
|49| Merry	|
|50| Moldy |
|51| Musical |
|52| Muttering |
|53| Mysterious |
|54| Nervous |
|55| Nimble |
|56| Oozing |
|57| Petrified |
|58| {PlaceTrait} (p. 11) |
|59| Prancing |
|60| Purple |
|61| {Quality} (p. 28) |
|62| Reckless |
|63| Righteous |
|64| Roaring |
|65| Roasted |
|66| Romantic |
|67| Ruby |
|68| Salty |
|69| Scented |
|70| Seven |
|71| Shimmering |
|72| Shivering |
|73| Shrieking |
|74| Sickly |
|75| Silent |
|76| Silver |
|77| Singing |
|78| Sleeping |
|79| Smoking |
|80| {Sound} (p. 66) |
|81| Squeaky |
|82| Stubborn |
|83| Tainted |
|84| Terrible |
|85| Thirsty |
|86| Thirteen |
|87| Three |
|88| Tipsy |
|89| Troublesome |
|90| Two |
|91| Vexing |
|92| Violet |
|93| Wailing |
|94| Wandering |
|95| Wanton |
|96| Whispering |
|97| Whistling |
|98| White |
|99| Wicked |
|00| Yellow |
{{< /rpg_table >}}

{{< rpg_table name="InnName2" >}}
| d100 | ? |
| --- | --------|
|1| {Animal} (p. 64)	|
|2| Ant	|
|3| Axe	|
|4| Barrel	|
|5| Bear	|
|6| Beaver	|
|7| Beetle	|
|8| Bell	|
|9| Boar	|
|10| Boot	|
|11| Bowl	|
|12| Bucket	|
|13| Bull	|
|14| Candle	|
|15| Cat	|
|16| Claw	|
|17| Cloak	|
|18| {Clothing} (p. 40)	|
|19| Cock	|
|20| Coin	|
|21| Comb	|
|22| Cow	|
|23| Crow	|
|24| Crown	|
|25| Cup	|
|26| Door	|
|27| Dragon	|
|28| Eagle	|
|29| Egg	|
|30| Elephant	|
|31| Fish	|
|32| Flea	|
|33| {Food} (p. 49)	|
|34| Fork	|
|35| Giant	|
|36| Griffin	|
|37| Hare	|
|38| Hart	|
|39| Hawk	|
|40| Hen	|
|41| Hog	|
|42| Hole	|
|43| Horse	|
|44| Hound	|
|45| Jar	|
|46| Kettle	|
|47| Key	|
|48| Knife	|
|49| Lamb	|
|50| Lamp |
|51| Lantern|
|52| Lion|
|53| Lute|
|54| Mackerel|
|55| Maid|
|56| Mermaid|
|57| {MiscItem} (p. 39)|
|58| Mole|
|59| Monk|
|60| {Monster} (p. 61)|
|61| Moon|
|62| Mule|
|63| Needle|
|64| Noose|
|65| Orb|
|66| Pearl|
|67| Pig|
|68| Pipe|
|69| Plow|
|70| Post|
|71| Prince|
|72| {Profession} (p. 57)|
|73| Queen|
|74| Rat|
|75| Rose|
|76| Saint|
|77| Serpent|
|78| Shoe|
|79| Shovel|
|80| Skull|
|81| Sow|
|82| Spoon|
|83| Staff|
|84| Star|
|85| Stone|
|86| Sun|
|87| Sword|
|88| Thistle|
|89| Thorn|
|90| Torch|
|91| Tower|
|92| Unicorn|
|93| Vulture|
|94| {Weapon} (p. 43)|
|95| Weasel|
|96| Whale|
|97| Wheel|
|98| Whistle|
|99| Wife|
|00| Worm|
{{< /rpg_table >}}


{{< rpg_table name="FoodTrait" >}}
| d100 | ? |
| --- | --------|
|1| Aged	|
|2| Bacon-wrapped	|
|3| Baked	|
|4| Balls	|
|5| Barbecued	|
|6| Basted	|
|7| Battered	|
|8| Blackened	|
|9| Blanched	|
|10| Boiled	|
|11| Braised	|
|12| Breaded	|
|13| Brined	|
|14| Broiled	|
|15| Broth	|
|16| Browned	|
|17| Buttered	|
|18| Cake	|
|19| Candied	|
|20| Canned	|
|21| Caramelized	|
|22| Casserole	|
|23| Charred	|
|24| Chilled	|
|25| Chowder	|
|26| Cobbler	|
|27| Creamed	|
|28| Crumble	|
|29| Cubed	|
|30| Cured	|
|31| Deep-fried	|
|32| Diced	|
|33| Drunk	|
|34| Emulsified	|
|35| Fermented	|
|36| Flambéd	|
|37| Fondue	|
|38| Frozen	|
|39| Glazed	|
|40| Grilled	|
|41| Gruel	|
|42| Hash	|
|43| Hasty	|
|44| Honeyed	|
|45| Iced	|
|46| Inside-out	|
|47| Jellied	|
|48| Layered	|
|49| Live	|
|50| Loaf |
|51| Marinated|
|52| Mashed|
|53| Melt|
|54| Minced|
|55| Moldy|
|56| Pan-fried|
|57| Pastry|
|58| Patty|
|59| Peppered|
|60| Pickled|
|61| Pie|
|62| Poached|
|63| Porridge|
|64| Pudding|
|65| Quiche|
|66| Rancid|
|67| Raw|
|68| Roasted|
|69| Roll|
|70| Salad|
|71| Salted|
|72| Sandwich|
|73| Sausage|
|74| Sautéed|
|75| Seared|
|76| Seasoned|
|77| Shredded|
|78| Simmered|
|79| Slow-cooked|
|80| Smoked|
|81| Soup|
|82| Sour|
|83| Spiced|
|84| Spit-roasted|
|85| Stale|
|86| Steamed|
|87| Stewed|
|88| Stir-fried|
|89| Strips|
|90| Stuffed|
|91| Sugared|
|92| Sun-dried|
|93| Tenderized|
|94| {Texture} (p. 36)|
|95| Toasted|
|96| Turnover|
|97| Undercooked|
|98| Upside-down|
|99| Wind-dried|
|00| Wrapped|
{{< /rpg_table >}}

{{< rpg_table name="Food" >}}
| d100 | ? |
| --- | --------|
|1| Acorn	|
|2| Alligator	|
|3| Almond	|
|4| {Animal} (p. 64)	|
|5| Antelope	|
|6| Apple	|
|7| Artichokes	|
|8| Asparagus	|
|9| Bass	|
|10| Bear	|
|11| Beaver	|
|12| Beef	|
|13| Beet	|
|14| Bell pepper	|
|15| Bison	|
|16| Blueberry	|
|17| Broccoli	|
|18| Brussels sprout	|
|19| Cabbage	|
|20| Carp	|
|21| Carrot	|
|22| Catfish	|
|23| Cattail	|
|24| Cauliflower	|
|25| Caviar	|
|26| Celery	|
|27| Cheese	|
|28| Cherry	|
|29| Chestnut	|
|30| Chicken	|
|31| Clams	|
|32| Corn	|
|33| Crab	|
|34| Crayfish	|
|35| Cucumber	|
|36| Dandelion	|
|37| Duck	|
|38| Eel	|
|39| Egg	|
|40| Eggplant	|
|41| Elk	|
|42| Goat	|
|43| Goose	|
|44| Grape	|
|45| Green bean	|
|46| Guinea pig	|
|47| Ham	|
|48| Hare	|
|49| Hazelnut	|
|50| Hot pepper |
|51| Kidney bean|
|52| Lamb|
|53| Leek|
|54| Lemon|
|55| Lime|
|56| Lobster|
|57| Moose|
|58| {Monster} (p. 61)|
|59| Mushroom|
|60| Mussels|
|61| Mutton|
|62| Onion|
|63| Orange|
|64| {Organ} (p. 64)|
|65| Partridge|
|66| Pea|
|67| Pear|
|68| Perch|
|69| Pheasant|
|70| Pork|
|71| Possum|
|72| Potato|
|73| Pumpkin|
|74| Quail|
|75| Rabbit|
|76| Raccoon|
|77| Radish|
|78| Raspberry|
|79| Rat|
|80| Reindeer|
|81| Rhubarb|
|82| Salmon|
|83| Shrimp|
|84| Snails|
|85| Snake|
|86| Spinach|
|87| Squash|
|88| Squirrel|
|89| Strawberry|
|90| Sturgeon|
|91| Tangerine|
|92| Tomato|
|93| Trout|
|94| Turnip|
|95| Turtle|
|96| Veal|
|97| Venison|
|98| Walnut|
|99| Wild boar|
|00| Yam|
{{< /rpg_table >}}


{{< rpg_table name="Faction" >}}
| d100 | ? |
| --- | --------|
|1| Actors' guild	|
|2| Angelic army	|
|3| Art movement	|
|4| Art school	|
|5| Assassins' guild	|
|6| Bandit troop	|
|7| Banking corp	|
|8| Barbarian horde |
|9| Bards' guild	|
|10| Beggars' guild	|
|11| Big game hunters |
|12| Burgling crew	|
|13| Chimney sweeps |
|14| Circus troupe	|
|15| City council	|
|16| City guard	|
|17| Convent	|
|18| Counterfeiters	|
|19| Courtier faction  |
|20| Crafting guild	|
|21| Crime family	|
|22| Cult fanatics	|
|23| Debate society	|
|24| Demonic army	|
|25| Deserter band	|
|26| Dragon cult	|
|27| Druid circle	|
|28| Dungeoneer guild |
|29| Elite warriors	|
|30| Explorer's club	|
|31| Fencing school	|
|32| Fight club	|
|33| Fraternity	|
|34| Free company	|
|35| Gambling ring	|
|36| Ghost society	|
|37| Gladiator league |
|38| Gourmand club	|
|39| Gravediggers	|
|40| Healing order	|
|41| Heist crew	|
|42| Heretical sect	|
|43| High council	|
|44| Hired muscle	|
|45| Illuminati	|
|46| Inquisition	|
|47| Knightly order	|
|48| Living machines |
|49| Local watch	|
|50| Mad scientists |
|51| Merchant cartel|
|52| Midwife union|
|53| Militia|
|54| Mining company|
|55| Monastery|
|56| Monster hunters|
|57| Mothers|
|58| Mutants|
|59| National church|
|60| Naval crew|
|61| Necromancers|
|62| Noble house|
|63| Officers' club|
|64| Oracles' circle|
|65| Outlander clan|
|66| Peacekeepers|
|67| Philosophy club|
|68| Pirate crew|
|69| Poachers|
|70| Social movement|
|71| Political party|
|72| Ranger squad|
|73| Religious sect|
|74| Resistance|
|75| Royal army|
|76| Royal house|
|77| Scholar's circle|
|78| School faculty|
|79| Secret society|
|80| Sewer people|
|81| Smuggling ring|
|82| Sports league|
|83| Sports team|
|84| Spy network|
|85| Street artists|
|86| Street gang|
|87| Street musicians|
|88| Student union|
|89| Terrorist cell|
|90| Thieves' guild|
|91| Trade company|
|92| Urchin swarm|
|93| Vampire clan|
|94| Veteran society|
|95| Vigilante league|
|96| Warlock pact|
|97| Werewolf pack|
|98| Witch coven|
|99| Wizard school|
|00| Zombie horde|
{{< /rpg_table >}}

{{< rpg_table name="FactionTrait" >}}
| d100 | ? |
| --- | --------|
|1| Activist	|
|2| {Activity} (p. 19)	|
|3| Aging	|
|4| Anarchic	|
|5| Ancient	|
|6| Athletic	|
|7| Avant-garde	|
|8| Backstabbing	|
|9| Bankrupt	|
|10| Breakaway	|
|11| Bureaucratic	|
|12| Charitable	|
|13| Code of conduct |
|14| Connected	|
|15| Contemptuous	|
|16| Corrupt	|
|17| Crime-fighting	|
|18| Decadent	|
|19| Desperate	|
|20| Discriminatory	|
|21| Disciplined	|
|22| Divided	|
|23| Dwindling	|
|24| Egalitarian	|
|25| Elite	|
|26| Eloquent	|
|27| Elusive	|
|28| Erratic	|
|29| Exclusive	|
|30| Expanding	|
|31| Family	|
|32| Fanatical	|
|33| Feared	|
|34| Fractious	|
|35| Genteel	|
|36| Glamorous	|
|37| Global reach	|
|38| Gullible	|
|39| Heretical	|
|40| Homeless	|
|41| Hunted	|
|42| Inbred	|
|43| Incompetent	|
|44| Incorruptible	|
|45| Inquisitive	|
|46| Insane	|
|47| Insular	|
|48| Internecine	|
|49| Intoxicated	|
|50| Laid back |
|51| Law-abiding|
|52| Learned|
|53| Magical|
|54| Manipulative|
|55| Martial|
|56| Monarchist|
|57| Murderous|
|58| Musical|
|59| Mutated|
|60| National reach|
|61| Obnoxious|
|62| Ostentatious|
|63| Patriotic|
|64| {Personality} (p. 56)|
|65| Pious|
|66| Popular|
|67| Predatory|
|68| Predictable|
|69| Proselytizing|
|70| Proud|
|71| Respected|
|72| Reunified|
|73| Revered|
|74| Reviled|
|75| Revolutionary|
|76| Righteous|
|77| Rules-bound|
|78| Ruthless|
|79| Scrappy|
|80| Secretive|
|81| Single-minded|
|82| Slandered|
|83| Snobby|
|84| Stealthy|
|85| Stodgy|
|86| Subversive|
|87| Suppressed|
|88| Thieving|
|89| Threatened|
|90| Thriving|
|91| Traitorous|
|92| Undead|
|93| Up-and-coming|
|94| Wealthy|
|95| Welcoming|
|96| Well-armed|
|97| Well-provisioned|
|98| Wretched|
|99| Xenophobic|
|00| Youthful|
{{< /rpg_table >}}


{{< rpg_table name="Mission" >}}
| d100 | ? |
| --- | --------|
|1| Apprehend NPC  |
|2| Arrange marriage |
|3| Awaken monster |
|4| Banish demon	|
|5| Befoul location	|
|6| Blackmail NPC	|
|7| Bribe faction	|
|8| Bribe NPC	|
|9| Burgle building	|
|10| Chart dungeon	|
|11| Chart location	|
|12| Clear dungeon	|
|13| Clear lair	|
|14| Control building |
|15| Craft item	|
|16| Cripple NPC	|
|17| Deceive faction	|
|18| Deceive NPC	|
|19| Deface building	|
|20| Defraud NPC	|
|21| Destroy building |
|22| Destroy item	|
|23| Destroy monster |
|24| Destroy warband |
|25| Discredit NPC	|
|26| Drown NPC	|
|27| Duplicate item	|
|28| Entertain NPC	|
|29| Entrap NPC	|
|30| Escape building	|
|31| Escape city	|
|32| Escape dungeon |
|33| Escape location	|
|34| Escort NPC	|
|35| Extort NPC	|
|36| Follow NPC	|
|37| Forge weapon	|
|38| Frame NPC	|
|39| Frighten NPC	|
|40| {Goal} (p. 57)	|
|41| Haunt NPC	|
|42| Hide item	|
|43| Hide NPC	|
|44| Humiliate NPC	|
|45| Impersonate NPC |
|46| Impress faction	|
|47| Impress NPC	|
|48| Infiltrate building |
|49| Infiltrate city	|
|50| Infiltrate dungeon |
|51| Infiltrate faction|
|52| Investigate crime|
|53| Kidnap leader|
|54| Kidnap NPC|
|55| Kill leader|
|56| Kill NPC|
|57| Locate city|
|58| Locate dungeon|
|59| Locate faction|
|60| Locate item|
|61| Locate landmark|
|62| Locate NPC|
|63| Locate location|
|64| Loot dungeon|
|65| Overthrow NPC|
|66| Patrol building|
|67| Patrol city|
|68| Persuade faction|
|69| Persuade NPC|
|70| Plant item|
|71| Poison NPC|
|72| Prank NPC|
|73| Protect building|
|74| Protect item|
|75| Protect NPC|
|76| Pursue NPC|
|77| Raid building|
|78| Replace item|
|79| Replace NPC|
|80| Rescue family|
|81| Rescue leader|
|82| Rescue NPC|
|83| Resolve dispute|
|84| Retrieve item|
|85| Rob faction|
|86| Rob NPC|
|87| Sabotage item|
|88| Sabotage treaty|
|89| Sabotage wedding|
|90| Seduce NPC|
|91| Smuggle item in|
|92| Smuggle item out|
|93| Spread rumor|
|94| Spy on faction|
|95| Spy on NPC|
|96| Summon being|
|97| Survive test|
|98| Tame monster|
|99| Transport item|
|00| Transport NPC|
{{< /rpg_table >}}


{{< rpg_table name="Reward" >}}
| d100 | ? |
| --- | --------|
|1| A blind eye	|
|2| Alcohol	|
|3| {Animal} (p. 64)	|
|4| Armor	|
|5| Army	|
|6| Artwork	|
|7| {Asset} (p. 58)	|
|8| Blackmail	|
|9| Blessing	|
|10| Blueprints	|
|11| {Building} (p. 47)	|
|12| Business	|
|13| Caravel	|
|14| Carriage	|
|15| Castle	|
|16| Chapel	|
|17| Charter	|
|18| Companion	|
|19| Contract	|
|20| Cottage	|
|21| Craftsmen	|
|22| Cypher	|
|23| Delivery	|
|24| {Dungeon} (p. 16)	|
|25| Dungeon map	|
|26| Endorsement	|
|27| Estate	|
|28| Expert	|
|29| {Faction} ally (p. 50) |
|30| Familiar	|
|31| Farm	|
|32| Favor	|
|33| Fishing boat	|
|34| Fleet	|
|35| Forge	|
|36| Formula	|
|37| Galleon	|
|38| Gold	|
|39| Guide	|
|40| Guildhall	|
|41| Healing	|
|42| Hideout	|
|43| Hirelings	|
|44| Hounds	|
|45| House	|
|46| Influential ally	|
|47| {Inn} (p. 48)	|
|48| Jewels	|
|49| Key	|
|50| Livestock |
|51| {Location} (p. 10)|
|52| Machine|
|53| {Relic} |
|54| Magical ally|
|55| Mansion|
|56| {Material} (p. 42)|
|57| Meeting|
|58| Mercenaries|
|59| {Monster} ally (p. 61)|
|60| Noble clothing|
|61| Noble title|
|62| Palace|
|63| Pardon|
|64| Planar portal|
|65| Political clout|
|66| {Potion} (p. 35)|
|67| Printing press|
|68| Reduced sentence|
|69| Location map|
|70| {Relic}|
|71| Religious clout|
|72| Renown|
|73| Revenge|
|74| Rights|
|75| Royal clothing|
|76| Safe passage|
|77| Secret|
|78| Servants|
|79| Shortcut|
|80| Sloop|
|81| Social clout|
|82| {Spell} (pp. 22-25)|
|83| Spices|
|84| {Structure} (p. 11)|
|85| Temple|
|86| Theater|
|87| Time extension|
|88| Tower|
|89| Training|
|90| Transformation|
|91| Transport|
|92| {Treasure} (p. 42)|
|93| Treasure map|
|94| Vineyard|
|95| Wagon|
|96| Warband|
|97| Warhorse|
|98| Wealthy clothing|
|99| {Weakness} (p. 67)|
|00| {Weapon} (p. 43)|
{{< /rpg_table >}}

## Downtime

{{< rpg_table name="CarousingMishap" >}}
| d20 | Carousing Mishaps |
| --- | ----------------- |
|1| You made a public fool of yourself. |
|2| Take d3 direct damage from a fight. |
|3| Pay d100c due to fines. |
|4| You are engaged to be married. |
|5| Lose d1000c from gambling. |
|6| Groupies follow you everywhere. |
|7| You’ve made an enemy. |
|8| You have an ugly, prominent tattoo. |
|9| Hangover: take -5 on all tests today. |
|10| You have joined a local faction (p. 50)<br> (Faction? {FactionDesc}) |
|11| Robbed: Lose all remaining coin. |
|12| You wake up in prison. |
|13| The building is on fire! |
|14| You’re expected to complete a mission (p. 51) due to your boasts. (Mission? {Mission}) |
|15| A duel is scheduled for the next dawn. |
|16| You signed a shady contract. |
|17| A stranger’s corpse is on the floor. |
|18| A faction hates you (p. 50)<br>(Faction? {FactionDesc}) |
|19| All your belongings have been stolen. |
|20| You meet a new companion who wants to join your party. |
{{< /rpg_table >}}

{{< rpg_table name="CareerType" >}}
| d3 | CareerType |
| --- | ----------------- |
| 1 | common: Requires 1 month and 1000c (carpenter, hunter, fisherman, sailor, dyer, gardener, blacksmith, etc.).|
| 2 | uncommon careers: Requires 3 months and 5000c to attempt related tasks and an additional 3 months and 5000c to gain a +5 to related non-combat checks (burglar, acrobat, locksmith, grave robber, herbalist, tattooist, prospector, etc.).|
| 3 | rare careers: Requires 1 year and 30,000c to attempt related tasks and an additional year and 30,000c to gain a +5 to related non-combat checks (alchemist, lawyer, assassin, sculptor, folklorist, etc.).|
{{< /rpg_table >}}

## Recruiting

{{< rpg_table name="Archetype" >}}
| d100 | Archetype |
| --- | --------|
| 1 | Adventurous lad |
| 2 | Airhead scholar	|
| 3 | Ambitious novice |
| 4 | Animal whisperer |
| 5 | Annoying urchin |
| 6 | Arrogant doctor |
| 7 | Austere priest	|
| 8 | Beloved general |
| 9 | Blunt farmer	|
| 10 | Classy courtesan |
| 11 | Cold governess	|
| 12 | Corrupt guard	|
| 13 | Crafty eunuch	|
| 14 | Criminal genius |
| 15 | Cruel count	|
| 16 | Daring explorer |
| 17 | Dashing poet	|
| 18 | Desperate bandit |
| 19 | Disguised beggar |
| 20 | Doughty fighter |
| 21 | Dumb thug	|
| 22 | Edgy artist	|
| 23 | Enigmatic oracle |
| 24 | Evil sorcerer	|
| 25 | Exiled politician |
| 26 | Fallen knight	|
| 27 | Fanatical cultist	|
| 28 | Fearless daredevil |
| 29 | Femme fatale	|
| 30 | Flamboyant tailor |
| 31 | Foppish courtier |
| 32 | Gentleman thief |
| 33 | Glib merchant	|
| 34 | Gossiping servant |
| 35 | Greedy pirate	|
| 36 | Grim undertaker |
| 37 | Grizzled ranger	|
| 38 | Gruff blacksmith |
| 39 | Hardboiled sleuth |
| 40 | Harried student	|
| 41 | Heartless landlord |
| 42 | Hedonist duke	|
| 43 | Hippy herbalist	|
| 44 | Honest laborer	|
| 45 | Hotheaded duelist |
| 46 | Idealistic recruit |
| 47 | Irritable cook	|
| 48 | Jaded veteran	|
| 49 | Jolly monk	|
| 50 | Learned sage	|
| 51 | Lovable drunk |
| 52 | Lovestruck youth |
| 53 | Loyal squire |
| 54 | Mad inventor |
| 55 | Melancholy queen |
| 56 | Misfit outlander |
| 57 | Musical prodigy |
| 58 | Mysterious figure |
| 59 | Narcissist actor |
| 60 | Noble prince |
| 61 | Nosy innkeeper |
| 62 | Oafish earl |
| 63 | Old fool |
| 64 | Overeager bard |
| 65 | Pathetic gambler |
| 66 | Penniless writer |
| 67 | Pious pilgrim |
| 68 | Pitiful orphan |
| 69 | Plucky princess |
| 70 | Raging barbarian |
| 71 | Rash occultist |
| 72 | Righteous paladin |
| 73 | Roguish smuggler |
| 74 | Ruthless assassin |
| 75 | Salty mariner |
| 76 | Sarcastic jester |
| 77 | Senile monarch |
| 78 | Serene hermit |
| 79 | Silent headsman |
| 80 | Sinister vizier |
| 81 | Sleazy lawyer |
| 82 | Sleepy jailer |
| 83 | Slimy henchman |
| 84 | Sly trickster |
| 85 | Solitary composer |
| 86 | Sour bureaucrat |
| 87 | Spirited rebel |
| 88 | Spoiled heir |
| 89 | Starving poacher |
| 90 | Strict officer |
| 91 | Suspicious spy |
| 92 | Swashbuckler |
| 93 | Talkative peddler |
| 94 | Tyrannical leader |
| 95 | Wealthy patron |
| 96 | Wild druid |
| 97 | Wise wizard |
| 98 | Wizened crone |
| 99 | Worn-out boxer |
| 00 | Zealous inquisitor |
{{< /rpg_table >}}


{{< rpg_table name="MaleName" >}}
| d100 | Male Name |
| --- | --------|
| 1 | Alaric	|
| 2 | Aldous	|
| 3 | Alton	|
| 4 | Archibald	|
| 5 | Arne	|
| 6 | Arthur	|
| 7 | Balthazar	|
| 8 | Bard	|
| 9 | Bartholomew	|
| 10 | Bartlett	|
| 11 | Basil	|
| 12 | Baxton	|
| 13 | Benedict	|
| 14 | Bennett	|
| 15 | Beorn	|
| 16 | Bertram	|
| 17 | Burchard	|
| 18 | Cadman	|
| 19 | Caspian	|
| 20 | Chadwick	|
| 21 | Clovis	|
| 22 | Conrad	|
| 23 | Corbett	|
| 24 | Crispin	|
| 25 | Cyprian	|
| 26 | Cyrus	|
| 27 | Daegal	|
| 28 | Denis	|
| 29 | Destrian	|
| 30 | Drogo	|
| 31 | Eldon	|
| 32 | Ellis	|
| 33 | Elric	|
| 34 | Emil	|
| 35 | Erasmus	|
| 36 | Faustus	|
| 37 | Felix	|
| 38 | Finn	|
| 39 | Finnian	|
| 40 | Fitzhugh	|
| 41 | Florian	|
| 42 | Fox	|
| 43 | Galileo	|
| 44 | Giles	|
| 45 | Godfrey	|
| 46 | Godwin	|
| 47 | Grimwald	|
| 48 | Hamlin	|
| 49 | Hannibal	|
| 50 | Hildebrand	|
| 51 | Jasper |
| 52 | Jeremiah |
| 53 | Johan |
| 54 | Jules |
| 55 | Kenric |
| 56 | Leif |
| 57 | Leopold |
| 58 | Leoric |
| 59 | Lothar |
| 60 | Lucian |
| 61 | Merrick |
| 62 | Milo |
| 63 | Mordred |
| 64 | Mortimer |
| 65 | Neville |
| 66 | Odel |
| 67 | Ogden |
| 68 | Orion |
| 69 | Orvyn |
| 70 | Osric |
| 71 | Oswald |
| 72 | Paschal |
| 73 | Percival |
| 74 | Peregrine |
| 75 | Piers |
| 76 | Quentin |
| 77 | Randolf |
| 78 | Redmaine |
| 79 | Reinhold |
| 80 | Rex |
| 81 | Ricard |
| 82 | Roland |
| 83 | Rufus |
| 84 | Silas |
| 85 | Stilton |
| 86 | Stratford |
| 87 | Sylvio |
| 88 | Tenpiece |
| 89 | Thaddeus |
| 90 | Torsten |
| 91 | Tristan |
| 92 | Urban |
| 93 | Valentin |
| 94 | Valerian |
| 95 | Virgil |
| 96 | Warrick |
| 97 | Waverly |
| 98 | Webster |
| 99 | Wilkin |
| 00 | Wymond |
{{< /rpg_table >}}

{{< rpg_table name="FemaleName" >}}
| d100 | Female Name |
| --- | --------|
| 1 | Adelaide	|
| 2 | Agnes	|
| 3 | Alma	|
| 4 | Anastasia	|
| 5 | Anika	|
| 6 | Annora	|
| 7 | Astrid	|
| 8 | Barsaba	|
| 9 | Beatrix	|
| 10 | Bethel	|
| 11 | Bianca	|
| 12 | Blanche	|
| 13 | Bodil	|
| 14 | Bridget	|
| 15 | Brunhilde	|
| 16 | Calypso	|
| 17 | Catalina	|
| 18 | Cecilia	|
| 19 | Celeste	|
| 20 | Charlotte	|
| 21 | Cleopha	|
| 22 | Clotilde	|
| 23 | Clover	|
| 24 | Colette	|
| 25 | Constance	|
| 26 | Damaris	|
| 27 | Daphne	|
| 28 | Demona	|
| 29 | Desirae	|
| 30 | Ella	|
| 31 | Elsbeth	|
| 32 | Esme	|
| 33 | Eulalia	|
| 34 | Euphemia	|
| 35 | Eydis	|
| 36 | Fern	|
| 37 | Fiora	|
| 38 | Fleur	|
| 39 | Florence	|
| 40 | Francesca	|
| 41 | Gertrude	|
| 42 | Giselle	|
| 43 | Godiva	|
| 44 | Guinevere	|
| 45 | Heloise	|
| 46 | Henrietta	|
| 47 | Hester	|
| 48 | Hippolyta	|
| 49 | Honora	|
| 50 | Imogene	|
| 51 | Ingrid |
| 52 | Ione |
| 53 | Iris |
| 54 | Isabetta |
| 55 | Isolde |
| 56 | Jacquette |
| 57 | Jeanne |
| 58 | Jessamine |
| 59 | Jilly |
| 60 | Lavinia |
| 61 | Lisbet |
| 62 | Madelena |
| 63 | Margot |
| 64 | Marian |
| 65 | Marigold |
| 66 | Matilda |
| 67 | Melisande |
| 68 | Millicent |
| 69 | Minerva |
| 70 | Morgan |
| 71 | Nerissa |
| 72 | Odette |
| 73 | Olga |
| 74 | Olivia |
| 75 | Orchid |
| 76 | Pepper |
| 77 | Petra |
| 78 | Philomena |
| 79 | Phoebe |
| 80 | Piety |
| 81 | Poppy |
| 82 | Portia |
| 83 | Rosalind |
| 84 | Rose |
| 85 | Sabina |
| 86 | Sif |
| 87 | Sigourney |
| 88 | Sigrid |
| 89 | Silence |
| 90 | Sybil |
| 91 | Tabitha |
| 92 | Trillby |
| 93 | Ulfhild |
| 94 | Ursula |
| 95 | Vivian |
| 96 | Wendy |
| 97 | Willow |
| 98 | Winifred |
| 99 | Yvette |
| 00 | Zora |
{{< /rpg_table >}}

{{< rpg_table name="Surname1" >}}
| d100 | Surname Start |
| --- | --------|
| 1 | Adder	|
| 2 | Apple	|
| 3 | Ash	|
| 4 | Bab	|
| 5 | Bag	|
| 6 | Bar	|
| 7 | Barrow	|
| 8 | Basker	|
| 9 | Beau	|
| 10 | Beetle	|
| 11 | Berry	|
| 12 | Bird	|
| 13 | Brandy	|
| 14 | Bright	|
| 15 | Brindle	|
| 16 | Bull	|
| 17 | Bux	|
| 18 | Caven	|
| 19 | Chelten	|
| 20 | Chester	|
| 21 | Chuff	|
| 22 | Chum	|
| 23 | Clod	|
| 24 | Cobble	|
| 25 | Cotton	|
| 26 | Cress	|
| 27 | Crom	|
| 28 | Cumber	|
| 29 | Dela	|
| 30 | Dig	|
| 31 | Draw	|
| 32 | Dreg	|
| 33 | Drol	|
| 34 | Dun	|
| 35 | Even	|
| 36 | Ever	|
| 37 | Fair	|
| 38 | Fallow	|
| 39 | Farthing	|
| 40 | Feather	|
| 41 | Ferns	|
| 42 | Fox	|
| 43 | Gam	|
| 44 | Gird	|
| 45 | Gos	|
| 46 | Grey	|
| 47 | Grim	|
| 48 | Half	|
| 49 | Hard	|
| 50 | Harrow	|
| 51 | Hart |
| 52 | Haver |
| 53 | Hedge |
| 54 | Hither |
| 55 | Holly |
| 56 | Honey |
| 57 | Horn |
| 58 | Kettle |
| 59 | Kings |
| 60 | Little |
| 61 | Long |
| 62 | Love |
| 63 | Middle |
| 64 | Mug |
| 65 | Nether |
| 66 | Never |
| 67 | Obling |
| 68 | Pember |
| 69 | Penning |
| 70 | Pens |
| 71 | Pinker |
| 72 | Porten |
| 73 | Quill |
| 74 | Rath |
| 75 | Sack |
| 76 | Sallow |
| 77 | Salt |
| 78 | Scor |
| 79 | Sedge |
| 80 | Silver |
| 81 | Slither |
| 82 | Smit |
| 83 | Snod |
| 84 | Souther |
| 85 | Stew |
| 86 | Stir |
| 87 | Swine |
| 88 | Tar |
| 89 | Temple |
| 90 | Tide |
| 91 | Tread |
| 92 | Under |
| 93 | Vander |
| 94 | Weather |
| 95 | Wester |
| 96 | Wex |
| 97 | Whit |
| 98 | Wither |
| 99 | Within |
| 00 | Wy |
{{< /rpg_table >}}

{{< rpg_table name="Surname2" >}}
| d100 | Surname End |
| --- | --------|
| 1 | bald	|
| 2 | barrow	|
| 3 | batch	|
| 4 | beck	|
| 5 | blood	|
| 6 | bold	|
| 7 | bone	|
| 8 | bottle	|
| 9 | bottom	|
| 10 | bridge	|
| 11 | buck	|
| 12 | burn	|
| 13 | bury	|
| 14 | by	|
| 15 | caster	|
| 16 | castle	|
| 17 | chester	|
| 18 | child	|
| 19 | church	|
| 20 | cliff	|
| 21 | cloth	|
| 22 | coat	|
| 23 | combe	|
| 24 | cott	|
| 25 | dale	|
| 26 | dish	|
| 27 | ditch	|
| 28 | down	|
| 29 | fax	|
| 30 | field	|
| 31 | fent	|
| 32 | fer	|
| 33 | field	|
| 34 | foot	|
| 35 | force	|
| 36 | fort	|
| 37 | fry	|
| 38 | gale	|
| 39 | grass	|
| 40 | grave	|
| 41 | green	|
| 42 | grove	|
| 43 | ham	|
| 44 | hill	|
| 45 | hope	|
| 46 | lack	|
| 47 | lain	|
| 48 | land	|
| 49 | less	|
| 50 | lin	|
| 51 | ling |
| 52 | lish |
| 53 | lock |
| 54 | long |
| 55 | low |
| 56 | ly |
| 57 | man |
| 58 | march |
| 59 | mark |
| 60 | marl |
| 61 | marsh |
| 62 | mass |
| 63 | meer |
| 64 | mond |
| 65 | mont |
| 66 | more |
| 67 | morn |
| 68 | nick |
| 69 | ny |
| 70 | port |
| 71 | ridge |
| 72 | row |
| 73 | sea |
| 74 | set |
| 75 | shot |
| 76 | sop |
| 77 | spoon |
| 78 | staff |
| 79 | stoke |
| 80 | stone |
| 81 | ten |
| 82 | thorn |
| 83 | thorpe |
| 84 | throp |
| 85 | ton |
| 86 | tooth |
| 87 | top |
| 88 | vane |
| 89 | ville |
| 90 | wald |
| 91 | wark |
| 92 | watch |
| 93 | water |
| 94 | well |
| 95 | whistle |
| 96 | wick |
| 97 | wood |
| 98 | worm |
| 99 | worth |
| 00 | worthy |
{{< /rpg_table >}}

{{< rpg_table name="Personality" >}}
| d100 | Personality |
| --- | --------|
| 1 | Always bored |
| 2 | Anxious	|
| 3 | {Archetype} (p. 53)	|
| 4 | Arrogant	|
| 5 | Blunt	|
| 6 | Bossy	|
| 7 | Braggart	|
| 8 | Bully	|
| 9 | Can-do attitude	|
| 10 | Chatterbox	|
| 11 | Chipper	|
| 12 | Chummy	|
| 13 | Competitive	|
| 14 | Compulsive liar |
| 15 | Condescending	|
| 16 | Conniving	|
| 17 | Courageous	|
| 18 | Cowardly	|
| 19 | Creep	|
| 20 | Cryptic	|
| 21 | Debonair	|
| 22 | Decadent	|
| 23 | Ditz	|
| 24 | Dogmatic	|
| 25 | Droll	|
| 26 | Epicurean	|
| 27 | Fanatic	|
| 28 | Femme fatale	|
| 29 | Fiercely loyal	|
| 30 | Flamboyant	|
| 31 | Flirt	|
| 32 | Folksy	|
| 33 | Formal	|
| 34 | Generous	|
| 35 | Germaphobe	|
| 36 | Glutton	|
| 37 | Gossip	|
| 38 | Gullible	|
| 39 | Hard-boiled	|
| 40 | Holds a grudge	|
| 41 | Honorable	|
| 42 | Hothead	|
| 43 | Humorless	|
| 44 | Idealistic	|
| 45 | Imperious	|
| 46 | Impulsive	|
| 47 | Insecure	|
| 48 | Intense	|
| 49 | Jealous	|
| 50 | Jerk	|
| 51 | Klutz |
| 52 | Know-it-all |
| 53 | Knows everybody |
| 54 | Logical |
| 55 | Love-struck |
| 56 | Manic |
| 57 | Melancholic |
| 58 | Misanthrope |
| 59 | Miserly |
| 60 | Morbid |
| 61 | Naive |
| 62 | Narcissist |
| 63 | Nerd |
| 64 | Never gives up |
| 65 | Obsessive |
| 66 | Over-cautious |
| 67 | Paranoid |
| 68 | Patriotic |
| 69 | Pedantic |
| 70 | Perfect manners |
| 71 | Perfectionist |
| 72 | Pious |
| 73 | Power-hungry |
| 74 | Prejudiced |
| 75 | Prickly |
| 76 | Proselytizer |
| 77 | Righteous |
| 78 | Rigid discipline |
| 79 | Ruthless |
| 80 | Sadist |
| 81 | Sarcastic |
| 82 | Self-pitying |
| 83 | Serene |
| 84 | Skeptical |
| 85 | Slacker |
| 86 | Slovenly |
| 87 | Snitch |
| 88 | Snob |
| 89 | Sophist |
| 90 | Spacey |
| 91 | Superstitious |
| 92 | Terrible memory |
| 93 | Thick |
| 94 | Toady |
| 95 | Totally unreliable |
| 96 | Truthful |
| 97 | Uptight |
| 98 | Whiner |
| 99 | Windbag |
| 00 | Wisecracking |
{{< /rpg_table >}}

{{< rpg_table name="NPCDetail" >}}
| d100 | Detail |
| --- | --------|
| 1 | Acid scar	|
| 2 | Aquiline face	|
| 3 | Arrow scar	|
| 4 | Athletic	|
| 5 | Bad eyesight	|
| 6 | Bald	|
| 7 | Balding	|
| 8 | Beautiful	|
| 9 | Birthmark	|
| 10 | Bite mark	|
| 11 | Blade scar	|
| 12 | Blind	|
| 13 | Blunt face	|
| 14 | Bony	|
| 15 | Braided hair	|
| 16 | Brawny	|
| 17 | Bristly hair	|
| 18 | Broken nose	|
| 19 | Burn scar	|
| 20 | Bushy brows	|
| 21 | Childish face	|
| 22 | Chiseled face	|
| 23 | Claw scar	|
| 24 | Coiffed	|
| 25 | Corpulent	|
| 26 | Craggy face	|
| 27 | Crooked teeth	|
| 28 | Cropped hair	|
| 29 | Curly hair	|
| 30 | Deaf	|
| 31 | Delicate face	|
| 32 | Dreadlocks	|
| 33 | Filthy hair	|
| 34 | Flabby	|
| 35 | Flat face	|
| 36 | Frail	|
| 37 | Freckles	|
| 38 | Furrowed face	|
| 39 | Gaunt	|
| 40 | Gold tooth	|
| 41 | Hard of hearing	|
| 42 | Hulking	|
| 43 | Lanky	|
| 44 | Lantern jaw	|
| 45 | Limp	|
| 46 | Lumpy face	|
| 47 | Luxurious hair	|
| 48 | Missing arm	|
| 49 | Missing ear	|
| 50 | Missing eye	|
| 51 | Missing finger |
| 52 | Missing foot |
| 53 | Missing hand |
| 54 | Missing leg |
| 55 | Missing teeth |
| 56 | {Mutation} (p. 30) |
| 57 | Mute |
| 58 | No eyebrows |
| 59 | Noose scar |
| 60 | Oily |
| 61 | Pageboy hair |
| 62 | Perfect posture |
| 63 | Perfumed |
| 64 | Piercings |
| 65 | Pointed face |
| 66 | Ponytail |
| 67 | Pox scars |
| 68 | Ripped |
| 69 | Ritual scar |
| 70 | Rosy face |
| 71 | Rotten teeth |
| 72 | Round face |
| 73 | Rugged |
| 74 | Scrawny |
| 75 | Shaggy hair |
| 76 | Sharp teeth |
| 77 | Shriveled |
| 78 | Silky hair |
| 79 | Sinewy |
| 80 | Slender |
| 81 | Slicked hair |
| 82 | Slouched |
| 83 | Smelly |
| 84 | Square face |
| 85 | Squint |
| 86 | Statuesque |
| 87 | Stout |
| 88 | Sweaty |
| 89 | Tattooed |
| 90 | Tiny |
| 91 | Topknot |
| 92 | Towering |
| 93 | Twisted lip |
| 94 | Very long hair |
| 95 | Warts |
| 96 | Wavy hair |
| 97 | Weathered face |
| 98 | Willowy |
| 99 | Wiry |
| 00 | Wispy hair |
{{< /rpg_table >}}

{{< rpg_table name="Profession" >}}
| d100 | Profession |
| --- | --------|
| 1 | Abbot	|
| 2 | Acolyte	|
| 3 | Acrobat	|
| 4 | Adviser	|
| 5 | Alchemist	|
| 6 | Apothecary	|
| 7 | Archer	|
| 8 | {Archetype} (p. 53)	|
| 9 | Artisan	|
| 10 | Artist	|
| 11 | Baker	|
| 12 | Beggar	|
| 13 | Blacksmith	|
| 14 | Bookbinder	|
| 15 | Brewer	|
| 16 | Burglar	|
| 17 | Circus performer |
| 18 | Carpenter	|
| 19 | Composer	|
| 20 | Cook	|
| 21 | Count	|
| 22 | Courtier	|
| 23 | Cutpurse	|
| 24 | Doctor	|
| 25 | Dogcatcher	|
| 26 | Dramaturge	|
| 27 | Duke	|
| 28 | Earl	|
| 29 | Eunuch	|
| 30 | Executioner	|
| 31 | Falconer	|
| 32 | Farmer	|
| 33 | Fence	|
| 34 | Fisherman	|
| 35 | Fishwife	|
| 36 | Fortuneteller	|
| 37 | Galley slave	|
| 38 | Gambler	|
| 39 | Gardener	|
| 40 | General	|
| 41 | Gladiator	|
| 42 | Governess	|
| 43 | Gravedigger	|
| 44 | Horse breeder	|
| 45 | Guard	|
| 46 | Herbalist	|
| 47 | Hermit	|
| 48 | Hunter	|
| 49 | Innkeeper	|
| 50 | Interpreter	|
| 51 | Jailer |
| 52 | Jester |
| 53 | Jeweler |
| 54 | Juggler |
| 55 | Knight |
| 56 | Lady |
| 57 | Locksmith |
| 58 | Magician |
| 59 | Mariner |
| 60 | Merchant |
| 61 | Minstrel |
| 62 | Monarch |
| 63 | Moneylender |
| 64 | Monk |
| 65 | Musician |
| 66 | Orphan |
| 67 | Outlander |
| 68 | Outlaw |
| 69 | Page |
| 70 | Peddler |
| 71 | Pilgrim |
| 72 | Poacher |
| 73 | Poisoner |
| 74 | Priest |
| 75 | Prince |
| 76 | Privateer |
| 77 | Ratcatcher |
| 78 | Scholar |
| 79 | Scribe |
| 80 | Sellsword |
| 81 | Ship's captain |
| 82 | Shopkeeper |
| 83 | Smuggler |
| 84 | Soldier |
| 85 | Spy |
| 86 | Squire |
| 87 | Student |
| 88 | Swindler |
| 89 | Tailor |
| 90 | Tavern wench |
| 91 | Thespian |
| 92 | Tomb robber |
| 93 | Torturer |
| 94 | Trapper |
| 95 | Urchin |
| 96 | Vagrant |
| 97 | Viscount |
| 98 | Vizier |
| 99 | Wigmaker |
| 00 | Young lady |
{{< /rpg_table >}}

{{< rpg_table name="Goal" >}}
| d100 | Goal |
| --- | --------|
| 1 | Achieve holiness |
| 2 | Acquire followers |
| 3 | Acquire land	|
| 4 | Acquire wealth	|
| 5 | Advise leader	|
| 6 | Amaze city	|
| 7 | Avoid detection |
| 8 | Become free	|
| 9 | Become infamous |
| 10 | Become learned |
| 11 | Clear region	|
| 12 | Collect artifacts	|
| 13 | Conquer city	|
| 14 | Conquer region |
| 15 | Control city	|
| 16 | Control faction	|
| 17 | Control magic	|
| 18 | Control military |
| 19 | Control politics	|
| 20 | Control religion |
| 21 | Control trade	|
| 22 | Create army	|
| 23 | Create art	|
| 24 | Create base	|
| 25 | Create city	|
| 26 | Create disease	|
| 27 | Create dungeon |
| 28 | Create faction	|
| 29 | Create family	|
| 30 | Create machine	|
| 31 | Create monopoly |
| 32 | Create monster	|
| 33 | Create portal	|
| 34 | Cripple faction	|
| 35 | Cure disease	|
| 36 | Destroy army	|
| 37 | Destroy artifacts |
| 38 | Destroy city	|
| 39 | Destroy faction	|
| 40 | Destroy family	|
| 41 | Destroy magic	|
| 42 | Destroy nobility |
| 43 | Destroy realm	|
| 44 | Destroy religion |
| 45 | Destroy world	|
| 46 | Discredit faction |
| 47 | Distribute wealth |
| 48 | End poverty	|
| 49 | End war	|
| 50 | Enforce law	|
| 51 | Enforce morality |
| 52 | Enlightenment |
| 53 | Entertainment |
| 54 | Fame and glory |
| 55 | Find justice |
| 56 | Find love |
| 57 | Frame faction |
| 58 | Frighten city |
| 59 | Frighten faction |
| 60 | Gain respect |
| 61 | Get revenge |
| 62 | Hear rumors |
| 63 | Indulge tastes |
| 64 | Join faction |
| 65 | Join nobility |
| 66 | Lead faction |
| 67 | Map wild |
| 68 | Master skill |
| 69 | {Mission} (p. 51) |
| 70 | Overthrow ruler |
| 71 | Pacify faction |
| 72 | Protect artifacts |
| 73 | Protect borders |
| 74 | Protect city |
| 75 | Protect faction |
| 76 | Protect family |
| 77 | Protect history |
| 78 | Protect leader |
| 79 | Protect region |
| 80 | Protect the weak |
| 81 | Publish works |
| 82 | Purge traitors |
| 83 | Raise the dead |
| 84 | Restore faction |
| 85 | Restore ruler |
| 86 | Rule city |
| 87 | Rule realm |
| 88 | Rule world |
| 89 | Sabotage faction |
| 90 | See the world |
| 91 | Serve a deity |
| 92 | Serve evil |
| 93 | Serve faction |
| 94 | Serve leader |
| 95 | Serve the needy |
| 96 | Share knowledge |
| 97 | Slay monsters |
| 98 | Sow chaos |
| 99 | Spread beliefs |
| 00 | Survive dangers |
{{< /rpg_table >}}

{{< rpg_table name="Asset" >}}
| d100 | ? |
| --- | --------|
|1| Agile	|
|2| Assassin leader	|
|3| Bodyguards	|
|4| {Book} expert (p. 40) |
|5| {Building} (p. 47)	|
|6| Building access	|
|7| Card shark	|
|8| Charming	|
|9| Contortionist	|
|10| Cooks books	|
|11| Cult leader	|
|12| Demigod	|
|13| Disciples	|
|14| Disguises	|
|15| Dungeon access |
|16| Elite archer	|
|17| Elite fighter	|
|18| Erases evidence	|
|19| Excellent liar	|
|20| Extremely rich	|
|21| Faction leader	|
|22| Faction member |
|23| Famous actor	|
|24| Famous artist	|
|25| Famous cleric	|
|26| Famous composer|
|27| Famous explorer |
|28| Famous general	|
|29| Famous poet	|
|30| Fast	|
|31| Feared	|
|32| Fence	|
|33| Forges papers	|
|34| Gorgeous	|
|35| Hears rumors	|
|36| Heir to a fortune |
|37| Huge family	|
|38| Impersonator	|
|39| Instructor	|
|40| Intimidating	|
|41| Knows buyers	|
|42| Knows shortcut  |
|43| Launders money |
|44| Local knowledge |
|45| Loremaster	|
|46| Loyal henchmen |
|47| Master mage	|
|48| Mechanical expert|
|49| Military leader	|
|50| Multilingual |
|51| Natural leader|
|52| Noble|
|53| Nothing to lose|
|54| Owed favors|
|55| Owed money|
|56| Owns armory|
|57| Owns army|
|58| Owns castle|
|59| Owns factory|
|60| Owns fleet|
|61| Owns library|
|62| Owns manor|
|63| Owns press|
|64| Owns relics|
|65| Owns ship|
|66| Owns stables|
|67| Owns the guards|
|68| Owns tower|
|69| Owns warband|
|70| Political leader|
|71| {Potion} (p. 35)|
|72| Potion stockpile|
|73| {Power} (p. 65)|
|74| Powerful ex|
|75| Powerful friend|
|76| Powerful lover|
|77| Powerful parent|
|78| Powerful spouse|
|79| Procures gear|
|80| {Profession} (p. 57)|
|81| Religious leader|
|82| Respected|
|83| Saboteur|
|84| Secret base|
|85| Secret lab|
|86| Secret weapon|
|87| Sells contraband|
|88| Servants|
|89| Shapeshifter|
|90| Smuggles goods|
|91| {Spell} (pp. 22-25)|
|92| Spy network|
|93| Stage magician|
|94| Stealthy|
|95| Strong|
|96| {Structure} (p. 11)|
|97| Trained animals|
|98| Trained monsters|
|99| Unbreakable|
|00| War hero|
{{< /rpg_table >}}

{{< rpg_table name="Liability" >}}
| d100 | ? |
| --- | --------|
|1| Alcoholic	|
|2| Arthritis	|
|3| Bad leader	|
|4| Bad liar	|
|5| Bankrupt	|
|6| Beholden	|
|7| Blackmailed	|
|8| Blind	|
|9| Cannot count	|
|10| Cannot read	|
|11| Clumsy	|
|12| Condescending	|
|13| Coward	|
|14| Crippled	|
|15| Cursed	|
|16| Deaf	|
|17| Decadent	|
|18| {Delusion} (p. 30)	|
|19| Disloyal followers |
|20| Disobeys orders  |
|21| Drug addict	|
|22| Evil lineage	|
|23| Exiled	|
|24| Faction enemy	|
|25| Faints	|
|26| Family enemy	|
|27| Flirts constantly  |
|28| {Food} addict (p. 49) |
|29| Fragile	|
|30| Gambling addict |
|31| Gets in fights	|
|32| Glutton	|
|33| Greedy	|
|34| Gullible	|
|35| Hemophilia	|
|36| Hideous	|
|37| Huge debts	|
|38| Insurrectionist	|
|39| Jealous	|
|40| Known con artist |
|41| Known murderer |
|42| Known thief	|
|43| Known traitor	|
|44| Known vandal	|
|45| Laughingstock	|
|46| Lazy	|
|47| Leaves evidence |
|48| Loud	|
|49| Lowborn	|
|50| Many enemies |
|51| Many exes|
|52| Migraines|
|53| Military enemy|
|54| Mind-controlled|
|55| Misinformed|
|56| Money trail|
|57| {MonsterTrait} (p. 65)|
|58| {Mutation} (p. 30)|
|59| Narcissist|
|60| Needs flattery|
|61| Needs medicine|
|62| No rights|
|63| Non-human|
|64| Obese|
|65| Obnoxious|
|66| OCD|
|67| Outcast|
|68| Paranoid|
|69| Pariah|
|70| Party animal|
|71| Political enemy|
|72| Poor equipment|
|73| Prison record|
|74| Reckless|
|75| Religious enemy|
|76| Scandalous birth|
|77| Smells like {Scent} (p. 66)|
|78| Secret lover|
|79| Seizures|
|80| Senile|
|81| Softhearted|
|82| {Sound} (p. 66)|
|83| Strict routines|
|84| Stupid|
|85| Superstitious|
|86| Surveilled|
|87| Suspicious|
|88| Too generous|
|89| Transformed|
|90| Uncool|
|91| Undead|
|92| Unpopular|
|93| Vampire|
|94| Very short|
|95| Wanted|
|96| War criminal|
|97| Weak-willed|
|98| {Weakness} (p. 67)|
|99| Werewolf|
|00| Widely despised|
{{< /rpg_table >}}

{{< rpg_table name="Relationship" >}}
| d100 | ? |
| --- | --------|
|1| Acquaintance	|
|2| Admirer	|
|3| Adviser	|
|4| Ally	|
|5| Apprentice	|
|6| Assistant	|
|7| Aunt or uncle	|
|8| Believer	|
|9| Beneficiary	|
|10| Best friend	|
|11| Blackmailer	|
|12| Bodyguard	|
|13| Business partner |
|14| Business rival	|
|15| Buyer	|
|16| Captive	|
|17| Captor	|
|18| Champion	|
|19| Child	|
|20| Client	|
|21| Coach	|
|22| Collaborator	|
|23| Colleague	|
|24| Competitor	|
|25| Confessor	|
|26| Confidant	|
|27| Contact	|
|28| Crush	|
|29| Customer	|
|30| Debtholder	|
|31| Debtor	|
|32| Disciple	|
|33| Donor	|
|34| Employee	|
|35| Employer	|
|36| Ex-spouse	|
|37| Fan	|
|38| Fiance	|
|39| Frenemy	|
|40| Grandchild	|
|41| Grandparent	|
|42| Guardian	|
|43| Guest	|
|44| Half-sibling	|
|45| Harasser	|
|46| Henchman	|
|47| Housekeeper	|
|48| Idol	|
|49| Investor	|
|50| Jilted lover |
|51| Kidnapper|
|52| Lover|
|53| Maid|
|54| Master|
|55| Mentor|
|56| Niece or nephew|
|57| Nemesis|
|58| Oppressor|
|59| Paid companion|
|60| Paramour|
|61| Parent|
|62| Patron|
|63| Pen pal|
|64| Political prisoner|
|65| Political rival|
|66| Predator|
|67| Prey|
|68| Prisoner|
|69| Protege|
|70| Quarry|
|71| Right hand|
|72| Rival suitor|
|73| Servant|
|74| Sibling|
|75| Snitch|
|76| Social rival|
|77| Source|
|78| Sponsor|
|79| Spouse|
|80| Stalker|
|81| Step-child|
|82| Step-parent|
|83| Step-sibling|
|84| Steward|
|85| Student|
|86| Suitor|
|87| Supplicant|
|88| Supplier|
|89| Sweetheart|
|90| Teacher|
|91| Teammate|
|92| Thrall|
|93| Tormentor|
|94| Trainer|
|95| Unrequited love|
|96| Valet|
|97| Vassal|
|98| Victim|
|99| War buddy|
|00| Ward|
{{< /rpg_table >}}

{{< rpg_table name="Mannerism" >}}
| d100 | Mannerism |
| --- | --------|
| 1 | Anecdotes	|
| 2 | {Archetype} (p. 53)	|
| 3 | Asides	|
| 4 | Authoritative	|
| 5 | Booming	|
| 6 | Breathy	|
| 7 | Brusque	|
| 8 | Chatty	|
| 9 | Cheery	|
| 10 | Chuckles	|
| 11 | Clipped	|
| 12 | Cocky	|
| 13 | Condescending	|
| 14 | Conspiratorial	|
| 15 | Crooning	|
| 16 | Cryptic	|
| 17 | Curt	|
| 18 | Deadpan	|
| 19 | Deep voice	|
| 20 | Dramatic	|
| 21 | Drawl	|
| 22 | Droning	|
| 23 | Effusive	|
| 24 | Enunciates	|
| 25 | Flowery	|
| 26 | Genteel	|
| 27 | Grave	|
| 28 | Gravelly	|
| 29 | Growling	|
| 30 | Halting	|
| 31 | Hiccups	|
| 32 | Highly formal	|
| 33 | Histrionic	|
| 34 | Hoarse	|
| 35 | Honeyed	|
| 36 | Hushed	|
| 37 | Hyperbolic	|
| 38 | Hypnotic	|
| 39 | Incoherent	|
| 40 | Insistent	|
| 41 | Interrupts	|
| 42 | Laconic	|
| 43 | Languid	|
| 44 | Lilting	|
| 45 | Long pauses	|
| 46 | Melodious	|
| 47 | Monosyllabic	|
| 48 | Monotone	|
| 49 | Mumbles	|
| 50 | Name-drops	|
| 51 | Narrates |
| 52 | Nasal |
| 53 | Ominous |
| 54 | Overconfident |
| 55 | Overly casual |
| 56 | Pedantic |
| 57 | Platitudinous |
| 58 | Ponderous |
| 59 | Pontificating |
| 60 | Precise |
| 61 | Prissy |
| 62 | Profane |
| 63 | Professorial |
| 64 | Purring |
| 65 | Quaint sayings |
| 66 | Quiet |
| 67 | Quivering |
| 68 | Quotations |
| 69 | Rambling |
| 70 | Random facts |
| 71 | Ranting |
| 72 | Rapid-fire |
| 73 | Raspy |
| 74 | Resonant |
| 75 | Rhyming |
| 76 | Rhythmic |
| 77 | Robotic |
| 78 | Sarcastic |
| 79 | Seductive |
| 80 | Shrill |
| 81 | Sing-song |
| 82 | Slow speech |
| 83 | Slurring |
| 84 | Sneering |
| 85 | Sonorous |
| 86 | Soothing |
| 87 | {Sound} (p. 66) |
| 88 | Speechifying |
| 89 | Squeaky |
| 90 | Street slang |
| 91 | Stutters |
| 92 | Talks to self |
| 93 | Trails off |
| 94 | Upspoken |
| 95 | Vitriolic |
| 96 | Voice breaks |
| 97 | Warm |
| 98 | Whispers |
| 99 | Wistful |
| 00 | Wry |
{{< /rpg_table >}}

## Monster

{{< rpg_table name="Monster" >}}
| d100 | Monster |
| --- | --------|
| 1 | Aboleth	|
| 2 | Air elemental	|
| 3 | Angel	|
| 4 | {Animal} (p. 64)	|
| 5 | Animated armor |
| 6 | Banshee	|
| 7 | Basilisk	|
| 8 | Black pudding	|
| 9 | Blink dog	|
| 10 | Brain flayer	|
| 11 | Bugbear	|
| 12 | Bulette	|
| 13 | Centaur	|
| 14 | Chimera	|
| 15 | Cockatrice	|
| 16 | Crawling claw	|
| 17 | Cyclops	|
| 18 | Darkmantle	|
| 19 | Death knight	|
| 20 | Demon	|
| 21 | Dire wolf	|
| 22 | Djinn	|
| 23 | Doppelganger	|
| 24 | Dragon	|
| 25 | Dryad	|
| 26 | Earth elemental	|
| 27 | Efreet	|
| 28 | Eye tyrant	|
| 29 | Fire elemental	|
| 30 | Gargoyle	|
| 31 | Gelatinous cube |
| 32 | Ghost	|
| 33 | Ghoul	|
| 34 | Giant	|
| 35 | Giant {Animal} (p. 64) |
| 36 | Giant centipede	|
| 37 | Giant crab	|
| 38 | Giant frog	|
| 39 | Giant scorpion	|
| 40 | Giant snake	|
| 41 | Giant spider	|
| 42 | Giant weasel	|
| 43 | Gnoll	|
| 44 | Goblin	|
| 45 | Golem	|
| 46 | Gorgon	|
| 47 | Gray ooze	|
| 48 | Griffon	|
| 49 | Hag	|
| 50 | Harpy	|
| 51 | Hell hound |
| 52 | Hippogriff |
| 53 | Hobgoblin |
| 54 | Homunculus |
| 55 | Hook horror |
| 56 | Hydra |
| 57 | Imp |
| 58 | Intellect devourer |
| 59 | Invisible stalker |
| 60 | Kobold |
| 61 | Kraken |
| 62 | Lich |
| 63 | Lizardfolk |
| 64 | Manticore |
| 65 | Merfolk |
| 66 | Mimic |
| 67 | Minotaur |
| 68 | Mummy |
| 69 | Myconid |
| 70 | Naga |
| 71 | Ochre jelly |
| 72 | Ogre |
| 73 | Orc |
| 74 | Owl bear |
| 75 | Pegasus |
| 76 | Peryton |
| 77 | Phase spider |
| 78 | Piercer |
| 79 | Purple worm |
| 80 | Rakshasa |
| 81 | Roc |
| 82 | Roper |
| 83 | Rust monster |
| 84 | Satyr |
| 85 | Shadow |
| 86 | Skeleton |
| 87 | Sphinx |
| 88 | Stirge |
| 89 | Succubus |
| 90 | Tarrasque |
| 91 | Treant |
| 92 | Troll |
| 93 | Tyrannosaurus |
| 94 | Unicorn |
| 95 | Vampire |
| 96 | Water elemental |
| 97 | Werewolf |
| 98 | Wyvern |
| 99 | Yeti |
| 00 | Zombie |
{{< /rpg_table >}}

{{< rpg_table name="Bestiary"  >}}
| d34 | Bestiary |
| --- | -------- |
| 1 | animated armor: AC 18, HP 24, LVL 6, ATK weapon (d8), MOV 20’, MRL 12, NA d6 (0). Immune to mental effects. Dark vision. Held together by magic. Loud.|
| 2 | bandit: AC 13, HP 4, LVL 1, ATK weapon (d6), MOV 40’, MRL 8, NA d8 (3d10). Like to ambush.|
| 3 | basilisk: AC 15, HP 24, LVL 6, ATK bite (d10), MOV 20’, MRL 9, NA d6 (d6). Petrifies targets who look in its eyes and fail a CON check. Creatures take -5 to attacks while avoiding its gaze.|
| 4 | black pudding: AC 13, HP 40, LVL 10, ATK touch (3d8), MOV 20’, MRL 12, NA 1 (0). Only vulnerable to fire. When hit by a non-fire attack, it creates a LVL 2 pudding that deals d8 damage. Dissolves metal and wood and can move across ceilings and walls.|
| 5 | blink dog: AC 14, HP 16, LVL 4, ATK bite (d6), MOV 40’, MRL 6, NA d6 (d6). d4 × 10’ teleportation. Can to teleport into and then out of melee on their turn.|
| 6 | brain flayer: AC 15, HP 32, LVL 8, ATK psychic or 4 tentacles (d2), MOV 40’, MRL 7, NA d4 (d4). Psychic attack either mind controls or deals 3d6 damage to a target up to 40’ away who fails a WIS check. Eats a victim’s brain d4 rounds after a tentacle hits. Inhuman motives, iron will. Levitates.|
| 7 | bugbear: AC 14, HP 12, LVL 3, ATK weapon (d6), MOV 30’, MRL 9, NA 2d4 (5d4). +5 on surprise checks. Full of low cunning. Always hungry.|
| 8 | bulette: AC 19, HP 36, LVL 9, ATK bite (4d12) and 2 claws (3d6), MOV 50’/10’ burrowing, MRL 11, NA 0 (d2). If cornered, it can leap 20’ forwards and attack with 4 claws.|
| 9 | doppelganger: AC 14, HP 16, LVL 4, ATK bite (d12), MOV 30’, MRL 10, NA d6 (d6). Can duplicate nearby humanoids. Changes back when dead.|
| 10 | dragon: AC 20, HP 40, LVL 10, ATK fire breath (90’ cone, damage equal to its own HP) or 2 claws (1d8) and 1 bite (4d8), MOV 30’ (80’ flying), MRL 10, NA d4 (d4). Enjoys flattery.|
| 11 | eye tyrant: AC 19, HP 44, LVL 11, ATK bite (2d4) or eye rays, MOV 30’, MRL 12, NA 1 (0). Central eye creates 60’ anti- magic cone. Each of 10 eye stalks can fire a random spell (pp. 22-25) once per round. Megalomaniac.|
| 12 |gelatinous cube: AC 11, HP 16, LVL 4, ATK touch (2d4), MOV 10’, MRL 12, NA 1 (0). Immune to lightning and cold. +5 on surprise checks. Touched targets are engulfed and take 2d4 damage each turn. Escape by passing a STR check.|
| 13 | ghost: AC 19, HP 40, LVL 10, ATK life drain or possession, MOV 30’, MRL 10, NA 1 (1). Undead, silent, immune to mental spells. Only harmed by silver and magic. Life drain removes a random ability score point. Possession takes over a creature within 60’ who fails a WIS check. Complete a mission (p. 51) to let it rest. (Mission? {Mission} OR {Mission} OR {Mission})|
| 14 | ghoul: AC 13, HP 8, LVL 2, ATK 2 claws (d3) and bite (d3), MOV 30’, MRL 9, NA d6 (2d8). Hits paralyze targets who fail a STR check for 2d4 turns. Undead, silent, immune to mental spells.|
| 15 | giant: AC 15, HP 32, LVL 8, ATK weapon (2d8) or boulder (3d6), MOV 40’, MRL 8, NA d4 (2d4). Stupid.|
| 16 | giant frog: AC 12, HP 12, LVL 3, ATK bite (d4), MOV 30’, MRL 6, NA d4 (d4). Attacks up to 15’ away with its sticky tongue. On a hit, target is dragged to its mouth and bitten. On an attack roll of 20, target is swallowed whole and takes d6 damage each round until the toad dies.|
| 17 | giant spider: AC 13, HP 12, LVL 3, ATK bite (d6), MOV 20’, MRL 8, NA d3 (d3). Bitten targets who fail a CON check die in d4 turns. Paranoid.|
| 18 | goblin: AC 13, HP 4, LVL 1, ATK weapon (d6), MOV 20’, MRL 7, NA 2d4 (6d10). Dark vision. Reckless, insane.|
| 19 | gnoll: AC 14, HP 8, LVL 2, ATK weapon (2d4), MOV 30’, MRL 8, NA d6 (3d6). Lazy. Prefer bullying to combat.|
| 20 | harpy: AC 12, HP 12, LVL 3, ATK 2 claws (d4) or song, MOV 20’ (50’ when flying), MRL 7, NA d6 (2d4). Song charms targets who fail a CHA check.|
| 21 | hobgoblin: AC 13, HP 4, LVL 1, ATK weapon (d8), MOV 30’, MRL 8, NA d6 (4d6). Honorable warriors.|
| 22 | kobold: AC 12, HP 4, LVL 1, ATK weapon (d4), MOV 20’, MRL 6, NA 4d4 (6d10). Prefer to ambush. Dark vision. Want to follow a strong leader.|
| 23 | lich: AC 19, HP 44, LVL 11, ATK touch (d10), MOV 20’, MRL 10, NA 1 (1). Touch paralyses for 6 turns on a failed STR check. Undead, silent, and immune to mental spells as well as mundane, electrical, and cold damage. Owns 10 randomly generated spell books. You are beneath his notice. (SpellBooks? {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}, {SpellBook}.)|
| 24 | mimic: AC 13, HP 28, LVL 7, ATK pseudopod (3d4), MOV 30’, MRL 9, NA 1 (0). Mimics objects. +5 on surprise checks. Sticky.|
| 25 | ogre: AC 14, HP 16, LVL 4, ATK weapon (d10), MOV 30’, MRL 10, NA d6 (2d6). Stuffs creatures into a sack for later.|
| 26 | orc: AC 13, HP 4, LVL 1, ATK weapon (d6), MOV 40’, MRL 6, NA 2d4 (d6×10). Takes -5 in full sun. Grognards.|
| 27 | owl bear: AC 14, HP 20, LVL 5, ATK 2 claws (d8) and 1 bite (d8), MOV 40’, MRL 9, NA d4 (d4). Deals 2d8 bonus damage when both claws hit one target. Playful.|
| 28 | purple worm: AC 13, HP 60, LVL 15, ATK bite (2d8) and sting (d8), MOV 20’, MRL 10, NA d2 (d4). If the bite attack rolls 5+ higher than needed, the target is swallowed whole and takes 3d6 damage each round until the worm dies.|
| 29 | rust monster: AC 17, HP 20, LVL 5, ATK none, MOV 40’, MRL 7, NA d4 (d4). Dissolves and eats nearby metal.|
| 30 | skeleton: AC 12, HP 4, LVL 1, ATK weapon (d6), MOV 20’, MRL 12, NA 3d4 (3d10). Undead, silent, immune to mental spells and piercing damage. Gleeful.|
| 31 | treant: AC 17, HP 32, LVL 8, ATK 2 fists (2d6), MOV 20’, MRL 9, NA 0 (d8). Fears fire. +5 to surprise in a forest. Can turn up to 2 trees within 60’ into treants (who don’t have this power) over the course of two rounds. Self-righteous.|
| 32 | troll: AC 15, HP 28, LVL 7, ATK 2 claws (d6) and 1 bite (d10), MOV 40’, MRL 10, NA d8 (d8). Recovers d6 HP/ round. Revives 2d6 rounds after death. Fire or acid lowers its max HP.|
| 33 | vampire: AC 17, HP 32, LVL 8, ATK touch (d10) or gaze (charm), MOV 40’, MRL 11, NA d4 (d6). Undead, silent, immune to mental spells and mundane damage. Heals d6 damage per round. A touched creature loses a point from a random ability score. Gaze attack charms the target if they fail a CHA check. Can change to a humanoid, dire wolf, giant bat, or gaseous cloud at will. Repelled by garlic, holy relics, running water, and mirrors. Killed by sunlight or a stake through the heart. Dramatic.|
| 34 | werewolf: AC 14, LVL 4 (HP 18), ATK bite (2d4), MOV 60’, MRL 8, NA d6 (2d6). Can shift between human and wolf forms. Only harmed by silver and magic. Fears wolfsbane. Humans who are bitten become a werewolf 2d12 days later if they fail a CON check. Tortured.|
{{< /rpg_table >}}

{{< rpg_table name="Animal" >}}
| d100 | ? |
| --- | --------|
|1| Ant	|
|2| Anteater	|
|3| Ape	|
|4| Badger	|
|5| Bat	|
|6| Bear	|
|7| Beaver	|
|8| Bee	|
|9| Beetle	|
|10| Boar	|
|11| Bulldog	|
|12| Butterfly	|
|13| Camel	|
|14| Cat	|
|15| Centipede	|
|16| Chameleon	|
|17| Cobra	|
|18| Cockroach	|
|19| Constrictor	|
|20| Cougar	|
|21| Cow	|
|22| Coyote	|
|23| Crab	|
|24| Crane	|
|25| Cricket	|
|26| Crocodile	|
|27| Crow	|
|28| Cuckoo	|
|29| Donkey	|
|30| Dragonfly	|
|31| Duck	|
|32| Eagle	|
|33| Eel	|
|34| Elephant	|
|35| Elk	|
|36| Falcon	|
|37| Firefly	|
|38| Fox	|
|39| Frog	|
|40| Goat	|
|41| Goose	|
|42| Hare	|
|43| Hart	|
|44| Hawk	|
|45| Hedgehog	|
|46| Hornet	|
|47| Horse	|
|48| Hound	|
|49| Hummingbird	|
|50| Jackal	|
|51| Jellyfish|
|52| Leech|
|53| Lion|
|54| Locust|
|55| Lynx|
|56| Mantis|
|57| Mastodon|
|58| Mockingbird|
|59| Mole|
|60| Monkey|
|61| Moose|
|62| Moth|
|63| Mouse|
|64| Mule|
|65| Octopus|
|66| Otter|
|67| Owl|
|68| Ox|
|69| Panther|
|70| Pig|
|71| Pony|
|72| Porcupine|
|73| Possum|
|74| Rabbit|
|75| Raccoon|
|76| Rat|
|77| Reindeer|
|78| Rooster|
|79| Salamander|
|80| Scorpion|
|81| Seal|
|82| Shark|
|83| Sheep|
|84| Slug|
|85| Snail|
|86| Sparrow|
|87| Spider|
|88| Squid|
|89| Squirrel|
|90| Tiger|
|91| Toad|
|92| Turtle|
|93| Viper|
|94| Vulture|
|95| Walrus|
|96| Weasel|
|97| Whale|
|98| Wolf|
|99| Wolverine|
|00| Worm|
{{< /rpg_table >}}

{{< rpg_table name="Organ" >}}
| d100 | ? |
| --- | --------|
|1| Antennae	|
|2| Antlers	|
|3| Baleen	|
|4| Bat wings	|
|5| Beaver tail	|
|6| Blowhole	|
|7| Blubber	|
|8| Boar tusks	|
|9| Bushy tail	|
|10| Butterfly wings	|
|11| Carapace	|
|12| Cat tail	|
|13| Chameleon eyes |
|14| Claws	|
|15| Cobra hood	|
|16| Comb	|
|17| Compound eyes |
|18| Crab shell	|
|19| Crane beak	|
|20| Crest	|
|21| Cricket legs	|
|22| Detachable tail	|
|23| Digging claws	|
|24| Dragonfly wings  |
|25| Duck bill	|
|26| Eagle wings	|
|27| Elephant tusks	|
|28| Exoskeleton	|
|29| Eye stalks	|
|30| Falcon beak	|
|31| Fangs	|
|32| Feathers	|
|33| Fins	|
|34| Fly wings	|
|35| Frog legs	|
|36| Gills	|
|37| Gliding flaps	|
|38| Hooves	|
|39| Horns	|
|40| Horse tail	|
|41| Humming wings |
|42| Humps	|
|43| Large ears	|
|44| Large eyes	|
|45| Large incisors	|
|46| Long body	|
|47| Long ears	|
|48| Long legs	|
|49| Long neck	|
|50| Long snout	|
|51| Long tongue|
|52| Loose skin|
|53| Mandibles|
|54| Mane|
|55| Mantis arms|
|56| Monkey tail|
|57| Mouse ears|
|58| Mucus|
|59| Otter tail|
|60| Oyster shell|
|61| Pelican bill|
|62| Pig snout|
|63| Pig tail|
|64| Pincers|
|65| Plates|
|66| Plumage|
|67| Proboscis|
|68| Pseudopod|
|69| Quills|
|70| Rat tail|
|71| Scales|
|72| Scorpion tail|
|73| Segments|
|74| Shaggy hair|
|75| Short fur|
|76| Siphon|
|77| Snail shell|
|78| Spikes|
|79| Spines|
|80| Spinnerets|
|81| Spotted fur|
|82| Squid beak|
|83| Stinger|
|84| Striped fur|
|85| Stubby tail|
|86| Suction cups|
|87| Talons|
|88| Tendrils|
|89| Tentacles|
|90| Toucan beak|
|91| Trunk|
|92| Turtle shell|
|93| Udder|
|94| Walrus tusks|
|95| Warts|
|96| Wattle|
|97| Webbed feet|
|98| Webbed hands|
|99| Whiskers|
|00| Wool|
{{< /rpg_table >}}

{{< rpg_table name="MonsterTrait" >}}
| d100 | Monster Trait |
| --- | --------|
| 1 | Acid blood	|
| 2 | Amphibious	|
| 3 | Ancient	|
| 4 | {Animal} form (p. 29) |
| 5 | Animated	|
| 6 | Asymmetrical	|
| 7 | Bloated	|
| 8 | Bloodless	|
| 9 | Brittle	|
| 10 | Burning	|
| 11 | Charged	|
| 12 | Clay-like	|
| 13 | {Color} (p. 37)	|
| 14 | Colossal	|
| 15 | Crystalline	|
| 16 | Decaying	|
| 17 | {Delusion} (p. 30)	|
| 18 | {Element} skin (p. 29) |
| 19 | Elongated	|
| 20 | Ethereal	|
| 21 | Ever-young	|
| 22 | Eyeless	|
| 23 | Faceless	|
| 24 | Flaking	|
| 25 | Flammable	|
| 26 | Flexible	|
| 27 | Fluffy	|
| 28 | Foaming	|
| 29 | Fungal	|
| 30 | Fuzzy	|
| 31 | Gaseous	|
| 32 | Gelatinous	|
| 33 | Geometric	|
| 34 | Hair shedding	|
| 35 | Hairless	|
| 36 | Hairy	|
| 37 | Hardened	|
| 38 | Headless	|
| 39 | Ice-cold	|
| 40 | Illusory	|
| 41 | Iridescent	|
| 42 | Large head	|
| 43 | Legless	|
| 44 | Liquid	|
| 45 | Luminous	|
| 46 | Lumpy	|
| 47 | {Mannerism} (p. 59) |
| 48 | Many arms	|
| 49 | Many eyes	|
| 50 | Many faces	|
| 51 | Many heads |
| 52 | Many legs |
| 53 | Many mouths |
| 54 | Mechanical |
| 55 | Metallic |
| 56 | Mismatched limbs |
| 57 | Molting |
| 58 | Muscular |
| 59 | {Mutation} (p. 30) |
| 60 | No neck |
| 61 | One eye |
| 62 | Ooze-form |
| 63 | {Organ} (p. 64) |
| 64 | {Personality} (p. 56) |
| 65 | Poisonous |
| 66 | {Potion} (p. 35) |
| 67 | Powdery |
| 68 | {Power} (p. 65) |
| 69 | Pulsing |
| 70 | Radioactive |
| 71 | Reflective |
| 72 | Rubbery |
| 73 | {Scent} (p. 66) |
| 74 | Shadowy |
| 75 | Sharp |
| 76 | Short limbs |
| 77 | Shriveled |
| 78 | Skeletal |
| 79 | Skin shedding |
| 80 | Slimy |
| 81 | Smoking |
| 82 | Soft |
| 83 | Sooty |
| 84 | {Sound} (p. 66) |
| 85 | Sparking |
| 86 | Steaming |
| 87 | Sticky |
| 88 | Stinking |
| 89 | Stone-like |
| 90 | Stretchy |
| 91 | {Tactic} (p. 67) |
| 92 | {Texture} (p. 36) |
| 93 | Tiny |
| 94 | Translucent |
| 95 | Tree-like |
| 96 | Two-dimensional |
| 97 | Venomous |
| 98 | Vibrating |
| 99 | Waxy |
| 00 | {Weakness} (p. 67) |
{{< /rpg_table >}}

{{< rpg_table name="Power" >}}
| d100 | Power |
| --- | --------|
| 1 | Absorb abilities	|
| 2 | Acid aura	|
| 3 | Acid bolt	|
| 4 | Acid breath	|
| 5 | Astral projection |
| 6 | Attract	|
| 7 | Beast control	|
| 8 | Bird control	|
| 9 | Blind	|
| 10 | Blur	|
| 11 | Burrow	|
| 12 | Chameleon skin |
| 13 | Clairaudience	|
| 14 | Clairvoyance	|
| 15 | Clone self	|
| 16 | Create illusion	|
| 17 | Deafen	|
| 18 | Drain life	|
| 19 | Dreamwalk	|
| 20 | Earthquake	|
| 21 | Echolocation	|
| 22 | {Effect} (p. 28)	|
| 23 | {Effect} aura (p. 28) |
| 24 | {Effect} blast (p. 28) |
| 25 | {Effect} bolt (p. 28)	|
| 26 | {Effect} ray (p. 28)	|
| 27 | Electric aura	|
| 28 | {Element} aura (p. 29)|
| 29 | {Element} blast (p. 29)|
| 30 | {Element} bolt (p. 29) |
| 31 | {Element} breath (p. 29) |
| 32 | {Element} control (p. 29) |
| 33 | {Element} ray (p. 29) |
| 34 | {Element} wall (p. 29) |
| 35 | Entangle	|
| 36 | Entomb	|
| 37 | Explode	|
| 38 | Fear aura	|
| 39 | Fire aura	|
| 40 | Fire bolt	|
| 41 | Fire breath	|
| 42 | Fire control	|
| 43 | Fire starting	|
| 44 | Fire wall	|
| 45 | Fog breath	|
| 46 | Force wall	|
| 47 | Friendship aura	|
| 48 | Gravity control	|
| 49 | Grow plants	|
| 50 | Hate aura	|
| 51 | Healing aura |
| 52 | Hypnotism |
| 53 | Ice aura |
| 54 | Ice bolt |
| 55 | Ice breath |
| 56 | Ice wall |
| 57 | Immovability |
| 58 | Insect control |
| 59 | Iron wall |
| 60 | Laser eyes |
| 61 | Levitation |
| 62 | Lightning bolt |
| 63 | Lightning breath |
| 64 | Love aura |
| 65 | Magnetism |
| 66 | Memory control |
| 67 | Mimic sounds |
| 68 | Mind control |
| 69 | Mold flesh |
| 70 | Mold metal |
| 71 | Mold stone |
| 72 | Paralyze |
| 73 | Paranoia aura |
| 74 | Petrify |
| 75 | Plane shift |
| 76 | Plant control |
| 77 | Poison aura |
| 78 | Poison breath |
| 79 | {Potion} (p. 35) |
| 80 | Rage aura |
| 81 | Raise dead |
| 82 | Remove curse |
| 83 | Repulse |
| 84 | Rot |
| 85 | Shockwave |
| 86 | Silence |
| 87 | Sleep aura |
| 88 | Slow enemies |
| 89 | {Spell} |
| 90 | Spirit control |
| 91 | Stone wall |
| 92 | Summon |
| 93 | Swallow whole |
| 94 | Swap minds |
| 95 | Teleport |
| 96 | Time control |
| 97 | {TravelShift} (p. 9) |
| 98 | Undead control |
| 99 | Wind control |
| 00 | Wind wall |
{{< /rpg_table >}}

{{< rpg_table name="Scent" >}}
| d100 | Scent |
| --- | --------|
|1| Acid	|
|2| Alcohol	|
|3| Almond	|
|4| Ammonia	|
|5| {Animal} (p. 64)	|
|6| Baby	|
|7| Balsamic	|
|8| Banana	|
|9| Barnyard	|
|10| Bitter	|
|11| Blood	|
|12| Bread dough	|
|13| Brine	|
|14| Burnt hair	|
|15| Burnt plastic	|
|16| Burnt rubber	|
|17| Burnt sugar	|
|18| Burnt toast	|
|19| Caramel	|
|20| Cedarwood	|
|21| Cherry	|
|22| Chlorine	|
|23| Chocolate	|
|24| Cigarette ash	|
|25| Coffee	|
|26| Cologne	|
|27| Cookies	|
|28| Coppery	|
|29| Cut grass	|
|30| Damp	|
|31| Dog breath	|
|32| Dumpster	|
|33| Earth	|
|34| {Element} (p. 29)	|
|35| Exhaust	|
|36| Fish	|
|37| {Food} (p. 49)	|
|38| Formaldehyde	|
|39| Garlic	|
|40| Gasoline	|
|41| Ginger	|
|42| Gunpowder	|
|43| Hamster cage	|
|44| Hay	|
|45| Herbal	|
|46| Honey	|
|47| Hops	|
|48| Incense	|
|49| Leather	|
|50| Lemon	|
|51| Licorice|
|52| Lysol|
|53| Manure|
|54| Medicinal|
|55| Mildew|
|56| Mint|
|57| Mold|
|58| Musk|
|59| Nutmeg|
|60| Old books|
|61| Old socks|
|62| Olive oil|
|63| Onion|
|64| Orange|
|65| Ozone|
|66| Paint|
|67| Peanut butter|
|68| Peat moss|
|69| Pine|
|70| Pineapple|
|71| Popcorn|
|72| Rain|
|73| Resinous|
|74| Rose|
|75| Rotten eggs|
|76| Rotten meat|
|77| Rotting fruit|
|78| Seaweed|
|79| Sewer|
|80| Skunk|
|81| Sour milk|
|82| Spicy|
|83| Spruce|
|84| Stagnant|
|85| Stale beer|
|86| Stinky cheese|
|87| Sulfur|
|88| Sweat|
|89| {Taste} (p. 36)|
|90| Tea|
|91| Thyme|
|92| Tobacco|
|93| Turpentine|
|94| Vanilla|
|95| Vinegar|
|96| Violets|
|97| Vomit|
|98| Wet cardboard|
|99| Wet dog|
|00| Wood smoke|
{{< /rpg_table >}}

{{< rpg_table name="Sound" >}}
| d100 | Sound |
| --- | --------|
|1| {Activity} (p. 19)	|
|2| {Animal} (p. 64)	|
|3| Banging	|
|4| Barking	|
|5| Bashing	|
|6| Beeping	|
|7| Bellowing	|
|8| Bleating	|
|9| Breathing	|
|10| Buzzing	|
|11| Cackling	|
|12| Cawing	|
|13| Chanting	|
|14| Chewing	|
|15| Chiming	|
|16| Chirping	|
|17| Chittering	|
|18| Choking	|
|19| Chomping	|
|20| Clacking	|
|21| Clanging	|
|22| Clattering	|
|23| Clicking	|
|24| Clinking	|
|25| Cracking	|
|26| Crackling	|
|27| Crawling	|
|28| Creaking	|
|29| Croaking	|
|30| Crunching	|
|31| Dripping	|
|32| Fizzing	|
|33| Flapping	|
|34| Fluttering	|
|35| Galloping	|
|36| Gnashing	|
|37| Gnawing	|
|38| Grating	|
|39| Grinding	|
|40| Groaning	|
|41| Growling	|
|42| Grunting	|
|43| Gulping	|
|44| Gurgling	|
|45| Hissing	|
|46| Hooting	|
|47| Howling	|
|48| Humming	|
|49| Jangling	|
|50| Keening |
|51| Licking|
|52| {Mannerism} (p. 59)|
|53| Moaning|
|54| Muttering|
|55| Pattering|
|56| Popping|
|57| Pounding|
|58| Puffing|
|59| Purring|
|60| Rattling|
|61| Ripping|
|62| Roaring|
|63| Rumbling|
|64| Rustling|
|65| Scrabbling|
|66| Scraping|
|67| Scratching|
|68| Screeching|
|69| Shrieking|
|70| Shuffling|
|71| Singing|
|72| Sizzling|
|73| Skittering|
|74| Slapping|
|75| Slithering|
|76| Slurping|
|77| Smacking|
|78| Snapping|
|79| Snarling|
|80| Sniffing|
|81| Snorting|
|82| Spitting|
|83| Splashing|
|84| Squawking|
|85| Squeaking|
|86| Squelching|
|87| Stomping|
|88| Swooshing|
|89| Thudding|
|90| Thumping|
|91| Ticking|
|92| Trotting|
|93| Wailing|
|94| Wheezing|
|95| Whimpering|
|96| Whining|
|97| Whipping|
|98| Whirring|
|99| Whistling|
|00| Yelping|
{{< /rpg_table >}}

{{< rpg_table name="Tactic" >}}
| d100 | Tactic |
| --- | --------|
|1| Ambush	|
|2| Annoy	|
|3| Bind	|
|4| Blind	|
|5| Body slam	|
|6| Break armor	|
|7| Break terrain	|
|8| Break weapons	|
|9| Bulldoze	|
|10| Burrow	|
|11| Burst	|
|12| Cannibalize	|
|13| Capture	|
|14| Challenge	|
|15| Chant	|
|16| Charge	|
|17| Cheat	|
|18| Choke	|
|19| Climb	|
|20| Confuse	|
|21| Create barrier	|
|22| Cripple	|
|23| Deafen	|
|24| Deceive	|
|25| Demand worship |
|26| Disarm	|
|27| Disorient	|
|28| Distract	|
|29| Divide foes	|
|30| Dodge	|
|31| Drop down	|
|32| {Effect} (p. 28)	|
|33| Encircle	|
|34| Entangle	|
|35| Evade	|
|36| Feint	|
|37| Flank	|
|38| Follow	|
|39| Frighten	|
|40| Gang up	|
|41| Go berserk	|
|42| Goad	|
|43| Grab	|
|44| Harry	|
|45| Ignite	|
|46| Immobilize	|
|47| Leap	|
|48| Link up	|
|49| Lure in	|
|50| Manipulate |
|51| Merge|
|52| Mire|
|53| Monologue|
|54| Negotiate|
|55| Obscure|
|56| Order minion|
|57| Pincer maneuver|
|58| Play dead|
|59| Poison|
|60| Power up|
|61| Praise self|
|62| Protect leader|
|63| Protect self|
|64| Pull|
|65| Push|
|66| Roll|
|67| Scatter foes|
|68| Scream|
|69| Shake|
|70| Sicken|
|71| Slam object|
|72| Spin|
|73| Split body|
|74| Squeeze|
|75| Stalk|
|76| Stare down|
|77| Steal|
|78| Strategic retreat|
|79| Stun|
|80| Summon aid|
|81| Swallow whole|
|82| Swarm|
|83| Sweep|
|84| Swing creature|
|85| Swing object|
|86| Target insolent|
|87| Target leader|
|88| Target nearest|
|89| Target richest|
|90| Target strongest|
|91| Target weakest|
|92| Throw creature|
|93| Throw object|
|94| Thrust|
|95| Toy with|
|96| Trap|
|97| {TrapEffect} (p. 16)|
|98| Trip|
|99| Undermine|
|00| Vomit|
{{< /rpg_table >}}

{{< rpg_table name="Weakness" >}}
| d100 | Weakness |
| --- | --------|
|1| Acid	|
|2| Alcohol	|
|3| {Animal} (p. 64)	|
|4| Anti-magic	|
|5| Arms	|
|6| Arrows	|
|7| Birds	|
|8| Blessings	|
|9| Blood	|
|10| Blunt damage	|
|11| Chest	|
|12| Children	|
|13| Church bells	|
|14| Cold	|
|15| {Color} (p. 37)	|
|16| Competition	|
|17| Conversation	|
|18| Cutting damage  |
|19| Darkness	|
|20| Dirt	|
|21| Disease	|
|22| {Domain} (p. 33)	|
|23| Ears	|
|24| {Element} (p. 29)	|
|25| Eyes	|
|26| Feet	|
|27| Fingers	|
|28| Fire	|
|29| Firelight	|
|30| Fish	|
|31| Flattery	|
|32| Flowers	|
|33| {Food} (p. 49)	|
|34| Garlic	|
|35| Gifts	|
|36| Gold	|
|37| Hands	|
|38| {Hazard} (p. 17)	|
|39| Heart	|
|40| Heat	|
|41| Holy image	|
|42| Holy oil	|
|43| Holy water	|
|44| Ice	|
|45| {Ingredient} (p. 37)	|
|46| Insects	|
|47| Insults	|
|48| Iron	|
|49| Legs	|
|50| Lightning	|
|51| {Location} (p. 10)|
|52| Machines|
|53| {MagicSchool} (p. 31)|
|54| {Material} (p. 42)|
|55| Mirrors|
|56| {MiscItem} (p. 39)|
|57| Mistletoe|
|58| Moonlight|
|59| Mouth|
|60| Music|
|61| Neck|
|62| Noise|
|63| Nose|
|64| Oil|
|65| Phylactery|
|66| Piercing damage|
|67| Poison|
|68| {Profession} (p. 57)|
|69| Psychic damage|
|70| Puzzles|
|71| Rain|
|72| Relic|
|73| Riddles|
|74| Rituals|
|75| Running water|
|76| Salt|
|77| {Scent} (p. 66)|
|78| Seawater|
|79| Silver|
|80| Singing|
|81| Skin|
|82| Soap|
|83| {Sound} (p. 66)|
|84| {Spell} (pp. 22-25)|
|85| Spicy food|
|86| Spine|
|87| Starlight|
|88| Sunlight|
|89| {Symbol} (p. 33)|
|90| {Tactic} (p. 67)|
|91| Tears|
|92| Thunder|
|93| {Tool} (p. 39)|
|94| {TravelShift} (p. 9)|
|95| {Treasure} (p. 42)|
|96| True name|
|97| Water|
|98| {Weapon} (p. 43)|
|99| Wolfsbane|
|00| Wormwood
{{< /rpg_table >}}

# Developer Notes

## Feedback?

Check out my [about page](/about/#contact-info) if you'd like to get in touch.

## Why?

The tables in the Knave 2e rulebook are so great that being able to roll on them with a single click would be a godsend for speeding up prep and allowing for creating Chaos Spell books during play almost instantly instead of rolling on 4+ tables by hand.

Also, the tables in the Knave 2e rulebook are recursive, meaning that certain entries refer to other tables. The Knave 2e rules encourage you to just pick another entry if this recursion happens more than once (tables within tables within tables), but I thought it would be fun to fully automate the rolling process and allow for these crazy recursive rolls to happen.

Also, the Knave 2e rulebook encourages you to roll on many different tables to create single things like Generating New Spells requiring at least 3 rolls to generate, or generating relics requiring 5+ rolls. This combined with my desire to add my own tables encouraged me to implement "composite" rolls which roll on a bunch of different tables to generate more complex things like NPCs, Relics, Factions, etc. 

## How does this page work?

Basically, press a button to generate the specified thing (See the [spell book, relic and patron buttons](#spells-and-relics) or the [NPC button](#npcs) if you're unsure of where to start).

The ordering of the Knave 2e tables follows their ordering in the rulebook. The organisation of my composite tables is based on my own preference but generally I've tried to organize the buttons into sensible categories to help me find the ones I need during play, prep or both.

If you're curious to know exactly where the rolled results (recursive ones included) are coming from. The [following button](#debug-button) can be used to toggle between showing/hiding that information for new rolls.

## Features I'd like to add

- A roll history
- Add a button to show the underlying table data for each of the buttons (Temporarily you can open the console in your browser of choice, F12 on Firefox, then check the `gen_data` which contains all the data for all the tables)
- Add tables for generating more kinds of names, place names, monster names, patron/god names, faction names.

# Credits

"Knave 2e" (https://questingblog.com/knave/) by Ben Milton is licensed under the following license:

> Creative Commons Attribution 4.0 International License: You are free to share and adapt this material for any purpose, including commercially, as long as you give attribution.