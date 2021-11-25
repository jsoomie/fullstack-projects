import { Fragment, useState, useEffect } from "react";
import { SingleCard } from "components";
import { ICard } from "interfaces";

const imageName = [
  "helmet-1",
  "potion-1",
  "ring-1",
  "scroll-1",
  "shield-1",
  "sword-1",
];

const cardImages: ICard[] = [];
for (let i = 0; i < imageName.length; i++) {
  cardImages.push({
    id: Math.random(),
    src: `/img/${imageName[i]}.png`,
    matched: false,
  });
}

export const Home = () => {
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: ICard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id) {
        setCards((prev: any) => {
          return prev.map((card: ICard) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        console.log("Not win");
      }
      setTimeout(() => resetTurn(), 600);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <Fragment>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards &&
          cards.map((card) => (
            <SingleCard
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
      </div>
    </Fragment>
  );
};
