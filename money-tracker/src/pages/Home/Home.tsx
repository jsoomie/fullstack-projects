import { TransactionForm, TransactionList } from "components";
import {
  useAuthContext,
  useCollection,
  QueryString,
  OrderByString,
} from "hooks";
import { Collection } from "actions";
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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user!.uid} />
      </div>
    </div>
  );
};
