import { useEffect, useState } from "react";
import { IRecipe } from "interfaces";
import { projectFirestore } from "firebase";
import { RecipeList } from "components";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState<IRecipe[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsPending(true);

    const fetchData = async () => {
      const res = await projectFirestore.collection("recipes").get();
      try {
        if (res.empty) {
          setError("No recipe to load...");
          setIsPending(false);
        } else {
          let results: any[] = [];
          res.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
