import { useState } from "react";
import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  return (
    <form className="auth-form">
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
        <input type="file" required />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
};
