import { useReducer, useEffect, useState } from "react";
import { db, timestamp } from "firebase";
import { DocumentData } from "firebase/firestore";

////
// Interfaces and Types
interface IState {
  document: DocumentData | null;
  isPending: boolean;
  error: string | null;
  success: boolean | null;
}

type Action =
  | { type: Actions.IS_PENDING }
  | { type: Actions.ADDED_DOC; payload: DocumentData }
  | { type: Actions.ERROR; payload: string }
  | { type: Actions.DELETED_DOC };

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
  ADDED_DOC = "ADDED_DOCUMENT",
  ERROR = "ERROR",
  DELETED_DOC = "DELETED_DOCUMENT",
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
    case Actions.ADDED_DOC:
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
    case Actions.DELETED_DOC:
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

////
// Hook
export const useFirestore = (collection: string) => {
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
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({
        type: Actions.ADDED_DOC,
        payload: addedDocument,
      });
    } catch (error: any) {
      dispatchIfNotCancelled({ type: Actions.ERROR, payload: error.message });
    }
  };

  // delete document
  const deleteDocument = async (id: string) => {
    dispatch({ type: Actions.IS_PENDING });
    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({
        type: Actions.DELETED_DOC,
      });
    } catch (error: any) {
      dispatchIfNotCancelled({
        type: Actions.ERROR,
        payload: "Could not delete",
      });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
