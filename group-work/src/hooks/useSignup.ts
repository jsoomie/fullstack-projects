import { useState, useEffect } from "react";
import { auth } from "firebase";
import { useAuthContext } from "hooks";
import { Actions } from "actions";
import { IHook, IUseSignup, Error, ISignup } from "interfaces";

export const useSignup: IHook<IUseSignup> = () => {
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
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

  return { error, isPending, signup };
};
