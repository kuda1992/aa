export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  totalSeasons: number;
  Response: boolean;
}

export interface Rating {
  Source: string;
  Value: string;
}
