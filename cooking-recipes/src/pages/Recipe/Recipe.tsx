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

    const unsub = projectFirestore
      .collection(DB.RECIPES)
      .doc(id)
      .onSnapshot(
        (res) => {
          if (res.exists) {
            setData({ id: res.id, ...res.data() } as IRecipe);
            setIsPending(false);
          } else {
            setError("Could not find that recipe");
            setIsPending(false);
          }
        },
        (error) => {
          setError(error.message);
          setIsPending(false);
        }
      );

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection(DB.RECIPES).doc(id).update({
      title: "Veggie Pie",
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
