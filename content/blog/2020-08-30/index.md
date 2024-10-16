---
title: "A Gamer's Guide to: Cheating in Single-Player Games"
date: 2020-08-30
blog/tags:
  - gaming
  - tech
---

Welcome to my second "A Gamer's Guide to" blog post (check out my [previous one on online multiplayer video games](/blog/2020-08-22/)). I'll be explaining how you can cheat in single-player games on PC. If you're feeling like a rebel then take a seat and prepare to bask in the glow of infinite health, infinite currency and infinity itself.

Feel free to use the techniques that I describe below at your own risk, I don't advise cheating in any game that is a live service, is online in any way, has leaderboards or has micro-transactions.

You're very unlikely to succeed in your #cheatinggoals using the techniques discussed here in these cases and you might get into trouble by trying it.

Today, we'll be looking at the most basic kind of cheating: using a memory scanner to scan for numbers being used in a game; allowing us to manipulate them at will. I'll start by explaining the basics of how this works, then go into more detail about how you can cheat and, finally, I'll discuss an example of a game, Trials Rising, where cheaters using similar techniques to the one shown below ruined the experience for everyone.

# Basics

You may know that computers only understand two things: zero and one. Everything that a computer does at some level is zeros and ones. In my previous blog post, we looked at how we could transfer zeros and ones between computers to design an online multiplayer video game experience.

We'll be looking at how we can manipulate zeros and ones on your own computer to cheat in a single-player video game.

Zeros and ones are the fuel that make computer programs, including video games, "go". These zeros and ones have to physically exist somewhere on the computer. They are stored in one of two places, in volatile storage or in non-volatile storage.

The difference between the two is that turning off the power wipes your computer's volatile storage clean but not your non-volatile storage. A form of volatile storage that you might have heard of is RAM, or random-access memory. As for non-volatile storage, you've probably heard the terms hard disk drive (HDD) or solid state drive (SSD), if you haven't, well, now you have!

Programs, photos, videos, everything really, exist on your non-volatile storage. When you decide to play a game, a portion of it will be loaded into volatile storage because accessing data from there is much quicker than doing so from non-volatile storage.

Video games are considered to be "real-time applications" because you, as a big G Gamer, expect the video games you play to react to your actions instantly. And so, all the data that a video game requires to function like images, 3D models and, most importantly for us, gameplay numbers (health, money, lives, character position, score, etc.) can usually be found in RAM.

Loading screens, which may soon disappear due to SSDs being adopted in consoles, disguise the game's loading of data from non-volatile storage into RAM. Open world games tend to be so large that there's no reason to load the 3D models and images (textures) for areas that are far from the player character into RAM, so these are loaded dynamically during the course of play depending on where the player decides to go.

So, if all the data that makes a video game, a video game exists in our computer's RAM then if we can find the locations of these numbers in RAM, we can modify them at will. This is the most basic way of cheating in a single-player video game and I'll show you how to do it yourself, next.

# Memory Scanning with Cheat Engine

> Before you do anything, one short PSA from me to you is that you should never run an executable file from a source that you do not trust. An executable file that you run can do ANYTHING it wants on your computer.

Cheat Engine is a program which allows you to analyze the memory associated to the programs that you are running on your computer, including your video games. It allows you to find the locations in RAM where game variables are located which then gives you control over them.

> Be careful when installing Cheat Engine, read every page of the installer carefully, if you're not careful you'll install some adware and spyware alongside it.

Next, I'll cover the most basic use of Cheat Engine to give you a taste of what it can do. Keep in mind, that Cheat Engine includes a great tutorial which I highly recommend if you want to dig a little deeper.

The simplest way of using Cheat Engine is by choosing an "easy" to manipulate variable in your game. Money or skill points are usually a good choice because these tend to be easy to change within the game. Also, the actual numerical value, say 5, tied to these variables is usually visible to you which isn't required but it is helpful.

Follow these steps to cheat:

