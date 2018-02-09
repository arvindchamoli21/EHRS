// Import angular component
import { Component } from '@angular/core';

// Decorader

@Component({
    selector: 'my-emp',
    templateUrl : '/src/app/employee/employee.component.html',
    styleUrls:  ['/src/app/employee/employee.component.css']

})
     
/// Class Declaration
export class EmployeeComponent {
    firstName: string = 'Arvind';
    lastName: string = 'Chamoli';
    age: number = 34;
    salary: number = 254784;

    firstName1: string = 'Gaurav';
    lastName1: string = 'Icreon';
    age1: number = 34;
    salary1: number = 254784;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}