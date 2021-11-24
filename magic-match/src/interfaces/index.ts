export interface ICard {
  id: number;
  src: string;
  matched: boolean;
}

export interface IProps {
  card: ICard;
  handleChoice: Function;
}
