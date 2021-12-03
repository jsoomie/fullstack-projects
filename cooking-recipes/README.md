![Cooking & Recipes](../assests/../assets/recipes-splash.png)

## INTRODUCTIONS
[react-link]: https://reactjs.org/
[firebase-link]: https://firebase.google.com
[firestore-link]: https://firebase.google.com/docs/firestore
[jsonserver-link]: https://www.npmjs.com/package/json-server
[db-json-link]: https://github.com/jsoomie/fullstack-projects/blob/main/cooking-recipes/src/data/db.json

Welcome to the Cooking & Recipes page! This [react][react-link] project contains the full, but not entirely advanced hooks inlcuding useContext, useReducer.

Created a dark mode toggle and added different theme color for the navbar as a personal style. This the first time I had created custom hooks, albiet quite simple ones including useFetch to fetch local data and using generics to type that. Also a small hook that just went through to create themes or return an error if it was outside of the provider.

This project also was a beginning introduction to to [firebase][firebase-link]! Specifically utilizing the [firestore][firestore-link] cloud database, I learned how amazingly simple it is to use, but also understand just how powerful this tool by google can be!

## GOALS
- ✅ Create react application in typescript!
- ✅ Use advanced REACT hooks such as useState, useEffect, useContext, and useReducer all with typescript!
- ✅ A brief introduction to Firebase by google!
- ✅ Understanding of typescript type shapes coming from firebase!

## LOGS
Started off with a simple react application that used [json-server][jsonserver-link] to fetch data locally in [db.json][db-json-link]. Created a theme context and reducer to create a dark mode toggle. Typing out the items in the context and reducer went much smoother than other projects. 

When introduced to [firebase][firebase-link] the [firestore][firestore-link] cloud database, the types of the items coming in from it was difficult to type out. Keeping in mind, although the firebase version that was installed with 9.5.0, this project specifically used 8.5.0 compatible syntax.

```typescript
let results: IRecipe[] = [];
res.docs.forEach((doc) => {
  results.push({ id: doc.id, ...doc.data() });
});
setData(results);
setIsPending(false);
```

At first the lines above gave a type error as the results array was typed out to be IRecipe[]. For some odd reason the forEach loop and the spread of the doc.data() didn't come out as IRecipe as it was typed to be just the id string. 

For my first attempt to fix this, I typed the results array to any[] and forced it to take in whatever type that it was given. However, I wasn't much of a fan of that.

```typescript
let results: any[] = [];
res.docs.forEach((doc) => {
  results.push({ id: doc.id, ...doc.data() });
});
```

My next attempt was just to typecast the actual push of the data.

```typescript
let results: IRecipe[] = [];
res.docs.forEach((doc) => {
  results.push({ id: doc.id, ...doc.data() } as IRecipe);
});
```

This was what I had ultimately come to use. Although, still not a fan, it will be a while before a true solution comes up.
