import { Component, OnInit, NgZone } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import 'rxjs/add/operator/toPromise' 

@Component({
    selector: 'my-empList',
    templateUrl: '/src/app/employee/employeelist.component.html',
    styleUrls: ["./employeelist.component.css"],
    providers: [EmployeeService]

})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];// contructor 
    comments: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor(private _employeeservice: EmployeeService, private zone: NgZone) {
    }
 
    //ngOnInit() {
    //    debugger;
    //    this._employeeservice.getComments().subscribe((employeeData) => this.employees == employeeData);//// This is the Use of suscribe method for observable service method
    //    console.log(this.employees);
       
    //}

    ngOnInit() {
        this.zone.run(() => {
            this.getComments().toPromise().then((data) => {
                this.employees = data || [];
            });
        })
        this._employeeservice.getEmployees().subscribe(
            data => this.comments = data,
            error => console.log(error)
           );
    }

    getComments() {
        return this._employeeservice.getComments();
    }

    getEmployees() {
        return this._employeeservice.getEmployees();
    }

    onEmployeeCountRadioButtonChange(selectRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
    }

    getTotalEmployee(): number {
        return this.employees.length;
    }
    getTotalMaleEmployee(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployee(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
}