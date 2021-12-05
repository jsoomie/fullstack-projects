import { useEffect, useState, useRef } from "react";
import { db } from "firebase";
import {
  DocumentData,
  WhereFilterOp,
  OrderByDirection,
} from "@firebase/firestore";

export type QueryString = [string, WhereFilterOp, string];
export type OrderByString = [string, OrderByDirection];
export const useCollection = (
  collection: string,
  _query?: QueryString | null,
  _orderBy?: OrderByString | null
) => {
  const [documents, setDocuments] = useState<DocumentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // if we dont use a ref --> infinite loop in useFfect
  // _query is an array is "different" on every function call
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref: DocumentData;
    ref = db.collection(collection);

    if (query && !orderBy) {
      ref = db.collection(collection).where(...query);
    }
    if (orderBy && query) {
      ref = db
        .collection(collection)
        .where(...query)
        .orderBy(...orderBy);
    }

    const unsub = ref.onSnapshot(
      (snap: DocumentData) => {
        let results: DocumentData[] = [];
        snap.docs.forEach((doc: DocumentData) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error: any) => {
        console.log(error);
        setError(error.message);
      }
    );
    return () => unsub();
  }, [collection, query, orderBy]);

  return { documents, error };
};
