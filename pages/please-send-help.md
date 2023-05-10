## Setup

Make sure you have all of the following:
- A USB drive (8 GB or larger)
- An (Ubuntu Disk image)[https://releases.ubuntu.com/lunar/ubuntu-23.04-desktop-amd64.iso] - This needs to end up on your Kano somehow
- (Visual Studio Code, x64 User Mode)[https://code.visualstudio.com/download] installed on your school laptop
- Kano connected to power and wifi

## Gaining Remote Access

Since you don't have a monitor, you're going to need to set up remote access.

*If you already installed Visual Studio Code, skip to step 3*
1. Download (Visual Studio Code)[https://code.visualstudio.com/download]. You'll want the x64 Windows User-Installer version
2. Run the .exe, follow the installation directions. Make sure you do NOT disable the startup shortcut
3. Open Visual Studio Code. At the top of the screen, find **Terminal**. Click it, then click **New Terminal**
4. If you haven't already, plug in your Kano. ***It will need 3-5 minutes to boot up, do not continue until it finishes***
5. In the new terminal at the bottom of the window, type `ssh PutYourUsernameHere@kano.local` and hit enter
6. Accept the risk
7. Enter your Kano password and hit enter. The terminal should then switch to the Kano's terminal.

## Raspbian Repos

First up, you need to add the Raspbian repositories. Go ahead and run **`wget https://archive.raspbian.org/raspbian.public.key -O - | sudo apt-key add -`** to install the repo signature key

Now you need to remove broken sources. Run **`sudo nano /etc/apt/sources.list`** to open the apt sources file. It'll open in your terminal, so you'll need to use the keyboard to move around. Using the arrow keys, scroll way down to the bottom and delete anything referring to **cdn-fastly.deb.debian.org**

Then, in the same file, add these two lines:

```
deb http://archive.raspbian.org/raspbian bullseye main contrib non-free
deb-src http://archive.raspbian.org/raspbian bullseye main contrib non-free
```

Press Ctrl+X, type **Y**, and hit enter. Then, run `sudo apt update`

Now that the repositories are added, you can run `sudo apt install raspi-imager` and it should install

## Desktop Access

Unfortunately, you will need to be able to access the desktop to use Raspbery Pi Imager. Since you can't use a monitor, you'll need to install some software to access the screen remotely.

*In the Kano terminal*, run `sudo apt install xrdp`
Now, *on your Windows PC*, open the Microsoft Store. Find **Microsoft Remote Desktop** and install it. Once it's installed, open it and follow these steps to connect to your Kano:

1. In the upper-right corner of the app, click **Add**, then click **PCs**
2. In **Formal Name**, type **kano.local**
3. Click the **+** next to **User Account**
4. Under **Username**, type **yourKanoUsernameHere@kano.local**
5. Under **Password**, type in your Kano password
6. Set the display name to whatever you like, then hit **Save**
7. In the **User Account** dropdown, select the account you just made
8. Hit SAVE
9. Click on the PC icon to connect. Hooray, you have desktop access now!!
