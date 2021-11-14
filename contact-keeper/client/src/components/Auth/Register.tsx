import { useState, ChangeEvent, FormEvent } from "react";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const { name, email, password, passConfirm } = user;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div id="FormContainer">
      <h1>
        Account <span className="RegisterText">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="FormGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="FormGroup">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="FormGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="passConfirm">Confrim Password</label>
          <input
            type="passConfirm"
            name="passConfirm"
            value={passConfirm}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Register" className="SubmitButton" />
      </form>
    </div>
  );
};
