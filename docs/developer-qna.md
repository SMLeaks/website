---
title: Developer Q&A
description: We have collected and answered a lot of your Scrap Mechanic questions!
id: developer-qna
sidebar_position: 3
---

> Released 2021-6-12

![](/images/other/developer-qna-title.png)

**Hi Mechanics!**


We have collected and answered a lot of your questions!
The idea of this Q&A is to be informative and to not leave you hanging, while we are working on the next chapter.
We have focused on your most commonly asked questions, as well as a few fun ones.
Let us know if you would like us to do these Q&As from time to time in the comments below.

<br/>
<>{
            [
              {
                name: 'Story & Next Chapter',
                qna: [
                  {
                    q: 'When is the next chapter update coming?',
                    a: "The honest answer is that we don't know yet. The next chapter is a big, ambitious update with a lot of new locations. New bots to fight. New interactive parts to craft with and new game mechanics. We don't want to commit to a release date just yet. If we did, we would be forced to cut corners later on. It would also stop us from adding new ideas that would make it better if they came up. We will make sure that the update is really fun to play and that it offers a lot of hours of playtime before we release it. It could be later this year or next year. But we are working on it as fast as we can, without cutting back on quality. A rough guess would be that we are 50% done. We will keep making dev blogs to keep you updated on our progress.",
                  },
                  {
                    q: 'Will the scrapyard biome shown in some screenshots and concept art be added in a future update, or is it scrapped?',
                    a: (
                      <>
                        The scrapyard biome shown in <a href="/devblog/13">Devblog 13</a> is not really scrapped, but it is put on hold for now.
                        The reason is that we took the story in a more interesting direction and the scrapyard didn&apos;t really fit as the next location.
                        However, it might be included in a later update.
                        We still have a lot of really great ideas for the scrapyard setting.
                      </>
                    ),
                  },
                  {
                    q: 'Will the next chapter bring an "end goal"?',
                    a: 'The next chapter will, for the first time, introduce a lot more story elements to Survival. The end of chapter will definitely answer a lot of questions. So yes, there is an end goal.',
                  },
                  {
                    q: 'How many chapters are you planning on releasing and is there going to be a Scrap Mechanic 2?',
                    a: "We don't think there will be a Scrap Mechanic 2. Mainly because there is still so much we can add to Scrap Mechanic now, when it comes to chapters. As long as a lot of players are playing Scrap Mechanic, we will keep adding to it.",
                  },
                ],
              },
              {
                name: 'Upcoming Mechanics, Features & Fixes',
                qna: [
                  {
                    q: 'Why is Scrap Mechanic lagging sometimes? Are you planning on fixing the lag when 2 large creations touch?',
                    a: "We had an issue answering this question since it's pretty complex and hard to explain in depth without getting too technical. So we are glad it was brought up here, so we can try and give a longer and more in-depth response. First, it's important to say that Scrap Mechanic is a very difficult game to make. There are no limits to what you can do. At the same time, the game has physics and multiplayer as well. So it's a game that can always be improved and optimized. But since the beginning, we have been determined to grab the bull by the horns and stick to this path to create something unique and interesting. Scrap Mechanic is a game that runs on our own game engine. This is great since it gives us full control over a lot of things. But physics is running on a physics engine called Bullet Physics. Bullet Physics is an external, open-source physics engine that does all the physics calculations in Scrap Mechanic. The main issue right now is calculating the responses from constraints like the bearings and suspensions as well as from collisions. At the moment, all of these are taken into account at the same level of quality as when calculating the responses for each rigid composition of parts. This makes collision checks expensive, especially on complex creations with a lot of bearings and suspensions. When a complex creation merges with another complex creation through a collision, that’s when the lag can kick in. The way we could fix this as we move forward would be by digging into bullet physics and seeing if we could make less important physics calculations run less expensive calculations instead of having them all running on the same level as it is now. This is, however, a process that would take a lot of time to implement and would most likely slow down other content updates. Our priority now is to finish the next chapter. After that, we will most likely dig into this and see what we can do to push back the lag. The good news is that there are things we can still do to make it better! The bad news is that it will slow down development on other parts of the game. We know that many players would love us to dig into this and we hear you loud and clear.",
                  },
                  {
                    q: 'When are you going to make the size of the creative mode map the same as the Survival one?',
                    a: 'This is something that we can do. We just have to make it happen. It has not been a priority, but we have gotten a lot of requests for this so we might have to find the time.',
                  },
                  {
                    q: 'In the future, will there be a weather system? Storm, rain (maybe faster-growing crops when raining), waves on the sea, etc.',
                    a: "Yes! We actually were planning to add a new cloud system and weather with the Survival update. Unfortunately, we never got time to include it. It's very much possible that weather will be included in the next chapter since we already started doing some work on it.",
                  },
                  {
                    q: 'Will the mod support be extended to allow stuff like new tools, guns, character models, clothes, etc.?',
                    a: 'Yes, there is a lot more we want to do with the mod support. All the things you ask for are included in our wish list as well.',
                  },
                  {
                    q: 'Will we have a daylight sensor? So the lights could be turned on automatically at night.',
                    a: "We don't have any plans for a daylight sensor right now. But we have an alarm clock in the works that will let you set a time when you want it to activate a creation! It will also include different alarm sound choices.",
                  },
                  {
                    q: "Will you improve the multiplayer more? It's very poor in performance at times?",
                    a: 'Yes, absolutely. We are aware of the multiplayer issues and we are working on improvements.',
                  },
                  {
                    q: 'Do you think the suspension glitch will ever be patched, or add a different type of suspension that will not have the glitched effect? I would like to be able to make complicated suspension mechanisms without having to worry about my creation flying away.',
                    a: "Most likely not as it's an issue with the physics engine. However, we did add new steering settings to the level 5 Driver's seat with Survival, where if you press E on bearings connected to it, you can change the steering radius. Here, you can tweak and see if you can find a sweet spot where the glitch is not triggered. Maybe that could help a little.",
                  },
                  {
                    q: 'Can we get bigger wheels, please? We have diameter 3 and diameter 5, a diameter 7 wheel would be very nice too!',
                    a: 'When wheels get too large, they tend to wiggle around sometimes. However, we plan to add more wheels with different properties in general. We want to expand the wheel selection more in Scrap Mechanic.',
                  },
                  {
                    q: 'Are you guys gonna bring Scrap Mechanic to consoles?',
                    a: 'We are doing some prep work for that right now so most likely we will port it to consoles around the time that we leave early access on Steam.',
                  },
                  {
                    q: "Are we going to eventually get aerial and aquatic-specific parts? Thrusters work but they're not the best for flying smoothly.",
                    a: "We want to dedicate a future chapter for aerial and aquatic adventures. So we are saving aerodynamics and better water physics for that. That's mainly the reason why it's not in the game yet.",
                  },
                  {
                    q: 'Is it possible to drop some of the restrictions around the modding API? So that modders have more possibilities to create content ',
                    a: "The restrictions are there to ensure that things work together and for the players' safety. But there is room to open it up a bit more. We will look into it.",
                  },
                  {
                    q: 'When do you roughly plan to improve the workshop mod support? I would love to make mods that can work with survival and challenge mode without game file editing, and some improvements to creative mods as well as to include the new features introduced in survival, such as animals.',
                    a: 'Honestly. we just have to get around to including it. We also want mod makers to be able to do these things. We will try and find some time to give them some love. ',
                  },
                  {
                    q: 'Will there be Scrap Mechanic merch?',
                    a: 'We might look into merch in the future. Let us know in the comments below what kind of merch you would like to see. We’d be happy to get some of your requests in the comments below.',
                  },
                  {
                    q: 'How much progress have you made on the optimization of the game? Will there be more and more detailed physics settings?',
                    a: "Since release, we've made a ton of optimizations and still have a way to go. The introduction to the gameplay option in the last update is a start to give the player more control over the game’s performance.",
                  },
                  {
                    q: 'Will we ever be able to free Caged Farmers for real?',
                    a: 'Well, you free them by bringing them back to the Farmer hideout. They unlock the cages behind closed doors after that...or so we hope.',
                  },
                  {
                    q: 'Are you planning to fix sliding wheels? (when I have my car on any angle, it slides like butter on wheels)',
                    a: "We are not sure why wheels slide when parked on a slant. It's something we will have to investigate. We think one reason is that the wheels have pretty low friction. This is done to make driving feel nice. But it possibly comes at the cost of the vehicle sliding around too much. We will look into that further.",
                  },
                  {
                    q: (
                      <>
                        You mentioned an exosuit in
                        {' '}
                        <Link href="/devblog/12" prefetch={false}>Devblog 12</Link>
                        {' '}
                        that gave you minor perks.
                        Was that scrapped, or will it be implemented in the next chapter?
                        Also are there any ideas for when it will come out?
                        I don&apos;t need an exact date.
                      </>
                    ),
                    a: "The exosuit is still in our plans. However, it will look different than the concepts we've shown. It will also not be included in the next chapter. Maybe the one after that.",
                  },
                  {
                    q: "When will we be able to have a dedicated server, so one PC doesn't have to run at all times for friends to progress independently?",
                    a: "The problem is that the server will use too much processing power to calculate the physics. It might be a possibility if the players would host it themselves. We get a lot of requests about this, so we will investigate it further. But it's tricky with a physics-heavy game like Scrap Mechanic.",
                  },
                  {
                    q: 'Will we ever be able to use the Indoor Grow-Beds you have had in Scrap Mechanic since Creative, so we can put the crops inside of our bases?',
                    a: "Yes, we see a lot of use for Indoor Grow-Beds so it's very likely going to get added.",
                  },
                  {
                    q: "A common sentiment in the community is that while oil pools eliminated the tedium of the geysers, they've made oil collecting way too easy and similar to how chemicals are obtained. Are oil pools just a temporary thing until a more interesting oil mechanic is introduced?",
                    a: "We don't have any plans to change it right now. But we make sure to listen to player feedback. So if something is requested a lot, then we will change it.",
                  },
                  {
                    q: 'Is there going to be spud gun customization in the future?',
                    a: "That was the plan from the beginning, but we have had to put this on hold. We just don't see spud gun customization making a lot of sense right now. We think that the ones that are in the game do a good job of covering different types of situations. But it's not impossible that we will bring it back later, as we add new bots to fight.",
                  },
                  {
                    q: "Will you have to start a new Survival world when chapter 2 comes out and if you don't, will you be missing anything that you would get with a new world?",
                    a: 'We really want to avoid this. We want players to be able to use their old Survival worlds with the next chapter right away without missing out on anything.',
                  },
                  {
                    q: 'There are a bunch of exploits players use in Survival that completely break the game. Are you planning to do anything about that?',
                    a: "We are not sure what exploits are referring to. But if the players want to exploit the game and break things because they think it's fun, then that's ok. It's their choice, as long as they are having a good time.",
                  },
                  {
                    q: "A question I have is, how will you treat automation? I saw in a devblog a lot of time ago a picture where you could use vacuum pumps to move gas into a canister. I'd love to see a funnel pipe of some sort to shoot items into from a vacuum pump, like the packing station.",
                    a: 'With the release of Survival Mode, we noticed that a lot of players were really enjoying the automation part of the game and wanted more. Shooting items into a container or a chest from separate creations is something that we will look into. We always wanted players to build their own automated gas stations that fill up their vehicles, for example.',
                  },
                  {
                    q: 'Do you plan on making a way to harvest glue in bulk, just like you did with oil? Currently, it takes quite a lot of time to swim around and gather enough shells for the project you may need it for.',
                    a: 'Yes, the idea is to give the player ways to automate all types of resources. We have been looking into pigment flowers and clams, for example. More on that later.',
                  },
                  {
                    q: 'Any plans to add another game mode besides the three we already have?',
                    a: "We don't have any plans to add any new game modes. But we would love to free up some time and work more on mod support, to allow mod makers to make their own game modes or even their own games at some point. Little fun fact: we did play with the idea of adding a mini-golf mode to the game a long time ago, but decided to skip it. That's why there was a golfer outfit made for Survival.",
                  },
                  {
                    q: 'It would be nice if you could turn on health in Creative Mode.',
                    a: "We agree! It's something we should add.",
                  },
                  {
                    q: 'Will there be train tracks/track pieces and train wheels?',
                    a: "There might be, but right now there are no plans for that. However, we've seen some awesome mods that have added them.",
                  },
                  {
                    q: 'The presence of the fridge, being unique for only containing food items, implies that food will be perishable later in development. Is this true?',
                    a: 'No, this was never the plan. We will not make the food go old. However, we do have other plans for the fridge. More on that later.',
                  },
                  {
                    q: (<a key="scrapman_tweet" href="https://twitter.com/ScrapManYT/status/1394894719671422976">Draggable wedges when?</a>),
                    a: 'We have gotten pretty far on draggable wedges. What we have to work out now is how they will work when you pick them up after having placed them. That is because they don’t scale and work like normal blocks. We might show them in action in the next devblog.',
                  },
                  {
                    q: 'Will there be a Mac version of the game?',
                    a: "It's not a priority right now. Maybe after we do console ports.",
                  },
                  {
                    q: 'Why do we jump randomly while driving?',
                    a: 'We have to get a bit technical here: the ground is made up of a bunch of squares that are 64x64 meters. (256x256 blocks) These squares contain 2048 triangles. Sometimes, hitting the edges of these triangles at a high speed can make the car jump. This is a technical issue and hard to remove completely since the wheels are 100% based on physics in Scrap Mechanic. This is why in most racing games, the car physics are faked to make the driving smooth.',
                  },
                  {
                    q: 'Would Steam achievements be planned in the future? It would probably invite more people to try and make interesting stuff in Survival',
                    a: 'Yes! Once we get out of early access we will have achievements in place.',
                  },
                  {
                    q: 'Do you guys have any ideas for ocean-based bots? Like an oil rig or a fishing boat?',
                    a: 'All we can say now is that one of the totebots will be ocean-based.',
                  },
                  {
                    q: 'Why are there no gears in the game? I think a game about mechanics should have gears',
                    a: "There are ways we can do gears in a pretty optimized way. It's just something we didn't prioritize. Let us know in the comments below if you would like us to add gears.",
                  },
                  {
                    q: 'Have you thought about adding old railroad tracks to the Survival map that players can run vehicles on? It would make for a fun way to get around, and even make mobile bases',
                    a: 'The next chapter might include some tracks that the player can use.',
                  },
                  {
                    q: 'Have you ever thought about doing a collaboration with LandFall games?',
                    a: 'Yes we have; they are good friends of ours. We have been playing with ideas, but never gotten around to working on something together yet.',
                  },
                  {
                    q: 'Are we going to be able to loot the warehouses in the future?',
                    a: 'Yes! When the next chapter comes out. The player will be able to find a way to loot the warehouse.',
                  },
                  {
                    q: 'Will there be/are there plans to add a reload animation for the Spud Guns? (Maybe similar to the paint tool?)',
                    a: "We were planning to do a reload for the Spud Gun. But during development, we felt that it's pretty nice to be able to shoot without interruption in many cases so we left it out. A lot of mechanics are using the spud gun for other things than shooting bots.",
                  },
                  {
                    q: "Are collision damage mechanics a thing we'll see? i.e driving your vehicle off a high cliff and crashing hard into the ground below will cause blocks/parts of it to disappear?",
                    a: "Probably not with the blocks that are in the game currently. Maybe we could add a special block that would break on impact, but it's not in the plans right now.",
                  },
                  {
                    q: 'When will the welder outfit be released and when will more garments be released?',
                    a: "We have a few new outfits ready for the next chapter, including the welder outfit and a miner outfit that we haven't shown yet.",
                  },
                  {
                    q: "Can we please be able to destroy bushes? Some are in the way. I don't care if it takes 1000 metal 3 to do it, I need a bush wacker",
                    a: 'We hear you; they can get in the way. We will look into it so you can at least cut them down.',
                  },
                  {
                    q: 'What is your favorite bug that the community has found?',
                    a: 'Well, the t-pose bug when the player was running was pretty funny at times.',
                  },
                  {
                    q: 'I recall that you were working on birds a while back, will we see them anytime soon? Maybe new creatures?',
                    a: 'We might add more creatures. But right now, we are focusing on adding new bots.',
                  },
                  {
                    q: 'When will we be able to spawn bots in Challenge mode? Thanks!',
                    a: 'Hopefully soon. We have this pretty much working on our end. Making your own shooters with the challenge mode editor is really fun. We definitely want to add it soon.',
                  },
                ],
              },
              {
                name: 'Scrap Mechanic’s development',
                qna: [
                  {
                    q: 'How did you come up with the idea for the game?',
                    a: "It all started with Minecraft; at first, we were pitching a Minecraft port for the Xbox360 to our friends at Mojang back in 2011 but we never ended up partnering with them. So we decided to work on our own game within the sandbox/survival genre. Back then, we always felt like you couldn't really do much with the things you built in Minecraft. So we wanted to make a game where you create machines that have motion and physics. Creations that can solve problems within a game world. That's how it started.",
                  },
                  {
                    q: 'How many devs are working full-time on this game?',
                    a: 'When we released Scrap Mechanic on Steam in 2016, we were a 3-person team. Today, the Scrap mechanic team is made up of 12 people that are working full time, not including freelance help.',
                  },
                  {
                    q: "What was the biggest problem y'all had in the beginnings of SM?",
                    a: "It was probably the bugs that popped up when we released Scrap Mechanic. We didn't expect the game to become a number 1 global top-seller on Steam when we hit the release button. We were overwhelmed with bug reports and requests from all the new players. It was a stressful time, but a happy one.",
                  },
                  {
                    q: "When will you finally finish the game? It's been a year since Survival released and not even the second chapter is out holy crap!",
                    a: "Great question! Scrap Mechanic has been in development since late 2011 when we started and released on Steam in 2016. This might sound like a crazy long time, but when we started working on Scrap Mechanic, game engines like Unity were mainly used for mobile games and Unreal Engine's license cost was too high for us at the time. So we decided to make the game in a free engine, called Ogre Engine. It ended up limiting us a lot during development, so we decided to make our own. During development, we have been working on a Scrap Mechanic and our own game engine at the same time. This has slowed things down a lot. But we are now at a stage where we are really happy with our tools and development is going a lot faster compared to before Survival's release. However, we are working on pretty big updates so it still doesn't mean that they will be dropping at a very fast rate. Good game development still takes a lot of time. Everything has to get designed, iterated, tested, and implemented.",
                  },
                  {
                    q: 'When creating a new big update, how do you make sure, to the best of your ability, that it is going to keep people interested in the game?',
                    a: "Well, in the case of the next chapter, we usually aim to introduce a setting where the player can be creative in new ways that were not possible before. Then we try to find a lot of new ideas for interactive parts and progression within that. It's much more complicated than that, but that's how we start.",
                  },
                  {
                    q: 'What was Survival development like? What took so long? Did plans change while making the mode? How is it still in an unfinished state?',
                    a: 'The thing that took the longest was the work we had to do on our game engine in order to allow us to do everything we wanted. The good news is that we are at a stage now where we are very happy with it. That was mainly the thing slowing the development down. But no more!',
                  },
                  {
                    q: 'Why do people who make mods for this game add new and interesting things much faster?',
                    a: "It's because of the awesome Scrap Mechanic community making really great mods. We, however, are a bit limited when adding things to Scrap Mechanic since everything has to fit the theme and have a meaning in the context of the game. We focus more on bigger updates while leaving a lot of space for mod makers to be creative.",
                  },
                  {
                    q: 'Devblog 22 when?',
                    a: 'Hopefully soon. Right now, we are waiting for a few things to be more presentable. We can, however, say that it will be a pretty exciting devblog. We will show underground digging for the first time!',
                  },
                  {
                    q: 'How come you’ve been so inactive on Twitter for the past 2 months?',
                    a: 'Usually when we go silent, it means that we are pretty busy with internal deadlines. But we will take it to heart and try to post more during these times.',
                  },
                  {
                    q: 'Why are you guys so slow with updates compared to most games today?',
                    a: "Development used to be very slow before the Survival release. But today, our tools are a lot better and our development is going pretty fast. However, it's hard to see that from the outside since the community does not see the number of things we are working on. Hopefully, the dev blogs will start to make that clearer.",
                  },
                ],
              },
              {
                name: 'Other questions we just had to answer',
                qna: [
                  {
                    q: 'How are you doing? Just checking in :)',
                    a: "We are doing great! We are busy working on some really cool features for the next chapter. We are definitely not in development hell like we've seen some players think in the community.",
                  },
                  {
                    q: 'Is this Q & A replacing a devblog?',
                    a: 'No! We will still do dev blogs. This Q&A is just something we have wanted to do since we noticed that there were a bunch of questions sent to us and Twitter is not really a good place to answer the longer ones.',
                  },
                  {
                    q: (<a key="kan_tweet" href="https://twitter.com/kan_gaming/status/1394746298679562242">What are your favorite toppings to put on a sandwich?</a>),
                    a: 'Easy answer! The toppings on a revival baguette!',
                  },
                ],
              },
            ].map((group,i) => (
              <div key={group.name}>
                {i!==0 ? (<><br /><br /></>) : <></>}
                <b style={{ textDecoration: 'underline' }}>{group.name}</b>
                {
                  group.qna.map((qna, i) => (
                    <div key={i}>
                      <br />
                      <b>Q</b>
                      :
                      {' '}
                      {qna.q}
                      <br />
                      <b>A</b>
                      :
                      {' '}
                      {qna.a}
                    </div>
                  ))
                }
              </div>
            ))
          }
</>


Thanks for all the great questions!

Let us know if you would like us to do another Q&A
