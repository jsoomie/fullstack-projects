import { useEffect, useState } from "react";
import { IRecipe } from "interfaces";
import { projectFirestore } from "firebase";
import { RecipeList } from "components";
import { DB } from "firebase";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState<IRecipe[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection(DB.RECIPES).onSnapshot(
      (res) => {
        if (res.empty) {
          setError("No recipe to load...");
          setIsPending(false);
        } else {
          let results: IRecipe[] = [];
          res.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() } as IRecipe);
          });
          setData(results);
          setIsPending(false);
        }
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
