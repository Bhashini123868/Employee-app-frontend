import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['',[Validators.required]]
    });
  }
  onSubmit(){
    if(this.employeeForm.valid){
      console.log("Form Submited", this.employeeForm.value);
    }else{
      console.log("Form Invalid");
      this.employeeForm.markAllAsTouched();
    }
  }

}
