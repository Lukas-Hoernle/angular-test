import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  reactiveForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      firstName: '', 
      lastName: '', 
    });
  }

  setFirstNameReactive() {
    const firstName = this.reactiveForm.get('firstName').value;
    const lastName = this.reactiveForm.get('lastName').value;
    this.outputTemplate = `First Name: ${firstName} Last Name: ${lastName}`;
  }

  clearFirstNameReactive() {
    this.reactiveForm.reset();
    this.outputTemplate = ''; 
  }
}
