import { useState, useRef, ChangeEvent, FormEvent, MouseEvent } from "react";
import { projectFirestore, DB } from "firebase";
import { useNavigate } from "react-router-dom";
import "./Create.css";

export const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientInput = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: `${cookingTime} minutes`,
    };

    try {
      await projectFirestore.collection(DB.RECIPES).add(doc);
      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prev: string[]) => [...prev, ing]);
    }
    setNewIngredient("");
    ingredientInput.current!.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewIngredient(e.target.value)
              }
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
        </label>

        {ingredients.length ? (
          <p>
            Current Ingredients:{" "}
            {ingredients.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </p>
        ) : null}

        <label>
          <span>Recipe Method: </span>
          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMethod(e.target.value)
            }
            value={method}
            required
          ></textarea>
        </label>

        <label>
          <span>Cooking Time (Minutes): </span>
          <input
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCookingTime(e.target.value)
            }
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
