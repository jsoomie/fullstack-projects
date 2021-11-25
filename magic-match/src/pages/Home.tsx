import { useState, useEffect } from "react";
import { SingleCard } from "components";
import { ICard } from "interfaces";
import { motion } from "framer-motion";
import { fadeIn, slideDown } from "animations";

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
    setChoiceOne(null);
    setChoiceTwo(null);
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
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev: any) => {
          return prev.map((card: ICard) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }
      // else {
      //   console.log("Not win");
      // }
      setTimeout(() => resetTurn(), 625);
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <motion.div variants={fadeIn} animate="to" initial="from">
      <motion.h1 variants={slideDown}>Magic Match</motion.h1>
      <button onClick={shuffleCards}>New Game</button>
      <motion.div variants={fadeIn} className="card-grid">
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
      </motion.div>
      <p>Turns: {turns}</p>
    </motion.div>
  );
};
