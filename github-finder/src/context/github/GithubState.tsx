import { useReducer } from "react";
import axios from "axios";
import { githubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import { IState } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

interface ChildProps {
  children?: JSX.Element;
}

export const GithubState = ({ children }: ChildProps) => {
  const initialState: IState = {
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};
