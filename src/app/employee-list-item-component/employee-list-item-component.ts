import { Component, input } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list-item-component',
  imports: [],
  templateUrl: './employee-list-item-component.html',
  styleUrl: './employee-list-item-component.css'
})
export class EmployeeListItemComponent {

  // Input property to receive the employee data from the parent component 
  // input (with small i) is used to define an input property in Angular that supports signals
  employee = input<Employee>();

  deleteEmployee(id: number) {
    // Emit an event to delete the employee
    // This method should be implemented in the parent component
    console.log(`Delete employee with id: ${id}`);
  }
  
}
