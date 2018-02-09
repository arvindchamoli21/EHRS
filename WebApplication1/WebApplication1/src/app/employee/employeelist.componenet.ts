import { Component } from '@angular/core';

@Component({
    selector: 'my-empList',
    templateUrl: '/src/app/employee/employeelist.component.html',
    styleUrls: ["./employeelist.component.css"]
    
})

export class EmployeeListComponent {
    employees: any[] = [
        { empcode: 'E101', name: 'Arvind chamoli', salary: '15478', gender: 'Male' },
        { empcode: 'E102', name: 'Vijendra Kumar', salary: '215478', gender: 'Male' },
        { empcode: 'E103', name: 'Gaurav Udawat', salary: '35478', gender: 'Male' }
    ];
}