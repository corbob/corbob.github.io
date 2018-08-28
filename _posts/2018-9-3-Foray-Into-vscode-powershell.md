---
layout: post
title: A Foray into vscode-powershell
date: 2018-09-03 09:00 -0700
---

This is a foray into getting started with the vscode-powershell extension. In particular noting some of the perhaps less obvious things I needed to do in order to get it to build on Ubuntu 18.04.

First thing you'll need to do of course is to fork the repository. There are two repositories that we want to fork to our github account: [PowerShellEditorService](https://github.com/PowerShell/PowerShellEditorServices) and [vscode-powershell](https://github.com/PowerShell/vscode-powershell). Once you've forked them (and perhaps made hours of work that Tiler and Rob keep harrassing you as not being good enough...) you need to clone them to your local machine. I highly recommend keeping them side by side and so I clone them into a repos directory. On my Windows machine all of my git repos are stored at `C:\repos\` on my fresh install of Ubuntu Linux 18.04 (which is what's prompted this post) they're stored at `~/git/`. 

# System software to install

Now after freshly installing Ubuntu 18.04, I have installed the following software on top of the base:

1. PowerShell-Preview - PowerShell 6.1 is in Release Candidate, and is the only "Supported" version for Ubuntu 18.04
1. npm - Not entirely sure if I installed this one, or if it's just installed as part of Ubuntu... It's definitely installed though.
1. VS Code (Insiders) - I have installed Insiders, but you can develop the extension just as well on normal VS Code.

Once this is installed, and the repos are cloned. I opened vscode-powershell in vscode-insiders. I then selected `Debug > Start Debugging` This greeted me with the message: "The preLaunchTask 'BuildAll' terminated with exit code 1." Clearly we're missing some pre-requisites... Looking in the terminal we see:

```
> Executing task: Invoke-Build BuildAll <

execvp(3) failed.: No such file or directory
The terminal process terminated with exit code: 1

Terminal will be reused by tasks, press any key to close it.
```

This initially felt like we were missing InvokeBuild from the PowerShell Gallery. Unfortunately, after installing that, the error is still present. The build appears to work if we do Invoke-Build from pwsh-preview.