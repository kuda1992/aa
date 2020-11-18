import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchResults} from '../models/SearchResults';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  API_KEY = '2932c4ba';
  OMDBAPI = 'http://www.omdbapi.com/';

  constructor(private httpClient: HttpClient) {
  }

  search(searchTerm: string): Observable<SearchResults> {
    return this.httpClient.get<SearchResults>(`${this.OMDBAPI}?apikey=${this.API_KEY}&s=${searchTerm}`);
  }

}
