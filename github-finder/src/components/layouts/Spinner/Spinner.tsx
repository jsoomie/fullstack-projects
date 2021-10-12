import { SpinnerDotted } from "spinners-react";

export const Spinner = () => {
  return <SpinnerDotted size="150" style={spinner} />;
};

const { spinner } = {
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem auto",
    color: "dodgerblue",
  },
};
