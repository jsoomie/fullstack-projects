import { Fragment, useState } from "react";
import { SingleCard } from "components";
import { ICards } from "interfaces";

const imageName = [
  "helmet-1",
  "potion-1",
  "ring-1",
  "scroll-1",
  "shield-1",
  "sword-1",
];

const cardImages: ICards[] = [];
for (let i = 0; i < imageName.length; i++) {
  cardImages.push({
    src: `/img/${imageName[i]}.png`,
  });
}

export const Home = () => {
  const [cards, setCards] = useState<ICards[] | null>(null);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <Fragment>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards && cards.map((card) => <SingleCard card={card} key={card.id} />)}
      </div>
    </Fragment>
  );
};
