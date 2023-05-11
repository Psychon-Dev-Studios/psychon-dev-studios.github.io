## Setup

Make sure you have all of the following:
- A USB drive (8 GB or larger)
- An [Ubuntu Disk image](https://releases.ubuntu.com/lunar/ubuntu-23.04-desktop-amd64.iso) - This needs to end up on your Kano somehow. I suggest just putting it on the USB drive and copying it to the Kano's internal storage once you get to the desktop bit
- [Visual Studio Code, x64 User Mode](https://code.visualstudio.com/download) installed on your school laptop
- Kano connected to power and wifi

## Gaining Remote Access

Since you don't have a monitor, you're going to need to set up remote access.

*If you already installed Visual Studio Code, skip to step 3*
1. Download [Visual Studio Code](https://code.visualstudio.com/download). You'll want the x64 Windows User-Installer version
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
4. Under **Username**, type in your Kano username
5. Under **Password**, type in your Kano password
6. Set the display name to whatever you like, then hit **Save**
7. In the **User Account** dropdown, select the account you just made
8. Hit SAVE
9. Click on the PC icon to connect. Hooray, you have desktop access now!!

## Flash USB

Now we can FINALLY start flashing your USB drive! If you have any data on the drive, **please back it up**

1. Connect your USB Drive to your Kano
2. Double-check it's detected: in a terminal, type `ls /media/yourKanoUsername/`. If the output is not empty, the drive was detected
3. Start Raspberry Pi Imager
4. Hit **Choose OS**. In the list, scroll down and click "Use local/custom image"
5. In the popup, change the file search type from **.img** to **Any**
6. Navigate to where the Ubuntu ISO file is. Double-click it to choose it
7. Click **Choose SD Card** and select your USB Drive
8. Click **WRITE**. This will write the image to the disk.

This process can take quite a long time, especially on really slow devices like a Kano

Once it finishes, close Microsoft Remote Desktop. In the Visual Studio Code terminal, make sure you're still connected to the Kano and type `sudo shutdown now` to safely power the board off. Disconnect power and the USB disk after it finishes shutting down.

## Install Ubuntu

1. Shut down your laptop completely
2. Connect the USB Disk and power the laptop on
3. On the "Press ENTER to inturrupt startup" screen, hit ENTER until it beeps and dumps into the boot device menu
4. Select your USB drive
5. In the Grub menu, use the arrow keys to highlight **Try or Install Ubuntu** and hit enter
6. Wait for Ubuntu to boot. When it asks, hit "Install Ubuntu"
7. Select English (US) and hit Next
8. Select **I don't want to connect to the internet just yet** and hit Next
9. Select **Normal Installation**. Make sure both checkboxes **ARE NOT CHECKED**
10. Select **Manual Partitioning** and hit Next
11. Find and select **nvme0n1p5** and hit Change
12. Leave the size, type, and location alone.
13. Set "Use as" to **Ext4** or **Ext4 journaling file system**
14. Check **Format Partition** if it isn't already checked
15. Set "Mount Point" to **/**
16. Hit OK
17. Make sure "Device for bootloader installation" is **nvme0n1**
18. Select the correct timezone and hit Next
19. Enter the account details you want. Leave "Use Active Directory" **unchecked**
20. Select the theme you want. The installer may freeze for a second. Click Next
21. Wait for the installation to finish, then hit Restart now
22. Grub should be the default bootloader now. If it isn't:
    1. Restart your laptop
    2. On the "Press enter to inturrupt startup", press **ENTER**
    3. Press **F12**
    4. In the list that shows up, select **ubuntu**

Enjoy your new Ubuntu installation!
