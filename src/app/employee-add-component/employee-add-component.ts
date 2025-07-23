import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-add-component',
  imports: [FormsModule],
  templateUrl: './employee-add-component.html',
  styleUrl: './employee-add-component.css'
})
export class EmployeeAddComponent {

  constructor(private employeeService: EmployeeService) {

  }

  // Signals to hold the input values for name and department [ ngModel]
  name = signal<string>('');
  department = signal<string>('');

  addEmployee() {
 
    this.employeeService.addEmployee(this.name(), this.department());
    // Reset the input fields after adding the employee
    this.name.set('');
    this.department.set('');
 
  }

}
