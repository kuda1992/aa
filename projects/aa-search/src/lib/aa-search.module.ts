import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AASearchComponent} from './aa-search.component';


@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AASearchComponent],
  exports: [AASearchComponent]
})
export class AaSearchModule {
}
