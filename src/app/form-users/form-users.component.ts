import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {
  customerForm: FormGroup;
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      cardNumber: ['', [Validators.required, Validators.maxLength(16)]],
      cardName: ['', [Validators.required, Validators.maxLength(20)]],
      monthExpiration: ['', [Validators.required, Validators.maxLength(2)]],
      yearExpiration: ['', [Validators.required, Validators.maxLength(2)]],
      cardCvc: ['', [Validators.required]],
    });

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'John',
      lastName: 'Black',
      emailGroup: { email: 'jack@gmail.com', confirmEmail: 'jack@gmail.com' },
      cardNumber: '1212121212121212',
      cardName: 'JOHN BLACK',
      monthExpiration: '10',
      yearExpiration: '23',
      cardCvc: '2923',
    });
  }

  save() {
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    console.log(this.validationMessages);
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join(' ');
    }
  }

}
