import {IGithubRepository} from './GithubRepository';

export interface IFindRepositories {
  total_count: number;
  incomplete_results: boolean;
  items: IGithubRepository [];
}
