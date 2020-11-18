import {Movie} from './Movie';

export interface SearchResults {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
