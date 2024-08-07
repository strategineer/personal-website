---
title: "A Gamer's Guide to: Online Multiplayer"
date: 2020-08-22
blog/tags:
  - gaming
  - tech
---

Welcome to my first "A Gamer's Guide to…". This series of articles will cover a wide range of topics of interest to gamers from the perspective of a video game programmer.

I know a little about what goes into making a video game. I gained a wide breadth of knowledge of every part of a video game including game engines, physics, gameplay, audio, AI, C++ (shiver) and more in my studies. In 2016, I was hired by an independent game studio, Borealys Games, to work on Mages of Mystralia as one of two programmers. Mages is a Zelda-like game where you find magical runes which you can combine to create your own spells to solve puzzles and fight enemies. After shipping the game and working on a cancelled project, I went on to Framestore VR where we built high-end VR experiences for installation in amusement parks (amusement parks in 2020, LOL). I'm not working in the video game industry anymore because making games is really hard and it's not hard in a way that I enjoy. However, I'm as passionate about video games as ever. I just need to find other outlets for my love of video games, like writing about them!

Today's topic is online multiplayer games, network architectures and servers. How can you and your friends play a game together over the internet? How can a game be developed to make it harder for hackers to ruin the multiplayer experience for other players? What's the difference between a dedicated server and a non-dedicated server? When someone says "peer-to-peer" what does that mean?

I will try to answer all these questions and more. Follow me on this journey, into the magical world of online multiplayer video games.

# Basics

A server usually refers to a computer (or a program running on a computer) with a specific role. It handles requests from other computers/programs, called clients, over a network, locally or over the internet, and "serves", or responds, with data.

To understand what a server does, we need to understand what a computer does. Computers speak in zeros and ones. Anything you do on a computer is just a sequence of zeros and ones on some level. Streaming video? Zeros and ones. Drawing anime girls? Zeros and ones. Playing video games? Zeros and ones. You get the idea.

We build systems on top of these zeros and ones to make a computer solve problems for us. The problem we're trying to solve when designing an online multiplayer video game is, how can we allow multiple players to play with each other over the internet?

We need to send zeros and ones over the internet, in some way, to ensure that all the players experience a shared game world.

This is an illusion, there's not one game world but many; one for each player in the game. A big complexity of online multiplayer games is ensuring that each player's game world is as synchronized as possible with every other game world. When game worlds are desynchronized due to bad code, bad network infrastructure or hackers this hurts the online multiplayer game experience and is something that all game developers try to avoid.

In a single player FPS game, if I press the Right Trigger on my controller, my character shoots his gun. The game will react to my pressing of the button by playing visual effects, playing a sound and applying any sort of damage (visual or not) to the environment or any enemies as appropriate. Simple right?

This becomes much more complicated in a multiplayer context. When I press the Right Trigger, the same events occur because if we had to wait for a response from the server before we saw the gun smoke, heard the sound and saw the damage caused then the game would feel very sluggish.

But, behind the scenes, the information that I shot my gun needs to be sent to all the other clients so that they can also display the gunfire, play the sounds and react to the damage caused in their own game worlds. How should this data, these zeros and ones, be handled and shared to all the other clients to keep all their game worlds in sync?

There are as many specific solutions to this problem as there are online multiplayer games in existence. However, there are two broad categories of network architectures used in video games to solve this problem. I will now discuss them and their differences in a digestible way. There are exceptions to everything I will write, but after reading this article you should have a basic understanding of how the online multiplayer video games that you play, work under the hood.

I will start by explaining how a peer-to-peer architecture works, then I will cover the more common client-server architecture and explain why it's used in most video games these days.

# Peer-to-Peer Architecture

```goat
  .--------.               .--------.
 | Client 1 +-------------+ Client 2 |
  '-+---+--'               '--+---+-'
    |   |_________  __________|   |
    |             \/              |
    |    _________/\__________    |
    |   |                     |   |
  .-+---+--.               .--+---+-.
 | Client 3 +-------------+ Client 4 |
  '--------'               '--------'
```

My first online gaming experiences, namely Starcraft and Halo 2, suffered from the use of a peer-to-peer architecture. If you've ever heard a seven year old child scream at his mother like so, "unplug the router, you cunt!", then you've probably played a game with a peer-to-peer architecture.

The most common form of peer-to-peer architecture is one client, the "host", which acts as both a client and a server. It displays the game world graphically for the host player and reacts to their inputs but the client/server also communicates with all the other clients to keep their game worlds in sync.

```mermaid
graph TD;
  s(Client/Server 1)
  c2(Client 2)
  c3(Client 3)
  c4(Client 4)
  s --- c2
  s --- c3
  s --- c4
```

