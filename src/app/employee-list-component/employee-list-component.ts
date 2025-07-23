import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { Signal } from '@angular/core';
@Component({
  selector: 'app-employee-list-component',
  imports: [],
  templateUrl: './employee-list-component.html',
  styleUrl: './employee-list-component.css'
})
export class EmployeeListComponent {

  employees!:Signal<Employee[]>;

  constructor(private employeeService:EmployeeService){
    // Retieve the employees from the service inside constructor
    this.employees = this.employeeService.employees;
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id);
  }

}
