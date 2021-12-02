import { IProps } from "interfaces";
import { Link } from "react-router-dom";
import { useTheme } from "hooks";
import { deleteIcon } from "assets";
import { projectFirestore } from "firebase";
import "./RecipeList.css";

export const RecipeList = ({ recipes }: IProps) => {
  const { mode } = useTheme();

  const handleClick = (id: string) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={deleteIcon}
            alt="trash can"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};
