---
layout: post
title: "Configuring ChocolateyGUI for non admin use"
---

So the other day I needed to fix something on my children's laptops.
This brought to my attention that when I set them up I had given them admin.
Naturally this is not an ideal setup.
But the issue becomes: How do I grant them the ability to install software without needing to reach out to me often.
Quite simply, they need the ability to run installations as an administrator, but not the ability to just become administrator.

<!--more-->

Naturally this is something that has been solved at my day job.
To solve this type of problem there, we have Microsoft Endpoint Manager Configuration Manager.
This allows us to build silent installs of software; then publish those installs to a central location.
Configuration Manager handles the issues of users not being an admin.

For a long time I've been a huge fan of [Chocolatey](https://www.chocolatey.org).
Chocolatey comes in [multiple flavours](https://www.chocolatey.org/compare).
One of these flavours is Business which includes [Background Mode / Self-Service Installer](https://www.chocolatey.org/docs/features-agent-service).
This looks promising for my use case.

Of course before committing to this as a solution, I need to sell it to the wife.
So let's go see what the cost would be.
Heading over to the purchase page, I see that it's ~$25 CAD per unit per year.
Well, that seems almost reasonable for my household of 6 computers.
Changing the quantity to 6, I'm greeted with the message: "The minimum order quantity is 40."
Well that's unfortunate :(.
Fortunately, there is a Starter Pack :D.
Unfortunately, it's ~$885 CAD per year, not something I can sell the wife on for solving this particular problem.

However, we shall persevere!

Years ago, when we were just starting out with Adobe Creative Cloud (ACC), we discovered that it needed nearly weekly updates.
Maintaining an installation that requires that frequent of updates is just untenable.
We experimented with trying to find something like sudo, but for Windows.
Of course most "sudo" solutions for Windows don't actually understand what sudo does.
Most of the actively maintained ones seems to think that you simply want a command to elevate.
Thus they're effectively running the PowerShell code: `Start-Process -Verb RunAs`.
This does **not** solve the problem we had, nor does it solve my problem at hand.

Enter [sudowin](https://sourceforge.net/projects/sudowin/), which appears to be the only product that takes the users password and allows them to elevate.
Naturally, it hasn't been updated in quite some time and the documents supporting it are no longer accessible as it would seem SourceForge no longer hosts project websites like they used to.
To top it off, the Internet Archive's Wayback Machine doesn't have an archive of the documentation.
