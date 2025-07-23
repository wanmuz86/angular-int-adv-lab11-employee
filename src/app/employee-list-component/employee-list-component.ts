import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { Signal } from '@angular/core';
import { EmployeeListItemComponent } from '../employee-list-item-component/employee-list-item-component';
@Component({
  selector: 'app-employee-list-component',
  imports: [EmployeeListItemComponent],
  templateUrl: './employee-list-component.html',
  styleUrl: './employee-list-component.css'
})
export class EmployeeListComponent {

  employees!:Signal<Employee[]>;

  constructor(private employeeService:EmployeeService){
    // Retieve the employees from the service inside constructor
    this.employees = this.employeeService.employees;
  }

 

}
