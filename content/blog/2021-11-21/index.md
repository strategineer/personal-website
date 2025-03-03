---
title: "montager: a script to generate Hunt Showdown montages"
date: 2021-11-21
blog/tags:
  - ramble
---

I want to write some python python code that'll take a folder containing Hunt Showdown video highlights generated through Nvidia Highlights (most of which are exactly 25s long) and automatically generate a "montage" video containing all the highlights combined.

```
montager /my_hunt_highlights/
```

I would like the code to analyze each video, and using one of several different algorithms, and detect which parts of the video are interesting and clip those parts out before combining all the clips together.

```
montager /my_hunt_highlights/ --strategy time-based
```

I would start by implementing a simple time-based strategy that assumes that a kill happens at around 22s (TBD) into each video and clips the video X seconds before and Y seconds after that.

```
montager /my_hunt_highlights/ --strategy time-based --pre-event-length-in-ms 2000 --post-event-duration-in-ms 500
```

Once that works, we'll test it out on all of the highlights I've got and share the results.

If the generated montage is "good enough", I might leave it at that.

Further work:

- Implement more intelligent algorithms for detecting the importants parts of each video
  - Detecting when death sounds can be heard (the sound that hunters make when they die)
  - Detecting the "slicing" sound you hear when you land a headshot.
  - Detecting when the player shoots their weapon
  - Detecting when people on voice chat are speaking

A cool extension to this, would be to allow for the creation of a "musical" montage in which each shot fired by the player lands on a beat of the given song.

...

TBD
