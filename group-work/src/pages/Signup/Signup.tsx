import { useState, ChangeEvent, FormEvent } from "react";
import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailError, setThumbnailError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    let selected: File;
    setThumbnail(null);
    if (e.target.files) {
      selected = e.target.files[0];
      if (!selected) {
        setThumbnailError("Please select an image file");
        return;
      }

      if (!selected.type.includes("image")) {
        setThumbnailError("Selected file must be an image");
        return;
      }

      if (selected.size > 100000) {
        setThumbnailError("Image file size must be less than 100kb");
        return;
      }

      setThumbnailError(null);
      setThumbnail(selected);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>email: </span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
        />
      </label>
      <label>
        <span>password: </span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
      </label>
      <label>
        <span>displayName: </span>
        <input
          type="displayName"
          required
          onChange={(e) => setDisplayName(e.currentTarget.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail: </span>
        <input type="file" required onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
};