- Launch your game.
- Launch Cheat Engine, you'll be presented with list of processes (programs) running on your computer, then select the game.
- Choose your variable! Health, money, skill points, etc.
- Enter the current value of the variable into the _Value_ field and ensure that the _Scan Type_ dropdown is set to _Exact Value_ then hit the _First Scan_ button. If you don't know the current value of the variable, for example for a health bar without a number displayed, then make sure that the _Scan Type_ dropdown is set to _Unknown Initial Value_ and finally hit the _First Scan_ button without specifying a value.
- A list of locations in memory should appear in the box to the left. These are all the possible locations in RAM where the variable you're searching for might be found.
- You need to narrow the list down to one entry to single out the location in RAM tied to the variable you want to manipulate. You must now change the variable's value within the game itself. For example, buying or selling something if we're trying to find the location of the game's money variable.
  - If you can see the new value of the number, you can type it into the _Value_ field, make sure to set the _Scan Type_ dropdown menu to _Exact Value_, then hit the _Next Scan_ button. This will filter out all memory locations from our previous search which aren't currently equal to the newly specified value.
  - Otherwise, make sure to set the _Scan Type_ dropdown menu to _Increased value by..._ or _Decreased value by..._ as appropriate then hit the _Next Scan_ button. This will filter out all memory locations which haven't changed in the way you've specified.
- You might have to repeat this a few times, but, eventually, you should be able to narrow the list down to one location. You can confirm that this is the correct location in memory by looking at the number as you change it in-game to make sure that the values match up.
- You can now click on the memory location in the list to change its value. Infinite money here we come!

There you go! You're a cheater now. Loud and proud. You can do a lot more with Cheat Engine such as automating the search for specific variables (the specific locations will likely change every time you launch the game), creating cheat "tables" to share with others, and more!

# Ubisoft Strikes Again

Video game development is hard. So, game developers usually don't spend any of their valuable time on preventing players from cheating using memory scanning techniques in purely single-player games.

However, you might encounter a game that employs some form of obfuscation or anti-cheat solution especially if you're being naughty and trying to cheat in a game with leaderboards. This will make it a lot harder for you to cheat, maybe impossible but probably not.

If you've ever wondered why leaderboards in most games are always filled with cheaters, it's because no matter what game developers try to do it's difficult to stop people from cheating in most games.

An indie game with leaderboards is probably going to be filled with cheaters because it's likely that the game developers don't have the resources to create a bulletproof implementation that prevents cheaters from cheating. AAA games with leaderboards are also probably going to be filled with cheaters because if there's a will then there's usually a way.

An example of how cheaters can ruin the experience for other players is Trials Rising by our friends at Ubisoft. Trials is a time trials side scrolling motorbike racing game series which I've loved for over a decade. When Ubisoft released the latest entry in the series last year, I was cautiously optimistic (if you're interested you can [watch or read my review of the game here](/reviews/2019-03-13/)).

They mostly did a great job but they really messed up one, important, thing. For months after release, players were unable to improve their times on certain tracks. This is a critical issue because a lot of players enjoy fighting for their spot on top of the leaderboard.

In these tracks, you were pitted against the ghosts of other players. OK? If you weren't able to beat a certain number of these other players then you wouldn't be able to post your improved time to the leaderboard.

Seems reasonable right?

Well, unfortunately, the top of the leaderboard for these tracks was filled with cheaters and, only God knows why, the game would always make you race against cheaters.

So, you would start the track, and then watch in horror as most of the other players disappeared into thin air and instantly completed the race. As you can imagine, it was impossible for legitimate players like me to beat these cheaters which prevented me, and many other players, from improving our times on these tracks and also prevented us from competing on the leaderboards.

Eventually they fixed the issue, and the rest of the game is really great. But, I can't stop myself from taking a short detour to laugh at Ubisoft.

# Conclusion

We've laughed, we've cried, we've hoped, we've dreamed and, most importantly, we've cheated. You now have the tools to cheat in single-player games on your computer. I hope that this post was interesting and instructive. If you have any comments, feedback or thoughts on topics that you would like me to cover next, please [let me know](mailto:me@strategineer.com)!
