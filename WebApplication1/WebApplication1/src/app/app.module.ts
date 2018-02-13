import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeelist.componenet';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCount } from './employee/employeeCount.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCount],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
