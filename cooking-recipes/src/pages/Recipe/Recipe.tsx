import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "hooks";
import { IRecipe } from "interfaces";
import { projectFirestore, DB } from "firebase";
import "./Recipe.css";

export const Recipe = () => {
  const [data, setData] = useState<IRecipe | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { mode } = useTheme();
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    const fetchData = async () => {
      const res = await projectFirestore.collection(DB.RECIPES).doc(id).get();
      try {
        if (res.exists) {
          setData({ id: res.id, ...res.data() } as IRecipe);
          setIsPending(false);
        } else {
          setError("Could not find that recipe");
          setIsPending(false);
        }
      } catch (err: any) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection(DB.RECIPES).doc(id).update({
      title: "Something Different",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <Fragment>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </Fragment>
      )}
    </div>
  );
};
