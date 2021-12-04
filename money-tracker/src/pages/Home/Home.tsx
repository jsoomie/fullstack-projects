import { TransactionForm } from "components";
import { useAuthContext, useCollection } from "hooks";
import styles from "./Home.module.css";

export const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transaction");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {/* {documents && <TransactionList />} */}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user!.uid} />
      </div>
    </div>
  );
};
