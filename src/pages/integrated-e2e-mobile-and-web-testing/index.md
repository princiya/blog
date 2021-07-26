---
title: Setup for integrated web (end to end) + mobile (end to end) testing using Testproject.io
date: '2021-07-16'
spoiler: Unit tests vs Integration tests vs End to end tests
cta: 'Tests'
tags: ["testing", "draft"]
---

In the dashboard > My Projects > TNP there is a setup to demonstrate output from tnp web portal used as an input in the tnp android mobile application

On the left side navigation menu > Parameters > define a new parameter which will be shared across the web and mobile application

As described in the below screenshot, in the web portal, login as a provider. Click the button to generate a new action code. Click the action code text input field > generate random prefix > Store this random prefix in the shared parameter which was defined as per the above screenshot

The shared parameter (sharedCode) now contains the random prefix, for example `Sir`.
Run the android mobile application. The test steps click on `Neues Curalie-Konto erstellen` flow and create a patient > In the `Vorname` field, the test enters the sharedCode value which was defined from the previously run web application.

This way, Testproject.io can be setup to generate action codes from the web application > store action code value in shared global parameters > and use the action code value from the shared global parameter in the mobile application.