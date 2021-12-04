import { useState, useEffect } from "react";
import { auth } from "firebase";
import { useAuthContext } from "hooks";
import { Actions } from "actions";
import { IHook, IUseSignup, Error, Pending, ISignup } from "interfaces";

export const useSignup: IHook<IUseSignup> = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState<Error>(null);
  const [isPending, setIsPending] = useState<Pending>(false);
  const { dispatch } = useAuthContext();

  const signup: ISignup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);

      // Dispatch Login Action
      dispatch!({ type: Actions.LOGIN, payload: res.user });

      if (!res) throw new Error("Could not complete signup");

      if (res.user) await res.user.updateProfile({ displayName });
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

  return { error, isPending, signup };
};
