---
layout: post
title: Everything you didn't know you didn't know abous PSModuleDevelopment
date: 2019-01-14 09:00 -0700
---
Late in 2018, I had the distinct pleasure of spending a few hours with [@FredWeinmann](https://twitter.com/FredWeinmann). We spent the time fixing up my PSCUCM Module (Available from the [PowerShell Gallery](https://www.powershellgallery.com/packages/PSCUCM) and [GitHub](https://github.com/corbob/PSCUCM)). During this session we went through a number of commands and setups utilizing his PSModuleDevelopment module and PSFramework. What will ensue is a multi-part series on Developing PowerShell Modules using PSFramework and PSModuleDevelopment.

And so, without further ado, I present part 1:

# Setting up pre-requisites

We're going to be using modules from the [Powershell Framework Collective](https://github.com/PowershellFrameworkCollective). Specifically: `PSFramework` and `PSModuleDevelopment`. However, I recommend looking at `PSUtil` as it contains some great functions that make working in PowerShell even more delightful.

Due to the way the PowerShell Gallery works you can install both modules with a single command: `Install-Module PSModuleDevelopment -Scope CurrentUser`

# Setting up directory structures

With our modules installed, the first thing we need to do is setup our directory structures. To build a module prepared for Azure DevOps (formerly <abbr title="Visual Studio Team Services">VSTS</abbr>), we will use the `PSFProject` template that comes with `PSModuleDevelopment`. I encourage you to explore the various templates to see what's available.

To get started we run the following code: `Invoke-PSMDTemplate PSFProject` This will prompt for a `name` and `description`, provide these and the function will establish the scaffolding for our project. The directory layout will be something like the below:

```text
.
├── build
│   ├── filesAfter.txt
│   ├── filesBefore.txt
│   ├── vsts-build.ps1
│   ├── vsts-prerequisites.ps1
│   └── vsts-validate.ps1
├── install.ps1
├── library
│   └── Name
│       ├── Name
│       │   ├── Class1.cs
│       │   └── Name.csproj
│       └── Name.sln
├── LICENSE
├── Name
│   ├── bin
│   │   └── readme.md
│   ├── en-us
│   │   └── about_Name.help.txt
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
│   ├── Name.psd1
│   ├── Name.psm1
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
│       ├── Name.Format.ps1xml
│       ├── Name.Types.ps1xml
│       └── readme.md
└── README.md
```
