import { homeStyles as styles } from "pages";
import { Document } from "interfaces";
import { DocumentData } from "@firebase/firestore";
import { useFirestore } from "hooks";
import { Collection } from "actions";

export const TransactionList = ({ transactions }: DocumentData) => {
  const { deleteDocument } = useFirestore(Collection.TRANSACTION);

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction: Document) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{`$${transaction.amount}`}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};
