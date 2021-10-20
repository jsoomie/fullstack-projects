export const Missing = () => {
  return (
    <div style={container}>
      <div style={frown}>😦</div>
      <h1 style={header}>404 - Page Not Found</h1>
      <p style={subtitle}>
        The page you are looking for is either missing or doesn't exist
      </p>
      <a href="/" style={link}>
        Click Here to return to the Home Page
      </a>
    </div>
  );
};

const { container, frown, header, subtitle, link } = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
  },
  frown: {
    fontSize: "10rem",
    margin: "0 auto",
  },
  header: {
    margin: "1rem",
    fontSize: "5rem",
    letterSpacing: "0.3rem",
  },
  subtitle: {
    fontSize: "1rem",
    letterSpacing: "0.3rem",
  },
  link: {
    color: "inherit",
    width: "100%",
    padding: "1rem",
    textAlign: "center" as "center",
    letterSpacing: "0.2rem",
  },
};
