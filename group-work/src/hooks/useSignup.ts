import { useState, useEffect, useReducer } from "react";
import { auth } from "firebase";

enum Actions {
  LOGIN = "LOGIN",
}

export interface IHook<T> {
  (): T;
}

export interface IErrorPending {
  error: string | null;
  isPending: boolean;
}

export interface IUseSignup extends IErrorPending {
  signup: ISignup;
}

export interface ISignup {
  (email: string, password: string, displayName: string): void;
}

export type Action = { type: Actions.LOGIN; payload: any };
export const signUpReducer = (state: any, action: Action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
  }
};

const initState = {
  data: null,
};

export const useSignup = () => {
  const [dispatch] = useReducer(signUpReducer, initState);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

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
