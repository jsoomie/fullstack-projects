import confusedImage from "./img/confused.jpg";
import "./Error.css";

export const Error = () => {
  return (
    <div id="ErrorPage">
      <img src={confusedImage} alt="confused" />

      <h1>404 - Missing Page</h1>
      <p>The page you are looking for is either missing or doesn't exist</p>
      <a href="/">Click here to return to homepage</a>
    </div>
  );
};
