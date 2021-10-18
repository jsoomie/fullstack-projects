import { useReducer } from "react";
import axios from "axios";
import { githubContext } from "./githubContext";
import { githubReducer, initialState } from "./githubReducer";
import { ChildProps, UserData } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

export const GithubState = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING, payload: true });

  const searchUsers = async (text: string): Promise<void> => {
    setLoading();
    const GITHUB_ID = `&client_id=${process.env.REACT_APP_GITHUB_ID}`;
    const GITHUB_SECRET = `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const CREDENTIALS = `${GITHUB_ID}${GITHUB_SECRET}`;
    const url = `https://api.github.com/search/users?q=${text}${CREDENTIALS}`;
    const res = await axios.get<{ items: UserData[] }>(url);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};
