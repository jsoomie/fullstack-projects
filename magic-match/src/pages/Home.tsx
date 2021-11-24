import { Fragment, useState } from "react";

interface Cards {
  id?: number;
  src: string;
}

const imageName = [
  "helmet-1",
  "potion-1",
  "ring-1",
  "scroll-1",
  "shield-1",
  "sword-1",
];

const cardImages: Cards[] = [];
for (let i = 0; i < imageName.length; i++) {
  cardImages.push({
    src: `/img/${imageName[i]}.png`,
  });
}

export const Home = () => {
  const [cards, setCards] = useState<Cards[] | null>(null);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <Fragment>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards &&
          cards.map((card) => (
            <div key={card.id} className="card">
              <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover.png" alt="card back" />
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};
