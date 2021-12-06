![Money Tracker](../assets/monetracker-splash.png)

## INTRODUCTIONS
[react-link]: https://reactjs.org/
[firebase-link]: https://firebase.google.com
[firestore-link]: https://firebase.google.com/docs/firestore
[firebasetools-link]: https://firebase.google.com/docs/cli

Welcome to the Money Tracker page! This [react][react-link] project contains the full react hooks, useContext and useReducer. Also it includes many more custon hooks to fetch and manipulate data from the [firebase][firebase-link] [firestore][firestore-link]. 

This project introduced the full deployment path onto the firebase service. Including the firestore rules, installing and using the [firebase-tools CLI][firebasetools-link]. It was also the first time using the module.css style of CSS in the component tree. 

In regards to types, the [firestore][firestore-link] database returns strange types, however, luckily, the firestore comes with some types included.

## GOALS
- ✅ Create react application in typescript!
- ✅ Fully deploy site on firebase!
- ✅ Full understand auth using firestore rules!
- ✅ More understanding of typescript type shapes coming from firebase! 

## LOGS
This site was full started using Firebase as the backend. Understanding the Auth, Collection and Firestore rules was easy to grasp. 

The most trouble I had was again with the return type shapes from firebase. I had to scrounge around package for exported types. Luckily I had found some that aided my way through creating this project. This time around, I had a lot more types and interfaces going around as I was manipulating more data coming through firestore. This is including collections and auth, so I had to deal with incoming data from documents and user types.

Overall, this was a great learning experience for ts and firebase in react!