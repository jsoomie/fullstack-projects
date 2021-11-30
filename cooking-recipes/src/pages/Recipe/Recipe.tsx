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
      {data && <h1>{data.title}</h1>}
    </div>
  );
};
