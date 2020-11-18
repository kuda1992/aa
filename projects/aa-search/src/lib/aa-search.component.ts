import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {specialCharactersCheck} from './utils';


export interface CustomValidationMessages {
  minLength: string;
  maxLength: string;
  inValidCharacters: string;
}

@Component({
  selector: 'lib-aa-search',
  template: `
    <form name="SearchForm" [formGroup]="SearchForm" (ngSubmit)="search(SearchForm.value, SearchForm.valid)">
      <div class="input-group mb-3 border" style="border-radius: 5px"
           [ngClass]="{'border-danger': !SearchForm.valid && SearchForm.get('term')?.touched && this.submitted}">
        <input
          type="text"
          class="form-control"
          aria-label="search"
          formControlName="term"
          placeholder="Search ......">
        <div class="input-group-append">
          <button class="input-group-text" type="submit"><i class="fa fa-search"></i></button>
        </div>
      </div>
      <div class="alert alert-danger" role="alert"
           *ngIf="SearchForm.get('term')?.hasError('required') && SearchForm.get('term')?.touched && this.submitted">
        Term is required
      </div>
      <div class="alert alert-danger" role="alert"
           *ngIf="SearchForm.get('term')?.hasError('minlength') && SearchForm.get('term')?.touched && this.submitted">
        {{validationMessages.minLength}}
      </div>
      <div class="alert alert-danger" role="alert"
           *ngIf="SearchForm.get('term')?.hasError('maxlength') && SearchForm.get('term')?.touched && this.submitted">
        {{validationMessages.maxLength}}
      </div>
      <div class="alert alert-danger" role="alert" *ngIf="
      SearchForm.get('term')?.hasError('hasSpecialCharacters')
      && SearchForm.get('term')?.touched
      && !SearchForm.get('term')?.hasError('minlength')
      && !SearchForm.get('term')?.hasError('maxlength')
      && this.submitted
">
        {{validationMessages.inValidCharacters}}
      </div>
    </form>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./aa-search.component.scss']
})
export class AASearchComponent implements OnInit {

  SearchForm: FormGroup = this.createForm();
  submitted = false;

  @Input() validationMessages: CustomValidationMessages = {
    minLength: 'Term must be 2 characters',
    maxLength: 'Term must not exceed 10 characters',
    inValidCharacters: 'Term should not have special characters'
  };
  @Output() search$: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.SearchForm
      .valueChanges
      .subscribe(() => this.submitted = false);
  }

  createForm(): FormGroup {
    return this.fb.group({
      term: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), specialCharactersCheck]]
    }, {
      updateOn: 'change'
    });
  }

  search(term: any, valid: boolean): void {
    this.submitted = true;
    this.SearchForm.get('term')?.markAsTouched();
    if (valid) {
      this.search$.emit(term.term);
    }
  }

}
