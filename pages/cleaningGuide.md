# General cleanup steps

You should follow these instructions regardless of what you've done to your laptop. These steps will be different depending on what browser you use.
If you use Firefox or another browser, skip to step 5

If you intend to continue using your laptop (E.G. if it isn't the last day of school yet) you should not complete this section yet

1. Close Chrome and Edge
2. Navigate to `C:/Users/<username>/AppData/Local/Google/Chrome/User Data` for Chrome or `C:/Users/<username>/AppData/Local/Microsoft/Edge/User Data`
3. Delete every file and folder in that folder
4. If you use both browsers, open the folder for the 2nd browser and repeat the deletion process
5. Navigate to `C:/Users/<username>/` and delete the following files & folders: `Cookies`, `Desktop`, `Downloads`, `Favorites`, `Local Settings`, `NetHood`, `PrintHood`, `Recent`, `Searches`, `Templates`, `.cache`, ANY file with `ntuser` or `NTUSER` in it. You should **back up Downloads if you care about them**

# 7zip Program Hack

Follow these instructions if you have apps installed through the 7zip hack

1. Open File Explorer and navigate to `C:/Windows/SysWOW64/7zip`
2. Highlight EVERYTHING in this folder. Right-click and add to `Compressed (zipped) folder`
3. Rename the zip file to something like "`2023_7zip_<your name>.zip`". This will be helpful for next year, when you want to restore your app backups
4. Move the `.zip` file to your Desktop (so you know where it is) and delete the entire 7zip folder. As in, ***C:/Windows/SysWOW64/7zip should no longer exist at all***.
5. Navigate to `C:/Users/<student number>/AppData`. **You might need to enable Show Hidden Items under the View settings**
6. Open the `Roaming` folder. Ignore the following folders:
     - CAI, Microsoft, Sun, VLC, Zoom
7. Highlight any other folders you see. Right-click and add to `Compressed (zipped) folder`. Rename the zip file to something like "`2023_Roaming_<your name>.zip` and move it to your Desktop
8. Delete the folders you highlighted. Only the folders in the list above should be left behind
9. Go back to `Roaming`, then go into `LocalLow`. Delete everything but `Intel` and `Microsoft`
10. Go back to `Roaming`, then go into `Local`. Ignore the following files and folders
     - Application Data, Comms, ConnectedDevicesPlatform, CrashDumps, D3DsCache, Google, History, Lenovo, Microsoft,  Packages, PeerDistRepub, PlaceholderTileLogoFolder, Publishers, Temp, VirtualStore, IconCache.db
11. Highlight any other folders. **Do not highlight infection.log**. Right-click and add to `Compressed (zipped) folder`. Rename the zip file to something like "`2023_Local_<your name>.zip` and move it to your desktop
12. Delete all of the highlighted folders ***and infection.log*** (if it exists). In addition, delete **Temp** and **Temporary Internet Files** as these tend to have incriminating evidence
13. Find a safe place off-device to keep the zip files. ***Under no circumstances should you store these on Google Drive, OneDrive, the school's Documents folder, or any other school-provided storage methods***. If you do not have a safe place to keep these files (or just don't want to), you may send them to me in DMs. ***Do not put these in any Discord servers as they contain sensitive private information***
14. Once you have the zip files safely backed up, delete them
15. Navitate to `C:/ProgramData/` and delete everything but `Adobe`, `Application Data`, `CrowdStrike`, `CTES`, `Desktop`, `Documents`, `Dolby`, `Intel`, `Lenovo`, `Microsoft`, `Microsoft OneDrive`, `Oracle`, `Package Cache`, `Packages`, anything with `regid`, `Rpcnet`, `SoftwareDistribution`, `ssh`, `Start Menu`, `Templates`, `USOPrivate`, `USOShared`, `Vernier`, `WindowsHolographicDevices`, `2012.par`, `3002.xml`, `defaultapps.xml`, `netsh.out`, `ntuser.pol`, and `SmartCallConfig.xml`
16. Navigate to `C:/Users/<username>/AppData/Roaming/Microsoft/Windows/Start Menu/Programs` and delete any custom shortcuts there. You may ignore `Administrator Tools`, `Maintenance`, `Startup`, and `System Tools`
17.  On your desktop, **EMPTY YOUR TRASH**. I cannot put enough emphasis on this. ***EMPTY YOUR TRASH.***

# VPN / iBoss Killswitch

Follow these steps if you enabled the VPN or iBoss killswitch
These steps will be different depending on whether the file is writeable or not

1. Navigate to `C:/Windows/System32/drivers/etc/`
2. Open `hosts` in Notepad
3. Delete `127.0.0.1 epsvpnstu.everett.k12.wa.us` and `127.0.0.1 cloud125682-swg.ibosscloud.com`
4. Press Ctrl+S to save the file
5. ***If you are not able to save the file, come talk to me. The file must be saved as `C:/Windows/System32/drivers/etc/hosts` with no file extension***

# Ubuntu Hack

Talk to me in person; this is an extended process and requires tools you do not have

# Microsoft Store Apps

Follow these instructions if you have MS store apps installed

1. Open the start menu
2. On every MS store app you installed, right-click and hit *Uninstall*, then confirm you want to uninstall
3. Repeat this process until they are all uninstalled
