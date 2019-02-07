import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import {Chart} from 'Chart.js';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {employees: Employee[];
  constructor(private _employeeService: EmployeeService) { }
  LineChart = [];
   ngOnInit() {
    this.getEmployees();

    this.LineChart = new Chart('LineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '2018',
            data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10],
            borderColor: '#3e95cd',
            fill: false
          }
        ]
      },  options: {
        title: {
          display: true,
          text: 'Employee Registration'
        }
      }
  });


  this.LineChart = new Chart('Barchart', {
    type: 'horizontalBar',
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    },  options: {
      title: {
        display: true,
        text: 'Employee Registration'
      }
    }
});

}
   public getEmployees() {
    this._employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  }
}
