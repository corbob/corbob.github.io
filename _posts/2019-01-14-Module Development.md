---
layout: post
title: Everything you didn't know you didn't know about PSModuleDevelopment
date: 2019-01-14 09:00 -0700
---
Late in 2018, I had the distinct pleasure of spending a few hours with [@FredWeinmann](https://twitter.com/FredWeinmann). We spent the time fixing up my PSCUCM Module (Available from the [PowerShell Gallery](https://www.powershellgallery.com/packages/PSCUCM) and [GitHub](https://github.com/corbob/PSCUCM)). During this session we went through a number of commands and setups utilizing his PSModuleDevelopment module and PSFramework. What will ensue is a multi-part series on Developing PowerShell Modules using PSFramework and PSModuleDevelopment.

And so, without further ado, I present part 1:

# Setting up pre-requisites

We're going to be using modules from the [Powershell Framework Collective](https://github.com/PowershellFrameworkCollective). Specifically: `PSFramework` and `PSModuleDevelopment`. However, I recommend looking at `PSUtil` as it contains some great functions that make working in PowerShell even more delightful.

Due to the way the PowerShell Gallery works you can install both modules with a single command: `Install-Module PSModuleDevelopment -Scope CurrentUser`

# Setting up directory structures

With our modules installed, the first thing we need to do is setup our directory structures. To build a module prepared for Azure DevOps (formerly <abbr title="Visual Studio Team Services">VSTS</abbr>), we will use the `PSFProject` template that comes with `PSModuleDevelopment`. I encourage you to explore the various templates to see what's available.

To get started we run the following code: `Invoke-PSMDTemplate PSFProject` This will prompt for a `name` and `description`, provide these and the function will establish the scaffolding for our project. The directory layout for a module called DemoModule will be something like the below:

```text
DemoModule
├── build
│   ├── filesAfter.txt
│   ├── filesBefore.txt
│   ├── vsts-build.ps1
│   ├── vsts-prerequisites.ps1
│   └── vsts-validate.ps1
├── install.ps1
├── library
│   └── DemoModule
│       ├── DemoModule
│       │   ├── Class1.cs
│       │   └── DemoModule.csproj
│       └── DemoModule.sln
├── LICENSE
├── DemoModule
│   ├── bin
│   │   └── readme.md
│   ├── en-us
│   │   └── about_DemoModule.help.txt
│   ├── functions
│   │   └── readme.md
│   ├── internal
│   │   ├── configurations
│   │   │   ├── configuration.ps1
│   │   │   └── readme.md
│   │   ├── functions
│   │   │   └── readme.md
│   │   ├── scripts
│   │   │   ├── license.ps1
│   │   │   ├── postimport.ps1
│   │   │   └── preimport.ps1
│   │   └── tepp
│   │       ├── assignment.ps1
│   │       ├── example.tepp.ps1
│   │       └── readme.md
│   ├── DemoModule.psd1
│   ├── DemoModule.psm1
│   ├── readme.md
│   ├── tests
│   │   ├── functions
│   │   │   └── readme.md
│   │   ├── general
│   │   │   ├── FileIntegrity.Exceptions.ps1
│   │   │   ├── FileIntegrity.Tests.ps1
│   │   │   ├── Help.Exceptions.ps1
│   │   │   ├── Help.Tests.ps1
│   │   │   ├── Manifest.Tests.ps1
│   │   │   └── PSScriptAnalyzer.Tests.ps1
│   │   ├── pester.ps1
│   │   └── readme.md
│   └── xml
│       ├── DemoModule.Format.ps1xml
│       ├── DemoModule.Types.ps1xml
│       └── readme.md
└── README.md
```

# Directory structure overview

First thing we will notice is that it created a directory titled DemoModule. This is clearly where we store our module and the related item. Of note is the numerous readme files present in the template. These will give you an overview of the areas that they are found so you can take further advantage of them. What follows is a sumarization in my own words what these directories are for, or at least what I use them for.

## build

Within the DemoModule directory we have the build directory. This contains the scripts that are all preconfigured for use within an Azure DevOps pipeline. These will be covered in more depth in a coming installment of this series.

## library

Next is the library. This contains the files and directories needed for a C# project that will result in a DLL. If we use this, it will automatically put he DLL into the appropriate places for the rest of our template to take advantage of. This is an area of the template I have not looked at, nor have I taken advantage of *yet*.

## DemoModule

Up next is the DemoModule directory. This directory contains all of the files to actually make our module a module. This includes the manifest file, and the module file itself.

### DemoModule/bin

The bin directory contains any binary data that is part of your module.

### DemoModule/en-us
### DemoModule/functions
### DemoModule/internal
#### DemoModule/internal/configurations
#### DemoModule/internal/functions
#### DemoModule/internal/scripts
#### DemoModule/internal/tepp
### DemoModule/tests
#### DemoModule/tests/functions
#### DemoModule/tests/general
### DemoModule/xml