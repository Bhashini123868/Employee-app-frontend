import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/get-all`);
  }

  createEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}/create`, employee);
  }

  updateEployee(id: number, employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
