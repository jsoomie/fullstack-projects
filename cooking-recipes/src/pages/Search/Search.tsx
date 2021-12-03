import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IRecipe } from "interfaces";
import { RecipeList } from "components";
import { DB, projectFirestore } from "firebase";

export const Search = () => {
  const queryString = useLocation().search;
  const query = new URLSearchParams(queryString).get("q");
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
          if (query) {
            setData(
              results.filter((doc) => doc.title.toLowerCase().includes(query))
            );
            setIsPending(false);
          } else {
            setError("No query search found...");
            setIsPending(false);
          }
        }
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [query]);

  return (
    <div>
      <h2 className="page-title">Recipes including: "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