A peer-to-peer architecture is usually more complex to implement than a client-server architecture, but it is usually cheaper to run over the long term because the game developer doesn't need to maintain as many of their own servers. The players use their own hardware (PCs, consoles or phones) to play the game and so this approach is very scalable; more players means more servers for players to play on. However, this architecture has fallen out of favour because:

- Most AAA video games have more than two players playing with each other at once so if the host player's internet connection is unstable (or if their mother unplugs the ethernet cable out of the router) this disturbs the experience for all the other players in the game. A notable (and unfortunately recent) example of this is For Honor, a medieval melee combat game by our friends at Ubisoft. At launch, if the host of a game quit, all other players in the game would have to wait for minutes for another host to be selected before continuing to play. Inside and outside of the company, people were rolling on the floor and face palming continuously at the decision to use a peer-to-peer architecture for the game. It took them over a year to implement a client-server architecture to replace the existing peer-to-peer architecture. My rough estimate is that this must have cost hundreds of thousands if not millions of dollars to change.
- Most AAA video games are competitive in nature. Peer-to-peer architectures inherently suffer from unfairness due to the host player having several advantages over the other players. The big one being a non-existent ping (this is not a marker on the map but the time it takes for the data a client sends to the server to come back to that same client) meaning that the host player can act and react faster to anything that the other players do within the shared game world.
- It's much harder, given enough time and reverse engineering know-how it is theoretically impossible, to stop a host player from cheating given that they have complete control over the server running the game world.

Peer-to-peer architectures are not used much these days in AAA video games for these reasons, unless you're Ubisoft of course. Next, let's discuss the more popular client-server architecture.

# Client-Server Architecture

```mermaid
graph TD;
  s(Server)
  c1(Client 1)
  c2(Client 2)
  c3(Client 3)
  s --- c1
  s --- c2
  s --- c3
```

As discussed previously, we're trying to solve the problem of sending zeros and ones over the internet between computers to provide a shared multiplayer video game experience for two or more players over the internet.

A client-server architecture is built upon the principle of having one server communicate with several clients. There are many reasons why this architecture is favoured these days compared to peer-to-peer architectures as discussed above. The main one is that the game developers have full control over the server. They can provide a consistent online experience by ensuring that the servers are beefy enough and well connected enough to handle the demand of the game and by controlling the flow of data to make it harder for players to cheat. We wouldn't want players to give themselves infinite premium currency, would we?

Let's talk about the difference between a dedicated server and a non-dedicated server. A dedicated server is a server whose sole purpose is to orchestrate the synchronization of the shared game world inhabited by the clients. So, by definition in a client-server architecture you're using dedicated servers. A non-dedicated server is a server which does the same but also provides a graphical display for a "host" player to participate in the game. We discussed this kind of server in the peer-to-peer architecture section of this article.

```mermaid
graph TD;
  start("I want to make a AAA multiplayer video game!")
  ds("Dedicated Servers")
  nds("Non-Dedicated Servers")
  csa("Client-Server Architecture")
  ppa("Peer-to-Peer Architecture")


  start -- Ubisoft? --> ppa
  start -- Everyone else? --> csa

  ppa --> nds

  csa --> ds
```

Some games allow for both dedicated servers and non-dedicated servers. This requires more work but it could be worth the extra effort involved depending on the game.

Client-server architectures are the favoured solution to online multiplayer play in today's AAA video game industry. It tends to be the most expensive of all possible implementations but, as explained above, the pros outweigh the cons and make it worth the investment especially if you are a hundred million dollar company. AAA online multiplayer video games using a client-server architecture with a solid anti-cheat solution have a higher likelihood of being "fun", are likely to sell more copies of the game (increasing the probability of an active playerbase) and will inevitably lead to more sales of juicy microtransactions. It's a no brainer...

# MMORPGs?

I have little knowledge on how massively multiplayer online role playing games are built. What I can tell you is that they are the most complex online multiplayer games to implement. MMORPG developers have to painstakingly build network architectures from scratch to support the large number of players expected to populate a MMORPG world. Also, they must prevent cheating of any kind at all costs, otherwise cheaters would break the in-game progression systems and, more importantly, the in-game economy which tend to be core parts of any MMORPG.

Games like EVE Online and WoW are good examples of this. Here's an [article on Gamasutra about the network architecture in EVE Online](https://www.gamasutra.com/view/feature/132563/infinite_space_an_argument_for_.php?print=1) if you're interested in further reading on the topic of network architectures in MMORPGs.

# Conclusion

You now have the tools to understand, how the online multiplayer games you play, work behind the curtain. Alas, all good things must come to an end. I hope that this post was interesting and instructive. If you have any comments, feedback or thoughts on topics that you would like me to cover, please [let me know](mailto:me@strategineer.com)!
