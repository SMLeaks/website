---
slug: 14
title: Devblog 14
description: Hear that rumbling noise? Nope, the washing machine isn't on the blink again, it's an all-new, all-pulsating Scrap Mechanic Devblog - and it's coming right for you!
image: ./title.png
toc_max_heading_level: 4
authors: kacper
---

<head>
    <meta name="twitter:card" content="summary_large_image" />
</head>

![](./title.png)

**Grettings Mechanics!**

Hear that rumbling noise? Nope, the washing machine isn't on the blink again, it's an all-new, all-pulsating Scrap Mechanic Dev Blog - and it's coming right for you!
<!--truncate-->
First - putting this runaway train in to park for a moment - we'd like to commend the astonishing Mechanic community for what you've been up to with the recently-released World and Tile Editors. In such a short amount of time you've shared over 2,500 tiles on Steam Workshop, and most of them are a treat to look at.
While these editing tools took a demonstrable amount of time for us to put together (initially for the purpose of building the upcoming Survival World), you've proven that the extra time we took to ensure they were accessible for normal players was definitely worth it.
Oh, and before you ask: Survival Mode is coming along fine. A lot of progress has been made since our last update and the Scrap Mechanic development team has grown to match its pace. We have a new technical artist as well as a level designer who are hard at work putting the Survival World together!
Right, let's flip this update into gear and deliver some more red-hot newsbits...

![](/images/imgur/wBY8ewY.png)
![](/images/imgur/gMocHh1.png)

#### Hold on to your Bots

Meet your new metal best mate, the all-new Craftbot! This mechanical critter will play a huge part in Survival Mode when it comes to crafting various parts and blocks. 
The Craftbot is the latest child of our ever-evolving crafting system, which we're determined to tweak until it's as perfect as it can possibly be. That might mean some delays due to the sheer amount of original ideas we're cramming into the bodywork, but we'd much rather experiment and fail than end up with something unremarkable in the final product.
Our crafting system will encourage building and creativity. It will make players feel like they are crafting all the parts from start to finish - No cutting corners with a basic loading bar and a simple hand gesture like some games do. As we mentioned before, the crafting must work well if the player wants to craft a single item or if it's a crafting chain between different Craftbots and refineries. 
We usually avoid showing things without final graphics since it could give the wrong impression. But we are making an exception this time to show the code at work. Here's a test with placeholder graphics in action:
![](/images/imgur/xTq6ytE.gif)
![](/images/imgur/nZXogce.gif)
This is a fully working craft chain that was built in the game. Next up we will be adding the models and animation so everything looks nice and neat. 

![](/images/imgur/y4fykix.png)
![](/images/imgur/lUr9rbu.png)
#### Refinement

Together with the Craftbot we also want to give you a first look at the refinery that can go hand in hand with the steel sidekick.
In Survival Mode, players start their adventure by cutting down trees, collecting their loggy remains and then transporting them to a Refinery. The Refinery grinds down the resource materials in to lovely, perfect blocks that can either be stared at lustfully for fans of flawless, angular artefacts or even better, used for building or crafting other items to assist your fight for Survival.
The Refinery is pretty much done and just needs animation and some extra polish. 

![](/images/imgur/j3ULhxs.png)
![](/images/imgur/RiQfplX.png)
![](/images/imgur/jpC02Sw.gif)
#### No Small Fry

