import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeeService } from './employees/employee.service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }





// import {BrowserModule} from "@angular/platform-browser";
// import {NgModule} from "@angular/core";
// import {AgGridModule} from "ag-grid-angular";
// import {AppComponent} from "./app.component";
// import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
// import {RedComponentComponent} from "./red-component/red-component.component";

// @NgModule({
//     declarations: [
//         AppComponent,
//         MyGridApplicationComponent,
//         RedComponentComponent
//     ],
//     imports: [
//         BrowserModule,
//         AgGridModule.withComponents(
//             [RedComponentComponent]
//         )
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }
