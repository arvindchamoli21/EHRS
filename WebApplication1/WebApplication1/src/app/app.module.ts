import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeelist.componenet';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCount } from './employee/employeeCount.component';
import { SimpleComponent } from './Simple/simple'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCount, SimpleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
