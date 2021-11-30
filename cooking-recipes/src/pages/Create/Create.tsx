import { useState, ChangeEvent, FormEvent } from "react";
import "./Create.css";

export const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
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

        {/* ingredients go here */}

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
