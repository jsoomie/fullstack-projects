import { useEffect, useState } from "react";
import { db } from "firebase";
import { DocumentData } from "@firebase/firestore";

export const useCollection = <T extends string>(collection: T) => {
  const [document, setDocument] = useState<DocumentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ref = db.collection(collection);
    const unsub = ref.onSnapshot(
      (snap) => {
        let results: DocumentData[] = [];
        snap.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocument(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );
    return () => unsub();
  }, [collection]);

  return { document, error };
};
