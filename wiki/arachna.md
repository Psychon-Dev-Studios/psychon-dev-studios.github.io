---
title: Arachna Wiki
---

## Arachna wiki

#### [Return to Home](https://psychon-dev-studios.github.io/software/)

This wiki is about Arachna, the first game in the ***Arachnid Series***. If you meant to open a different wiki, please return to home.

### What's Arachna?
Arachna is a simple 2D platforming game. Jump from platform to platform, avoid red platforms and the void, and make it to the exit.

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
- 22 levels
- Double jumping
- Menu transitions
- 5 player skins
- "Spidering" onto ceilings
- Saving of progress


### Known Bugs

- Player can move while paused
    - Allows skipping of levels
    - Allows player to interact with void collision
        - Causes the player to reset to normal size and start position in the menu
        - Also can cause the player to softlock
- Major performance problems during animations
- Player can clip through some walls
- Infinite jumps are possible by abusing the above bug
- Player can interact with the pause button in ways they shouldn't
- Player can get stuck in death loop if "S" is held in the right spot
- Momentum is preserved on death
- Pause menu animation can result in death under certain conditions
- Player can spawn in certain places causing a softlock under certain conditions
- Collisions with red platforms don't work correctly during a flash fade-out
- Player starts visible when they shouldn't be on the first flash level
- Darkness on flash levels resets player jumps
- Pause menu cannot be accessed on flash levels
- Pause menu button is not visible on flashlight levels
- Pause menu is blocked on flashlight levels
- Buttons cannot be pressed in the menu on flashlight levels
- Player has to flash while touching exit point on final flash level to be able to move on
- Player cannot jump midair unless they jumped while on the ground
- Colliders are not hidden on the end screen
- Player must restart the game to get off the end screen
- Saves can be lost if the game is exited during a level transition
- Loading bar doesn't show loading progress