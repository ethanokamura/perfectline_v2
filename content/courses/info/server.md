---
title: Our Server
description: Access all your files and see examples over the internet!
---
## How to Log In (Default Terminal):
1. To log in, open a terminal window and type `ssh username@98.207.210.35` in the command line. Your username will be the first letter of your first name followed by your last name. For me, Ethan Okamura, my username would be `eokamura`.
2. If it's your first time logging in on this device, you will be prompted to verify the server's fingerprint. Just type `yes` and hit `enter`.
3. Finally you will be prompted to enter your password. For first-time users, your password is your username with an `!` at the end. For example, `eokamura!`.
4. That's it! Just like that, you've connected to the PerfectLine server!

## How to Log In (Visual Studio Code):
1. For Visual Studio Code, we will need to install the `Remote - SSH` extension. To do this, head over to the extensions tab on the left and look up `SSH`. It should be the first option created by Microsoft.
2. To log in, open VS Code and hit `ctrl+shift+p` for Windows or `cmd+shift+p` on Mac.
3. Type `Remote-SSH: Connect To Host...` and you should see the option provided. Hit `enter`.
4. Next, select `+ Add New SSH Host...` and hit enter.
5. `ssh username@98.207.210.35` in the command line. Your username will be the first letter of your first name followed by your last name. For me, Ethan Okamura, my username would be `eokamura`.
6. It will ask where you want to configure your file. The default (first option) is fine. Just hit `enter` to select it.
7. If it's your first time logging in on this device, you will be prompted to verify the server's fingerprint. Just type `yes` and hit `enter`.
8. Finally you will be prompted to enter your password. For first-time users, your password is your username with an `!` at the end. For example, `eokamura!`.
9. Finally, open a terminal and type `code .` to open up a new VS Code window. It should show you your home directory on the left-hand side of the window!