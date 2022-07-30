---
title: CamX Rebirth Advanced Options
---

## Blog: CamX: Rebirth Advanced Options

#### [Return to Home](https://psychon-dev-studios.github.io/software/)

As listed in the features for CamX: Rebirth, there are a few advanced options that are user-changeable. However, these don't have options menu entries, meaning you'll have to edit a config file (everyone's favorite passtime!)

To start, you'll need to find CamX's files. If you used the official installer, these should be located in your ProgramData folder, under cxr. For example, on our development machines, this would be **C:/ProgramData/cxr/**. The config files are under ./settings, so that would be **C:/ProgramData/cxr/Settings/**.

Here's a brief overview of the settings you can change, where they are, and what they do:

* **FRAME_RATE**: located in **game.conf**, changes the frame rate limit for gameplay. **Default is 24**, must be a whole number (or **0** for unlimited)
* **CRASH_PROTECTION**: located in **game.conf**, determines weather the game will exit at critically low frame rates (5 FPS or under). **Default is False**, must be a boolean.
* **KIOSK_MODE**: located in **game.conf**, determines weather the game will attempt to enter Kiosk mode, killing explorer.exe to lock the user to the game. **Default is False**, must be a boolean
* **hours**: located in **game.conf**, decides how many hours there are per night. **Default is [12,1,2,3,4,5,6]**, must be a Python list
* **Controller configuration**: located in **controller.conf**, allows the customization of controller mappings
* **Automatic Updates**: located in **autoUpdate.option**, determines weather the highly experimental auto-update feature is enabled. **Default is False**, must be a boolean
* **Auto-update URL**: located in **constants.py** in the **modules** folder, allows the user to change where CamX pulls updates from. **Default is https://psychon-dev-studios.github.io/software/update-packages/cxr/**
* **Auto-Updates support**: located in **constants.py** in the **modules** folder, allows the user to modify weather auto-updates are considered a supported feature. **Default is False** until the auto-update features are finished
* **SCREEN_WIDTH, SCREEN_HEIGHT**: located in **constants.py** in the **modules** folder, determines what resolution CamX will (try) to render at. **Default is 1920,1080**, must be a Python tuplet of a 16:9 resolution
* **HOUR_LENGTH**: located in **constants.py** in the **modules** folder, determines how long each hour is. **Default is 60**, must be a whole number
* **flags**: located in **main.pyw**, changes display configuration options. **Default is FULLSCREEN | HWSURFACE | DOUBLEBUF | SCALED**