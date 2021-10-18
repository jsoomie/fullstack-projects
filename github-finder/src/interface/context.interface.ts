import { UserData, RepoData } from "./index";

export interface IState {
  users: UserData[];
  repos: RepoData[];
  loading: boolean;
}

export interface ChildProps {
  children?: JSX.Element;
}
