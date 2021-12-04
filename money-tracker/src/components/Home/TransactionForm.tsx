import { useState, Fragment, FormEvent, useEffect } from "react";
import { useFirestore } from "hooks";
import { ITransactionProps } from "interfaces";
import { Collection } from "actions";

export const TransactionForm = ({ uid }: ITransactionProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore(Collection.TRANSACTION);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <Fragment>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name: </span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount($): </span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </Fragment>
  );
};
