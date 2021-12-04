import { useEffect, useState } from "react";
import { auth } from "firebase";
import { useAuthContext } from "hooks";
import { Actions } from "actions";
import { Error, Pending, IHook, IUseLogout } from "interfaces";

export const useLogout: IHook<IUseLogout> = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState<Error>(null);
  const [isPending, setIsPending] = useState<Pending>(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await auth.signOut();
      dispatch!({ type: Actions.LOGOUT });
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error: any) {
      if (!isCanceled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { logout, error, isPending };
};
