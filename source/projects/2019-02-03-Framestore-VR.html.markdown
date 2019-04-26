---
title: Framestore VR
blog: projects
date: 2019-02-03
tags: C++, python, Jenkins
is_important: true
blurb: Framestore VR blurb
---
I worked at Framestore VR from December 2017 to February 2019 as a generalist programmer focusing on tools. At the time, the division of the company was focusing primarily on providing high-end VR experiences tied to some of the biggest intellectual properties that exist.

I worked on an internal Unreal Engine Plugin (C++) which allowed our team to import art assets from Shotgun into our Unreal Engine projects, turning the process from an error prone hour long process into an automated seconds long process. Eventually, the tool was transformed in such a way to allow for the art assets to be pulled from Perforce. Through automated build processes using Jenkins, it also was able to automatically generate turntables for the art assets in-engine, enabling stakeholders to review the work that was being done on the art efficiently allowing for faster iteration loops.

I also worked on improving our use of Jenkins: overhauling all the Jenkins jobs for all of our projects from old-school GUI-based jobs to Pipeline scripts jobs to remove the limits imposed on us previously, for drastically improved performance (hours to minutes), and making maintenance and bug fixing easier than before. I added continuous integration jobs to our newer projects to allow for problems in the code to be detected ASAP and minimizing the time in which projects would be broken. I also implemented a release notes feature for our projects which would generate a readable list of changes which had occured in the project tied to the nightly build, allowing for better visibility of the changes appearing in each new build of the project especially useful when changes were coming hot and heavy during milestones/releases.

I also worked on a data driven system which allowed for the automated generation of new projects and project branches in Perforce and Jenkins (an error prone week long process which became an automated and minutes long process) based on a given specification of a Perforce hierarchies of depots and streams including several strategies for branching these streams for example an engine-only branch upgrading the game engine or a full branch for working on milestones safely.

I also worked on a Python command line tool which acted as the glue connecting Perforce, Shotgun and Unreal Engine. This tool was expanded upon and used throughout my time at Framestore and was a key part of almost all my work.
