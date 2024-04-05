import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent {
  firstName: string = '';
  lastName: string = '';
  outputTemplate: string = '';

  modelChangeFn(value) {
    this.outputTemplate = `First Name: ${value} Last Name: ${this.lastName}`;
  }

  modelChangeLn(value) {
    this.outputTemplate = `First Name: ${this.firstName} Last Name: ${value}`;
  }
  setFirstNameTemplate() {
    this.firstName = 'John';
    this.outputTemplate = `First Name: ${this.firstName} Last Name: ${this.lastName}`;
  }

  clearFirstNameTemplate() {
    this.firstName = '';
    this.lastName = '';
    this.outputTemplate = '';
  }
}
