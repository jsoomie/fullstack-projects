import { Fragment } from "react";
import { IProps } from "interfaces";
import "./SingleCard.css";

export const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: IProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Fragment>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="/img/cover.png"
            onClick={handleClick}
            alt="card back"
          />
        </div>
      </div>
    </Fragment>
  );
};
