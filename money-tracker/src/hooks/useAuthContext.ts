import { AuthContext } from "contexts";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth context must be inside an AuthContextProvider");

  return context;
};
