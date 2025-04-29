import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      department: 'HR',
      createdAt: '2023-01-01',
      updatedAt: '2023-04-01'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      department: 'Finance',
      createdAt: '2023-02-15',
      updatedAt: '2023-03-20'
    }
  ];

}