In an earlier post we said we were pretty much done with the Spudgun, but then (ahem) suddenly, we changed our minds...
We've been thinking a lot about the Spud Gun and its place within Scrap Mechanic. Initially, our design was similar to what most shooters do with hitscan, however we've now decided to take it back to the garage for tweaking. We want to come up with something better, more creative and fun for players and modders alike. Something as fun to use as 'Spudgun' sounds.
The result is our own new projectile system that isn't physics based, but within which projectiles can affect physics, and at the same time making sure spudding things over a network is as fair as spudding things over a network should be.
The great news is that the new system can be adjusted to different types of gun barrel attachments like shotgun and sniper and behave differently. Since you shoot rather large potatoes in Scrap Mechanic Survival Mode, we want players to see the traveling potato and also make sure that it behaves like one (we've spent a lot of time studying potatoes).
For example, if a Mechanic shoots straight up in the air, we want the potato to fall back down. We've also created conditions so that if the player shoots a moving object, it will give it a solid push. Both these features open a lot of interesting creative combat tactics. We even looked in to having the traveling potato trigger sensors. 
So, we hope you agree with our decision on reworking the shooting to something more solid and interesting even though these decision delays things a bit more.
Now that the Spudgun mechanics are mostly done except some minor tweaks, we've started working on the aim system and camera. Also, as you might have noticed, we have a new run animation that works with the Spudgun. 
On the same note, check out our new French Fries shotgun barrel, complete with deep frier! That's not a joke. Let us know if we're going too crazy with these things...

![](/images/imgur/wlSK92d.png)

![](/images/imgur/6j8rXvJ.png)
![](/images/imgur/G69uGnA.gif)
#### Farmbot AI

Thanks to the huge amount of gameplay possibilities available to players, developing AI for a game like ours requires programmers with very large brains - and even bigger schedules. And their first task in creating Farmbots with enough environmental nous to chase Mechanics through their creations.
The new AI is fully working now with an attack in place. Here's a look at one of our tests where we use the mechanic model. But they will be replaced with farmbots once the new animations are added. It works surprisingly well. But there are still times where they get stuck in a corner or in a loop.
Oh, and while we're on the subject of Farmbots, we have given them a needed graphical upgrade to fit the new visuals better.

![](/images/imgur/peuzqG7.png)

#### Terraining Day is Here

It's never too late in the day to discuss terrain assets. Which is useful, because you're about to see a jumbo-wheelbarrow-load of 'em come your way.
Following on from modder support for adding custom blocks and parts, there are now a gazillion amazing parts available to download, all made by the Scrap Mechanic community. 
Since we added world building to Scrap Mechanic we also wanted to support mods that added terrain assets to the tile editor. And guess what? We're delighted to say that this will soon be possible via the next update.
We are guessing that the Scrap Mechanic world will never look the same again once modders start adding trees, train tracks and all manner of gubbins...

#### Network Work

There's a little known secret about Scrap Mechanic multiplayer (whisper it quietly): sometimes it can be a little bit wonky for players who are not hosting the game. Luckily, we attend to smash this issue with a well-placed hammer blow.
We are currently working on improvements to game networking and we're looking forward to releasing this fix in advance of Survival Mode. That means a much smoother multiplayer experience without random teleportation or other such nastiness. Huzzah!

![](/images/imgur/W1Uuwo0.png)
#### Wardrobe Upgrade

Pretty new outfits sir? Premium stock? Right this way...
Over a long period we've been secretly tailoring a fashion show-worth of new outfits and customization options for Survival Mode. Finally, we feel like we have enough to give the community a myriad of ways to dress and personalize their mechanic. 
Our awesome art team spent a lot of time texturing and polishing this last month to make the new updated wardrobe ready for implementation. We hope you agree these customization options really turned out amazing. Some will be more rare than others!
In addition, we picked up on redesigning the main menu for Survival to make it more fun and better looking, with extra room for character customization. We'll unclassify some images as soon as we leave the wireframe stage.
... Oh, go on then.  We can't do a devblog without showing at least one of our latest outfits, can we?
This is the Painter outfit. 

#### SURVIVAL MODE. WHEN.

We hear you. And we're still working hard - promise!
We can't stress enough that working on Survival is basically like working on Scrap Mechanic 2, a brand new game. Committing to a final release date is something very hard for us to do right now, since we're determined to finetune and tweak everything to perfection, in addition to adding new options and features.
This is the way we want to work on Scrap Mechanic since it's the direction that will guarantee a better Survival Mode for players in the end. We're fully aware of Early Access games that rush features out and end up disappointing their players or stop updating, but rest assured, that is not going to be the case with Scrap Mechanic! 
We are not going anywhere. But we are making a very technically complex game with physics and multiplayer and a lot of complicated functions in our own engine. We must make sure that everything is fun and working well. It's also tricky to share our progress on the world sometimes without spoiling to much since there is a lot of exploration in survival. 
We hope this explains our philosophy on development. We have an awesome team that is making amazing progress every day, working hard to create a unique gaming experience that you will hopefully love for many years to come.

Thanks for your support - and for playing! 
We will be back soon! 