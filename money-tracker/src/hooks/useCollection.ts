import { useEffect, useState } from "react";
import { db } from "firebase";
import { DocumentData } from "@firebase/firestore";

export const useCollection = (collection: string) => {
  const [documents, setDocuments] = useState<DocumentData | null>(null);
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
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );
    return () => unsub();
  }, [collection]);

  return { documents, error };
};
