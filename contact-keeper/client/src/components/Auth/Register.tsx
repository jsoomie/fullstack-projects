import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "context";
import { Alert } from "..";
import "./LoginRegister.css";

export const Register = () => {
  const { setAlert, alerts } = useContext(AlertContext);

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
    if (name === "" || email === "" || email === "") {
      setAlert("Please enter all fields", "Warning");
    } else if (password !== passConfirm) {
      setAlert("Passwords do not match", "Warning");
    } else {
      console.log("Registered!");
    }
  };

  return (
    <div className="FormContainer">
      <h1>
        Account <span className="RegisterText">Register</span>
      </h1>
      {alerts.length > 0 && <Alert />}
      <form onSubmit={onSubmit}>
        <div className="FormGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength={6}
            required
          />
        </div>
        <div className="FormGroup">
          <label htmlFor="passConfirm">Confrim Password</label>
          <input
            type="password"
            name="passConfirm"
            value={passConfirm}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Register" className="SubmitButton" />
      </form>
      <Link to="/login" className="LoginRegister">
        Click here to login!
      </Link>
    </div>
  );
};
