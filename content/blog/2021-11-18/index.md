---
title: Embeds, embeds, embeds
date: 2021-11-18
blog/tags:
  - ramble
---

I wrote some code to help me embed audio files into my blog posts easily...

{{< audio "/bin/music/TheThird.wav" >}} _Here's a song I produced about 5 years ago. It's a decent "bop"?_

I wrote some more code to help me embed video files into my blog posts easily...

{{< video "./Thomas_The_Robot.mp4" >}} _Here's a video of a robot character I modeled and animated myself in Java a long time ago in a university far, far away_

I wrote some more code to help me embed Youtube video into my blog posts easily...

{{< youtube dQw4w9WgXcQ >}} _Here's a classic song from Rick Astley_

I ran the following Linux command to generate a QR code that links to my [cocktail menu](/cocktails).

```sh
qrencode -o qr.png https://strategineer.com/cocktails/
```

[QR Code for my cocktail menu](/static/img/qr.png) _This'll come in handy next time I have guests over._

And on the 7th day, he rested.
