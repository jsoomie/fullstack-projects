import { useState } from "react";
import { auth } from "firebase";

interface ISignup {
  (emal: string, password: string, displayName: string): void;
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const signup: ISignup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      if (!res) throw new Error("Could not complete signup");

      if (res.user) await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
