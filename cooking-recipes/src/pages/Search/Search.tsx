import { useLocation } from "react-router-dom";
import { IRecipe } from "interfaces";
import { useFetch } from "hooks";
import { RecipeList } from "components";
import "./Search.css";

export const Search = () => {
  const queryString = useLocation().search;
  const query = new URLSearchParams(queryString).get("q");
  const localURL = `http://localhost:8000/recipes?q=${query}`;
  const { error, isPending, data } = useFetch<IRecipe[]>(localURL);

  return (
    <div>
      <h2 className="page-title">Recipes including: "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
