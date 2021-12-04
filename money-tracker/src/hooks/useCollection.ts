import { useEffect, useState, useRef } from "react";
import { db } from "firebase";
import { DocumentData, WhereFilterOp } from "@firebase/firestore";

type QueryString = [string, WhereFilterOp, string];
export const useCollection = (
  collection: string,
  _query: QueryString | null
) => {
  const [documents, setDocuments] = useState<DocumentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // if we dont use a ref --> infinite loop in useFfect
  // _query is an array is "different" on every function call
  const query = useRef(_query).current;

  useEffect(() => {
    let ref: DocumentData;
    if (query) {
      ref = db.collection(collection).where(...query);
    } else {
      ref = db.collection(collection);
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
  }, [collection, query]);

  return { documents, error };
};
