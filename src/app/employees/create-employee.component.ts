import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm: FormGroup;
dateOfBirth: any;
datePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false
      });
  }

  ngOnInit() {
    this.employeeForm = new FormGroup(
      {
        firstname: new FormControl(),
        email : new FormControl(),
        mobNo : new FormControl(),
      //  dateOfBirth: new FormControl()
        dateOfBirth: new FormControl('05-01-2019'),
      }
    );
  }

  onSubmit(): void {
  console.log(this.employeeForm.value);
  }

}
