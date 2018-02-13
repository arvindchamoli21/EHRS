import { Component } from '@angular/core';
import { IEmployee } from './employee';

@Component({
    selector: 'my-empList',
    templateUrl: '/src/app/employee/employeelist.component.html',
    styleUrls: ["./employeelist.component.css"]
    
})

export class EmployeeListComponent {
    employees: IEmployee[];// contructor 
    selectedEmployeeCountRadioButton: string = 'All';
    constructor()
    {
        this.employees = [
            { empcode: 'e101', name: 'Arvind chamoli', salary: 15478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e102', name: 'Vijendra Kumar', salary: 215478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e103', name: 'Gaurav Udawat', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e104', name: 'Dharmendra Kumar', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e105', name: 'Shruti Pandey', salary: 3000, gender: 'Female', dob: '04/12/2018' },
            { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' }
        ];
    }

    getEmployees(): void {
        this.employees = [
            { empcode: 'e101', name: 'Arvind chamoli', salary: 15478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e102', name: 'Vijendra Kumar', salary: 215478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e103', name: 'Gaurav Udawat', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e104', name: 'Dharmendra Kumar', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e105', name: 'Shruti Pandey', salary: 3000, gender: 'Female', dob: '04/12/2018' },
            { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' },
            { empcode: 'e107', name: 'Shruti Pandey', salary: 3000, gender: 'Female', dob: '04/12/2018' },
            { empcode: 'e108', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' }
        ];

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