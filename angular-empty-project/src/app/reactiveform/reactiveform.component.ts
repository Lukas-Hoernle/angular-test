import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  reactiveForm: FormGroup;
  outputTemplate: string;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }
  ngOnInit() {
    this.reactiveForm.valueChanges
      .pipe(
        map((value) => {
          var firstName, lastName;
          return ({ firstName, lastName } = value || {});
        })
      )
      .subscribe(({ firstName, lastName }) => {
        this.outputTemplate = `First Name: ${firstName} Last Name: ${lastName}`;
      });
  }

  setFirstNameReactive() {
    var firstName = this.reactiveForm.get('firstName').value;
    if (firstName == null) {
      firstName = 'John';
      this.reactiveForm.controls.firstName.setValue('John');
    }

    const lastName = this.reactiveForm.get('lastName').value;
    this.outputTemplate = `First Name: ${firstName} Last Name: ${lastName}`;
  }

  clearFirstNameReactive() {
    this.reactiveForm.reset();
    this.outputTemplate = '';
  }
}
