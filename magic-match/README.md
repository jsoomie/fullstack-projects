![Magic Match](../assets/magicmatch-splash.png)

## INTRODUCTIONS
[react-link]: https://reactjs.org/
[framer-link]: https://www.framer.com/motion/


Welcome to the Magic Match page! This [react][react-link] project was a simple project just to showcase simple react state management knowledge and simple [framer-motion][framer-link] animations included to create a full fledged game where one can understand from the get-go!

## GOALS
- ✅ Create react application in typescript!
- ✅ Finish a full playable game with simple animations!

## LOGS
The overall project was a simple project utilizing typescript. The most difficult problem to overcome was working out problems that were created within the game logic itself. A bug had occured where if a user was quick enough, the user could've double clicked a card and it would automatically turn over the correct card elsewhere on the card grid. The problem occured because the logic was to compare the first card with the second card against the the card's path name. Unfortunately, since the paths are the same, in the sense that it is utilizing the same image to render the card, then it would have counted as the 'same' click, thus flipping over the correct card in the end.

This problem was solved by adding a !flipped check inside of the handleClick function.
```javascript
const handleClick = () => {
  if (!disabled && !flipped) {
    handleChoice(card);
  }
};
```
This prevented the non-clicked to not even be considered as it was flipped.

___

Another problem that occured was the type of prev. Below is a code snippet of what the code looks like.
```typescript
setCards((prev: any) => {
  return prev.map((card: ICard) => {
    if (card.src === choiceOne.src) {
      return { ...card, matched: true };
    } else {
      return card;
    }
  });
});
```
As I'm not a fan of the "any" type, I tried high and low to fully understand what is coming from the "prev" of the state.

In the end, it was the card type coming through as an array. I came up with a solution for that below.
```typescript
return prev.map((card: ICard[]) => {...}
```
Unfortunately, that came up with a problem as well with typescript stating that the prev type is actually ICard[] | null. My solution now was to add onto that type to be a union.
```typescript
return prev.map((card: ICard[] | null) => {...}
```
Now typescript throws an error on the lines below:
```typescript
setCards((prev: ICard[] | null) => {
  return prev.map((card: ICard) => {..}
```
A quick fix to this was to add the non-null assertion at "prev":
```typescript
  return prev!.map((card: ICard) => {..}
```