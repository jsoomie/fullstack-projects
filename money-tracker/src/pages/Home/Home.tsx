import { TransactionForm } from "components";
import { useAuthContext } from "hooks";
import styles from "./Home.module.css";

export const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user!.uid} />
      </div>
    </div>
  );
};
