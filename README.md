
# PWA Push Handler 🎉🙌
### iOS Push Notifications for PWAs and Web Apps

## **ToDo**

 - [x] Create iOS App and send them to Apple for Check
 - [ ] Create more useless functions for the App (That Apple will approve the App)
 - [ ] Logic to indentify the User (maybe UUID detection)
 - [ ] OneSignal to send Push Notifications to the App
 - [ ] Create NestJS Server for API Stuff (Auth, Projects, App Users)
 - [ ] Dashboard to create Projects and Register 



## **Why?**
It is 2021. Apple released iOS 14.5 (or maybe soon 15) and it is Still not possible to send Push Notifications to PWAs installed over Safari. This is really disappointing.

This Project is called PWA Push Handler. The Idea is that you as developer can register your PWA at this Service and then add a Banner to your PWA that the User should download the Push Handler App to the iPhone and add the PWA (also with deep links if the app is already installed). 
With a Post Command you can send Push to your PWA and the App will Receive the Push Notifications and on click will redirect to the PWA.

## **Status:**
Apple declined the App now multiple times because of the following Reason:

> Guideline 4.2 - Design - Minimum Functionality
> 
> We found that the usefulness of your app is limited by the minimal
> amount of content or features it includes.
> 
> Next Steps
> 
> We encourage you to review your app concept and incorporate different
> content and features that are in compliance with the App Store Review
> Guidelines.
> 
> We understand that there are no hard and fast rules to define useful
> or entertaining, but Apple and Apple customers expect apps to provide
> a really great user experience. Apps should provide valuable utility
> or entertainment, draw people in by offering compelling capabilities
> or content, or enable people to do something they couldn't do before
> or in a way they couldn't do it before.
