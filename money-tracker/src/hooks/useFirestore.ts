import { useReducer, useEffect, useState } from "react";
import { db } from "firebase";
import { DocumentData } from "firebase/firestore";

////
// Interfaces and Types
interface IState {
  document: DocumentData | null;
  isPending: boolean;
  error: string | null;
  success: boolean | null;
}

// interface IDocument {
//   name: string;
//   amount: string;
// }

type Action =
  | { type: Actions.IS_PENDING }
  | { type: Actions.ADDED_DOCUMENT; payload: DocumentData }
  | { type: Actions.ERROR; payload: string };

////
// Initial State
const initState: IState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

////
// Actions
enum Actions {
  TEST = "TEST",
  IS_PENDING = "IS_PENDING",
  ADDED_DOCUMENT = "ADDED_DOCUMENT",
  ERROR = "ERROR",
}

////
// Reducer
const firestoreReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case Actions.IS_PENDING:
      return {
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case Actions.ADDED_DOCUMENT:
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case Actions.ERROR:
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

////
// Hook
export const useFirestore = <T extends string>(collection: T) => {
  const [response, dispatch] = useReducer(firestoreReducer, initState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = db.collection(collection);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (act: Action) => {
    if (!isCancelled) {
      dispatch(act);
    }
  };

  // add document
  const addDocument = async (doc: DocumentData) => {
    dispatch({ type: Actions.IS_PENDING });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCancelled({
        type: Actions.ADDED_DOCUMENT,
        payload: addedDocument,
      });
    } catch (error: any) {
      dispatchIfNotCancelled({ type: Actions.ERROR, payload: error.message });
    }
  };

  // delete document
  const deleteDocument = async (id: string) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
