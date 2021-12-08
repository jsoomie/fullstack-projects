import { useState, useEffect } from "react";
import { auth } from "firebase";
import { useAuthContext } from "hooks";
import { Error, IHook, IUseLogin, ILogin } from "interfaces";
import { Actions } from "actions";

export const useLogin: IHook<IUseLogin> = () => {
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const login: ILogin = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      dispatch!({ type: Actions.LOGIN, payload: res.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error: any) {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };
};
