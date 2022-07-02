---
title: How Arachna 2 was built on top of Arachna
---

## Blog: How Arachna 2 was built on top of Arachna

#### [Return to Home](https://psychon-dev-studios.github.io/software/)

Like any development team, we reuse code when we can. It's easier than re-inventing the wheel... usually. The first versions of Arachna 2 were basically Arachna with a new skin smacked on. Almost all the player code - including the physics - was identical.

When developing Arachna 2, we just replaced assets with better versions, added a couple of features, and modified some old code. Of course, we ended up re-writing part of the player code, level handling, and a few other things. Most of the game is new code, but Arachna's base code still runs the show. Critical functions were pulled straight from Arachna and left untouched, the UI was left almost identical (you can clearly see this in the pause menu), and we even re-used a lot of assets.

This has had a significant impact on Arachna 2. The most noticeable problem is with the collisions. The collision detection in Arachna was terrible - pretty much taking a blind (but educated) guess - which lead to a lot of fun bugs. We transplanted that code into Arachna 2, which (of course!) carried the bugs with it. We ended up modifying that code too, but we just slapped a hotfix on it. The base code is literally identical, we just added an additional script or two to double-check it and drag it to the right answer, if you will. 

We even have a couple of features in Arachna that aren't in Arachna 2, but the code's still there for it! For example, all the code for a flash level is still present (including all the assets), but we don't ever load any of it. We *could*, but we don't. That's actually what's going on with Eternal Night - we never used the flashlight code or assets in Arachna 2, but we left it in. Thank god, because we ended up using it as a critical part of the DLC! Even though *that* code is also the same, we have some extra stuff in the main DLC runtime that modifies its behavior a bit (and, of course, fixed a couple of major bugs. We hate those).

Anywho, this has been rambley enough, so let's move on.

\- Kytten