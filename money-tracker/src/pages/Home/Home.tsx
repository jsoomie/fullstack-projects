import { TransactionForm, TransactionList } from "components";
import { useAuthContext, useCollection } from "hooks";
import { Collection } from "actions";
import styles from "./Home.module.css";

export const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(Collection.TRANSACTION, [
    "uid",
    "==",
    user!.uid!,
  ]);

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
