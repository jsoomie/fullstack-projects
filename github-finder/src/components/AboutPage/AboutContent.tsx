import "./AboutContent.css";

export const AboutContent = (): JSX.Element => {
  return (
    <div id="About">
      <h1>About this app!</h1>
      <p>App to search Github users and contains links to their profiles</p>
      <p className="footer">version: 0.0.1</p>
    </div>
  );
};
