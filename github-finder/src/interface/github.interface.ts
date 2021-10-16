export interface UserData {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
  company: string;
}

export interface UserDataResponse {
  items: UserData[];
}

export interface UserDataProps {
  data: UserData;
  loading: boolean;
}
