import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passwordStrengthRegEx: RegExp = new RegExp(
  '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*'
);

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    // At least one upper, one lower case, one numeric value
    const validPassword = passwordStrengthRegEx.test(value);
    return !validPassword ? { passwordStrength: true } : null;
  };
}
