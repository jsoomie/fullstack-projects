import { useContext } from "react";
import { contactContext } from "../../context";

export const ContactFilter = () => {
  const context = useContext(contactContext);

  return (
    <div>
      <h1>Filter Here</h1>
    </div>
  );
};
