import {IGithubOwner} from './GithubOwner';

export interface IGithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IGithubOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
}
