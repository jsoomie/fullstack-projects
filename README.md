# fullstack-projects

## Introductions
A small collection of full stack projects from scratch to fully deployed.

## Projects
1. [Github Finder](https://github.com/jsoomie/fullstack-projects/tree/main/github-finder)
     - Create a github user finder application. Create fetch of github users with the use of a search bar. Create a clear bar after searching users. First, start using class components then refactor into functional components.

## Changelogs 
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