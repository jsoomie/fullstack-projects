import { useFetch } from "hooks";
import { IRecipe } from "interfaces";
import { RecipeList } from "components";
import "./Home.css";

export const Home = () => {
  const localURL = "http://localhost:3000/recipes";
  const { data, isPending, error } = useFetch<IRecipe[]>(localURL);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
