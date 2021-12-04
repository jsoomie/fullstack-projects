import { homeStyles as styles } from "pages";
import { Document } from "interfaces";
import { DocumentData } from "@firebase/firestore";

export const TransactionList = ({ transactions }: DocumentData) => {
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction: Document) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{`$${transaction.amount}`}</p>
        </li>
      ))}
    </ul>
  );
};
