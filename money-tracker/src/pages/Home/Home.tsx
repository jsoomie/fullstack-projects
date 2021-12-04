import { TransactionForm } from "components";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};
