import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AaSearchModule} from 'aa-search';

import {AppComponent} from './app.component';
import {ResultsComponent} from './components/results/results.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AaSearchModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
