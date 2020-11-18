import {AbstractControl} from '@angular/forms';

const hasSpecialCharacters = (value: string): boolean => {
  return !!/[~`!#$%.\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(value);
};

export function specialCharactersCheck(control: AbstractControl): any {
  return hasSpecialCharacters(control.value) && control.value !== '' ? {hasSpecialCharacters: true} : null;
}
