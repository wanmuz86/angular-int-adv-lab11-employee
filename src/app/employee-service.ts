import { Injectable, signal, effect } from '@angular/core';
// Best practice : put inside models folder
// ng g interface models/employee
import { Employee } from './employee';

// Define the Employee interface
//
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  // signal that will hold the list of employees
  // For encapsulation, we will not expose the signal directly
  // Instead, we will expose a readonly version of the signal
  private _employees = signal<Employee[]>([]);
  employees = this._employees.asReadonly();

  // signal that will hold the last id used
  // Everytime we add a new employee, we will increment this id => update
  private _lastId = signal<number>(1); 

  // use effect to log the employees whenever they change
  // Whenever the signal changes, the effect will run
  constructor() {
    effect(() => {
      console.log('Employees changed:', this._employees());
    });
  }

  addEmployee(name:string, department:string){
    const newEmployee:Employee = {
      id: this._lastId(),
      name: name,
      department: department
    }
    // Update the last id
    this._lastId.update(prev => prev+1)
    // Add the new employee to the list of signal employees
    // Array spread operator to create a new array with the new employee
    this._employees.update(prev=> [...prev, newEmployee]);
  }

  deleteEmployee(id:number){
    // Remove the employee with the given id from the list of employees
    this._employees.update(prev=> prev.filter(val => val.id !== id));
  }


}
