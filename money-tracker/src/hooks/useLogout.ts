import { useState } from "react";
import { auth } from "firebase";
import { useAuthContext } from "hooks";
import { Actions } from "actions";
import { Error, Pending, IHook, IUseLogout } from "interfaces";

export const useLogout: IHook<IUseLogout> = () => {
  const [error, setError] = useState<Error>(null);
  const [isPending, setIsPending] = useState<Pending>(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await auth.signOut();
      dispatch!({ type: Actions.LOGOUT });
      setIsPending(false);
      setError(null);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { logout, error, isPending };
};
