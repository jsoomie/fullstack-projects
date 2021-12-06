import { TransactionForm, TransactionList } from "components";
import {
  useAuthContext,
  useCollection,
  QueryString,
  OrderByString,
} from "hooks";
import { Collection } from "actions";
import { DocumentData } from "@firebase/firestore";
import styles from "./Home.module.css";

let queryArray: QueryString;
let orderByArray: OrderByString;

export const Home = () => {
  const { user } = useAuthContext();
  if (user && user.uid) queryArray = ["uid", "==", user.uid];
  orderByArray = ["createdAt", "desc"];

  const { documents, error } = useCollection(
    Collection.TRANSACTION,
    queryArray,
    orderByArray
  );

  const totalAmount = () => {
    let amountArray: number[];
    if (documents) {
      amountArray = documents.map((doc: DocumentData) => parseInt(doc.amount));
      return amountArray.reduce((acc: number, curr: number) => acc + curr);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {documents && <p>Total amount: {`$${totalAmount()}`}</p>}
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user!.uid} />
      </div>
    </div>
  );
};
