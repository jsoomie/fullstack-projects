import { useReducer } from "react";
import axios from "axios";
import { githubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import { IState, ChildProps } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

export const GithubState = ({ children }: ChildProps) => {
  const initialState: IState = {
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string): Promise<void> => {
    setLoading();
    const GITHUB_ID = `&client_id=${process.env.REACT_APP_GITHUB_ID}`;
    const GITHUB_SECRET = `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const CREDENTIALS = `${GITHUB_ID}${GITHUB_SECRET}`;
    const url = `https://api.github.com/search/users?q=${text}${CREDENTIALS}`;
    const res = await axios.get<{ items: UserData[] }>(url);
    setUsers(res.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

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
