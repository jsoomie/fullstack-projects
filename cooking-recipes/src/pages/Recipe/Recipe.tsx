import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { IRecipe } from "interfaces";
import "./Recipe.css";

export const Recipe = () => {
  const { id } = useParams();
  const localURL = `http://localhost:8000/recipes/${id}`;
  const { data, isPending, error } = useFetch<IRecipe>(localURL);

  return (
    <div className="recipe">
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
        </Fragment>
      )}
    </div>
  );
};
