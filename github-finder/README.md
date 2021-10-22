![Github Finder](../assets/githubfinder-splash.png)

## INTRODUCTIONS
[react-link]: https://reactjs.org/
[github-api]: https://docs.github.com/en/developers/overview/about-githubs-apis
[brad-traversy]: https://twitter.com/traversymedia
[tutorial-link]: https://www.udemy.com/course/modern-react-front-to-back/
[typescript-link]: https://www.typescriptlang.org/


Welcome to the Github Finder page! It is a simple site created in [react][react-link]. The site simply utilizes the [github api][github-api] to be able to search through users and view any public info and a link to their github profile. The creation of this site was done following [Brad Traversy][brad-traversy] with his [tutorial][tutorial-link] on react.

The intentions of following the tutorial was just to create a basic ground work for me to learn and implement [TypeScript][typescript-link].

## GOALS
-  ✅ Write a react application in full typescript
-  ✅ Have deployed on the web using either netlify or heroku, etc.

## LOGS

**ONE** 
   - Starting new project called github finder. Using typescript and react as basis. For now cleaned up starter files and and changed to class style components for demo purposes only. This will change to full functional components down the line after serveral refactors. 

**TWO**
-    Create search function and cerate clear button. Hardest part was figuring what the types should be for the passing props and implementing them. Destructuring keeps code looking neater. 

**THREE**
-  Create alerts letting user input some text before searching.

**FOUR**
-  Install react-router-dom and its type definitions to use with mulitple pages. First created an about page skeleton.

**FIVE**
-  Finish the styling of user info page and made it optional for some fields as they aren't always filled out. Create badges for followers, following, public repos, and public gists instead of embedding it inside main card.

**SIX**
-  Refactor all class components into functions and use hooks.

**SEVEN**
-  Create reducer and context.

**EIGHT**
-  Create context and reducer for github states including users, repos, loading, etc. When using useEffect with in reducer state loading, rerenders components. Had to set loading outside of reducer forcing reducer's functions that has any axios request to have a return statement to catch in useEffect call. Create reducer and context for alerts. Nothing really of note, besides trying to type everything correctly was what gave me the most trouble. Create missing 404 page for the if chance of encounter."

**NINE**
-  Deploy github finder to netlify! Simple toml setup and netlify sign up!

**TEN**
-  Prepping for new project on contact keeper. Full stack project using Mongo DB Atlas.