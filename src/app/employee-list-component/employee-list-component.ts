import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { Signal, signal,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeListItemComponent } from '../employee-list-item-component/employee-list-item-component';
@Component({
  selector: 'app-employee-list-component',
  imports: [EmployeeListItemComponent, FormsModule],
  templateUrl: './employee-list-component.html',
  styleUrl: './employee-list-component.css'
})
export class EmployeeListComponent {

  // employees!:Signal<Employee[]>;
  
  // To hold the search term in the input field
  searchTerm = signal<string>('');

  filteredEmployees = computed(()=>
  this.employeeService.employees().filter(employee=> employee.name.toLowerCase().includes(
    this.searchTerm().toLowerCase()
  )))

  constructor(private employeeService:EmployeeService){
    // Retieve the employees from the service inside constructor
   // this.employees = this.employeeService.employees;
  }

   handleDeleteEmployee(id: number) {
    // Emit an event to delete the employee
    // This method should be implemented in the parent component
    // Same as non signal use @Output()

    console.log(`Delete employee with id: ${id}`);
    this.employeeService.deleteEmployee(id);
  }
 

}
