import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {SearchService} from './services/search.service';
import {Movie} from './models/Movie';
import {SearchResults} from './models/SearchResults';
import {CustomValidationMessages} from '../../projects/aa-search/src/lib/aa-search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search Movies';

  validationMessages: CustomValidationMessages = {
    minLength: 'Term must be 2 characters',
    maxLength: 'Term must not exceed 10 characters',
    inValidCharacters: 'Term should not have special characters'
  };
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private searchService: SearchService) {
  }

  onSearchMovie(searchTerm: string): void {
    this.movies$.next([]);
    this.searchService.search(searchTerm).pipe(
      filter((searchResults: SearchResults) => searchResults.Search && searchResults.Search.length > 0),
    )
      .subscribe((searchResults: SearchResults) => {
        this.movies$.next(searchResults.Search);
      }, (() => this.movies$.next([])));
  }

  movies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }
}
