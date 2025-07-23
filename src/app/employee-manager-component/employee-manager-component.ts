import { Component } from '@angular/core';
import { EmployeeAddComponent } from "../employee-add-component/employee-add-component";
import { EmployeeListComponent } from '../employee-list-component/employee-list-component';

@Component({
  selector: 'app-employee-manager-component',
  imports: [EmployeeAddComponent, EmployeeListComponent],
  templateUrl: './employee-manager-component.html',
  styleUrl: './employee-manager-component.css'
})
export class EmployeeManagerComponent {

}
