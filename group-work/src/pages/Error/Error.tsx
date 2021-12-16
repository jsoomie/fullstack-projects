import "./Error.css";

export const Error = () => {
  return (
    <div className="errordiv">
      <h1>
        <span className="firstQuestion">?</span>?
        <span className="secondQuestion">?</span>
      </h1>
      <h2>404 - Page is missing</h2>
      <p>The page you are looking for is missing or doesn't exist.</p>
      <a href="/">Please click here to return to the homepage</a>
    </div>
  );
};
