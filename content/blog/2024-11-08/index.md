---
title: "Recent Doom Wad Roundup 1"
date: 2024-11-08
blog/tags:
  - gaming
draft: true
---

Have you been playing Doom II recently?

Probably not, but I have.

Why have I been playing a ~31 year old game in 2024?

Well, it's simple really. It's fun. Other people think so too and that's why in the many decades since the release of Doom in 1993, a community of mappers has developed and have been hard at work using the framework of Doom and, especially its sequel Doom II, to create more, and better, Doom than you'd be able to get through in a lifetime.

Doom holds a special place in my heart being the first video game I ever played. So yes, I'm biased but removing as much nostalgia from the equation as I can, I feel comfortable saying that the core Doom II gameplay loop holds up in 2024 and many great when you play if you're like me and are also interested in  the ecosystem  when you consider that  combined with the improvements in map design each mapper building on what came before and evolving it make for an experience in 2024 that feels really.

If you want to join in on the fun, do this:
- [Download the doom II wad from archive.org](https://archive.org/download/doom_wad_files/Doom%202/).
- [Download some maps, a good place to start is the annual Cacoawards](https://www.doomworld.com/cacowards/).
- [Download dsda-doom, a modern source port of Doom](https://github.com/kraflab/dsda-doom).
- [Combine everything in Doomrunner](https://github.com/Youda008/DoomRunner).

# why play doom in 2024

- healthy map maker community means you'll have new maps to play forever
- rewind
- auto-generated minimap showing locked doors if you get lost
- gameplay holds up and you can play it at 5000 FPS

# doom mapping retrospective

## speed001

- simple, short, shit, looks bad
- as simple as you can get, at least you can finish it

## speed002

- looks way better than speed001, there's a much better sense of place.
- Mixed monster spawns leads to immediate infighting which ruins the combat feel
- not enough health packs and weapons not given quickly enough or at all
- no ssg yikes
- not enough ammo for full clear and no berserk pack

## castle_of_doom

- I always want to have an ssg right away, playing without it is pain.
  - How do mappers make it feel less shit playing without the SSG? No tanky enemies until you get it?
- first community project, speedmap
- yellow skull, nothing changes when I pick it up but monsters should have been revealed while backtracking to the middle. Make things less boring
- super slowly descending "secret" platforms are so painful. 10 secrets per map was a requirement of the CP but these secrets are really shit
- better but not great
- we'll be revisiting this spoke design in ourobouros

## tomb_of_doom

- funnest map, last section sucks isn't great
- some rooms are a little gimmick
- overall this map was playtested with DSDA keyframe warping, so this won't be as a fun for people who don't play that way
  - when playtesting my maps I shouldn't be doing that...
- a little too simple to navigate through but really clear routing
- pathing is a little tight at times, every room could have benefited from being at least 25% bigger.
- cool map theming (gameplay + textures)

## jungle_fever

- sick initial visual set piece, I should get back into this one and rethink the rest of the map that might not be up to snuff
- great first doomcute first room (office entrance with secretary)
- I have a weird fixation for putting weapons on gigantic pedestals, yes it makes them more visible for the player but it looks a little weird. I can continue to do this but a little subtlety will go a long way.
- archvile without anything to hide behind...
- not enough ammo
- big gigantic fuck off room is salvageable, needs more ammo spread around, I need more monsters to teleport in as I hit buttons, what the buttons do should be made more clear.
- incomplete

## ourobouros

- cool-ish initial set piece
- using ammo "breadcrumbs" to hint at the reward that the player will get by going through each section
- more teleporting enemies after clicking the buttons
- I have a ton of shotgun ammo but no rocket ammo, rocket is fun, more rocket more good
  - you can kill yourself by mistake with the shotgun / SSG making them more boring?
- I can really feel the speedmapping in this one, each room could have used more room to breathe and more detail and everything

## anox

- starting out in the vents... Muah, chef's kiss.
- first use of pink lava
- visually a real levellup compared to all the other maps
- red key platform room having openings everywhere is great because if the player leaves any demons alive, they'll continue shoot at him from that room
- way better ammo/weapon setups
- good monster types / combos / placement
- outside room feels unfinished, there should be enemies waiting to party as soon as the player exits from one of the two red doors (does having two doors here make sense? just one would allow me to build a more unique "personalized" encounter)
- BUT really cool cacodemons showing up from the water and revenants behind you, homogeneous monster groups means less infighting which is good!
- Although, once again every room in this map could have been 25% bigger at least and it would have felt better. More obstacles within each room could be used to cut up the space a bit but still allow for more freeform movement
- slaughter-lite room, works way better than the big room in jungle_fever
- end "scene" is unfinished and feels deflating

## auto

- pink liquid shows up again!
- cool ritual sacrifice scene of fellow doomguy, callback to tomb_of_doom...
- very wip sadly
- caged imps show up again (tomb_of_doom, ourobouros)
- combined concepts from this unfinished map with jungle_fever would be Chef's kiss 

## thereturn

- latest map, most wip map so far. No items, just some basic layout
- the Rosy256 palette has potential... makes the pink liquid textures really pop.
- cool looking pink liquid factory/hydro dam... (callback to jungle_fever...)

# My ideal doom mapping process

Looking through these maps I've made, especially failing to get any progress with my most recent map, I've come up with a work-in-progress process for making maps that I'm going to try and follow until I come up with something better.

- Before sitting down at the computer to start mapping, I should come up with the following things:
  - Draw a layout for the entire map by hand on paper or whiteboard.
  - The map's theme/premise and a .wad with all the textures I'll be using I'll be using.
  - Copy over an existing project directory with doommake scripts ready to go
- Set a time limit for the entire mapping process once I've sat down and opened up Ultimate Doom Builder, by the end of the timer I'll need to have a fully playable and fun map to play, if a little basic, so the following steps keep that in mind:
- Add a spawn point and create an exit switch to ensure that the map is always completeable.
- Create the basic layout of the map in UDB using hand drawn layout from earlier as a guideline (no switches, no doors, no detailing)
- Working mostly on one section of the map at a time:
  - Nail down the scale of the map and make the movement of the player through it fun, leaving space for monsters and other Things to be placed in the next step
  - Instrument the map with linedef actions as needed to block/open up progression, open monster closets and teleport monsters in
  - Add all the Things to the map: monsters, weapons, ammo, healthkits, keys/skulls
  - Make it fun!
- When the timer run out, you're done (for now). Move the exit you've built previously into an appropriate location that's reachable by a player spawning from the spawn point of the map. You've got a map!
- If what you've built of the map so far is fun to play and has potential, then you can go to the next step, otherwise you're done, take some screenshots of the map and record yourself playing through it, while commenting on what works and what doesn't work.
  - [OPTIONAL] You can repeat this process from the first step, but this time look at the map as it is, and figure out what you'd like to add/change in it to make it better than it is now. If you weren't able to finish up rooms that you drew in your initial layout, you can build those out 
  - [OPTIONAL] You can continue working on a map forever, so deciding to call a ap
  - [OPTIONAL] If your map is ready to share (up to your discretion), share your map wherever you can!
    - Share some enticing screenshots (if you can't come up with any, that might be a problem to solve with your next map).
    - Describe the premise of the map and make it interesting if you can, but don't oversell it, be honest.
    - Set expectations for the sorts of feedback you're willing/hoping to get.
      - Describing parts of the map that you're particularily curious about might help. 
    - Worst case: you share your map with the world and nothing happens. If the stars align, someone will take the time to play through your map and give you feedback.