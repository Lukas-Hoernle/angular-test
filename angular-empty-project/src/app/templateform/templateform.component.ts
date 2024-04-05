import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  firstName: string = '';
  lastName: string = '';
  outputTemplate: string = '';
  
  setFirstNameTemplate() {
    this.outputTemplate = `First Name: ${this.firstName} Last Name: ${this.lastName}`;
  }

  clearFirstNameTemplate() {
    this.firstName = '';
    this.lastName = '';
    this.outputTemplate = '';
  }
}
