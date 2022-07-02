---
title: Arachna 2 Wiki
---

## Arachna wiki

#### [Return to Home](https://psychon-dev-studios.github.io/software/)

This wiki is about Arachna 2, the second game in the ***Arachnid Series***. If you meant to open a different wiki, please return to home.

### What's Arachna?
Arachna 2 is a simple 2D platforming game. Jump from platform to platform, avoid red platforms and the void, and make it to the exit.

### Compatibility
**Native app support (.exe, .deb, etc):**

| **Windows (.exe)** | **Linux (varies)** | **MacOS** | **iOS** | **Android (.apk)** | **ChromeOS (.deb)** | **Raspbian 10 (.deb)**
:-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |  :-------------: | 
| **Unsupported** | **Unsupported** | **Unsupported** | **Unsupported** | **Unsupported**  | **Unsupported** | **Unsupported**

**Browser support:**

| Browser | **Windows** | **Linux** | **MacOS** | **iOS** | **Android** | **ChromeOS** | **Raspbian 10**
:-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |  :-------------: | 
|**Chrome** | **Supported** | **Supported** | **Unknown** | **Unsupported** | **Unsupported**  | **Supported** | **Chromium Only**
|**Edge** | **Supported** | **Unsupported** | **Unsupported** | **Unsupported** | **Unsupported**  | **Unsupported** | **Unsupported**
|**Firefox** | **Supported** | **Supported** | **Unknown** | **Unsupported** | **Unsupported**  | **Only with Linux** | **ESR Only**
|**Safari** | **Unknown** | **Unsupported** | **Supported** | **Unsupported** | **Unsupported**  | **Unsupported** | **Unsupported**

### Features
- 19 levels
- Double jumping
- "Spidering" onto ceilings
- Saving of progress
- Fancy graphics ("E" to toggle)
- Softlock prevention (positional recovery)
- Data delete function
- Hostile turrets (2 levels)
- Checkpoint system
- **[TW]** Controller support
- **[DLC]** 9 additional levels, 1 boss fight
- **[DLC]** Two stars for completion (one for main game, one for DLC)
- **[DLC]** Additional difficulty by making all DLC levels like the flashlight levels from Arachna
- **[DLC]** Lore / backstory


### Known Bugs

- Major performance problems during animations
- Player can clip through some walls
- Infinite jumps are possible by abusing the above bug
- Player can interact with the pause button in ways they shouldn't
- Momentum is preserved on death
- Player cannot jump midair unless they jumped while on the ground
- Player can get to pause menu while prompts are onscreen (**partially patched**)
- Developer keybindings are not disabled in packaged versions
- Holding "E" or "L" causes odd behavior with other input
- Left-side collision box is enormous and causes difficulty maneuvering in some levels
- Turret bullets cease to exist if they contact a player trail entity
- Turrets don't respect a paused game (but can't kill the player while paused)
- Finishing a level while a turret bullet exists, then later starting another turret level, results in a copy of the turret firing itself at the player
- Incorrect menu positioning when gravity is flipped
- Menu buttons can be blocked by the player
- The menu doesn't deload flashlight level assets correctly in Arachna 2
- When resuming the game on a flashlight level in Arachna 2, the part of the flashlight assets deload and reveal the level
- Precise timing and game-pausing can allow the player to cheat death under certain conditions
- The gateway level has poor performance for the first frame iteration (roughly four seconds) due to the gateway animation frames not being properly cached
- **[TW]** Controller cursor is seperate from mouse cursor and doesn't hide mouse cursor
- **[TW]** Controller cursor becomes laggy on pause menu
- **[TW]** Cursor position is slightly different than on **HFR** builds
- **[DLC]** When changing from an Arachna 2 flipped gravity level to a DLC level, gravity does not reset to the correct value until completion of the level
- **[DLC]** Player can still jump while dialoge is open
- **[DLC]** The player can fall off of DLC level 9, revealing the entire level
- **[DLC]** Incorrect menu positioning on most DLC levels
- **[DLC]** Loading the flashlight level assets takes a moment when deloading the menu
- **[DLC]** Some debugging shortcuts that manipulate Arachna 2 level data can make the DLC show the wrong level, load the wrong assets, or crash altogether. Similar problems occur when using DLC shortcuts in Arachna 2
- **[DLC]** Upon failure to load DLC assets, Arachna 2 becomes unresponsive and locks on the menu
- **[DLC]** The player can be flung out the top of the map if they intersect a normal vertical platform extending all the way to the top of the screen and a trampoline platform
- **[DLC]** Incorrect menu positioning when player pauses while intersecting a trampoline platform
- **[DLC]** Under extremely specific conditions, the player can fling themselves out the bottom of the level without intersecting the void collider, leading to an infinite fall
- **[DLC]** Completing Arachna 2 after unlocking and progressing the DLC will reset all DLC data
- **[DLC]** Under certain conditions, the player can restart the level, then reach the exit before the player is reset back to start and collisions are re-enabled
- **[DLC]** Switching to the DLC, using developer shortcuts to cycle through all Arachna 2 levels, then loading into Arachna 2 unlocks the gateway on every level
    - Coming into contact with the gateway under these conditions induces the correct behavior in the player, but doesn't deload any assets correctly
    - After the finishing animation fails to play, the pause button is left in a partially-faded state, the player is left at a 45-degree angle, and the gateway still doesn't deload


### Fun facts
- Arachna 2 was built on top of Arachna. [Learn More](https://psychon-dev-studios.github.io/software/blog/a2_on_arachna)
- Arachna 2 is unofficially known as "Arachna 2: Return of the Spibber" or "Return of the Spooder"
- Arachna 2 was originally a mod for Arachna to add two new levels before it was migrated to its own project
- Some of the original Arachna levels are still present in the game, but are unused and cannot be accessed
- The player used to be a colored blob with a top hat. The player could chose their color from the menu. This was removed as it broke collisions
- Some of the levels in the DLC were so difficult that the primary playtester told us to "take our infernal creation and shove it back down Satan's throat". They promptly quit
- The easter egg music was added after the main developers got tired of hearing Stage 01 for hours on end. The lead for the debuggers actually had nightmares about that music
- Eternal Night was originally named "Fury Inducer", which was also misspelled as "Furry Inducer"
- Arachna 2 was briefly scrapped because of a game-breaking bug which couldn't be fixed. It was revived after the assistant developer asked what would happen if we completely rewrote the player code. After six days of reprogramming, the bug was finally fixed.
- Three pounds of tylenol was ingested during the development of Arachna 2 (between all involved and spread out over time)
- The bugs list for v0.9.1 was almost a thousand lines long
