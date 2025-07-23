import { Component, signal } from '@angular/core';
import { EmployeeManagerComponent } from "./employee-manager-component/employee-manager-component";

@Component({
  selector: 'app-root',
  imports: [EmployeeManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-signal-lab');
}
