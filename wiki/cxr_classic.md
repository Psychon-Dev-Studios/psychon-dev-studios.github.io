---
title: CamX Classic Wiki
---

## CamX: Classic wiki
### ABANDONED PROJECT!

#### [Return to Home](https://psychon-dev-studios.github.io/)

This wiki is about CamX: Classic. If you meant to open a different wiki, please return to home.

### What's CamX?
CamX is a Five Nights at Freddy's fangame, which places you in the role of a CamX Security employee, watching over a local pizzeria. Survive the terrors of Quen's Pizzeria until 6 AM, get your paycheck, and get out.

***CamX: Classic's development has stopped. Please see [this page](/wiki/cxr) for more info***

### Compatibility
CamX: Classic will only be supported on Windows 10 / 11, and will not have any browser support.

### Required Software
CamX: Classic requires additional software to be installed on your device before you can play it:

- Python (tested on 3.8 and 3.10). See below for an installation guide.
- Additional Python packages. See below for additional details.

#### How to install Python:

1) Open the Microsoft store (Start menu, then type "store")\
2) Search "Python". Make sure you either install **3.8** or **3.10**, as these are the versions that CamX: Classic has been tested on\
3) (Recommended, not required) Open powershell (Windows key + X, then click "Powershell"). Type "**pip install pywin32**" or "**python pip install pywin32**"

#### How to install CamX: Classic

1) Download the CamX: Classic package and unzip it. Make sure there are two files: **"install.pyw"** and **"cxr.dat"**.\
2) Run **install.pyw**. An installer window will appear after a couple of moments. Click the **"Install CamX: Classic"** button.\
3) Be patient and wait for installation to complete. You might have to re-run the installer if something goes wrong. **See note 1 below**.\
4) After installation completes, locate the **CamX Classic** icon on your desktop, and double-click it to run CamX: Classic\
5) Please be patient, CamX: Classic might have to install additional dependencies. If it does, it will ask for your permission to continue. **See note 2 below**

**[1]** If you didn't follow step 3 in **How to install Python**, the program will install pywin32 by itself. Because this requires Python to restart, the program will exit by itself, then re-open a moment later. You'll have to re-click the **Install CamX: Classic** button.

**[2]** If you get the message **"Install Failed"**, CamX: Classic probably won't run. You'll have to manually install dependencies by following these steps:

1) Open powershell (Windows key + x, then click "Powershell")\
2) Type "**pip install pygame**" and press enter\
3) Wait for the above install to finish. Type "**pip install pygame_widgets**" and press enter\
4) Wait for the above install to finish. Type "**pip install requests**" and press enter (***This is optional. You can avoid running this command, but you'll get the "Missing Dependency" warning on every startup if you don't install it***)\
**Note: if these commands don't work, try adding "python" before "pip" (making it look like ***"python pip install package"***)**

### Features
- 7 nights
- Customizable controller support (advanced options)
- Basic options changable through the settings menu
- Advanced options for advanced users. [Learn more](https://psychon-dev-studios.github.io/software/blog/cxr_advanced_options)
- Core features from FNaF (power, clock, doors, cameras)
- Three main animatronics
- Automatic updates (**work in progress**)

CamX: Classic is still under active development. More features will be added in the future!


### Known Bugs

- Checksums don't work, **leading to them being disabled in all installations**
