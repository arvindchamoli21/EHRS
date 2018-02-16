import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]>
    {
        return this._http.get("http://localhost:50034/api/employees")
            .map((response:Response)=> <IEmployee[]> response.json());//// Convert and map the data to response observable
    }
}

//[
//    { empcode: 'e101', name: 'Arvind chamoli', salary: 15478, gender: 'Male', dob: '02/12/2018' },
//    { empcode: 'e102', name: 'Vijendra Kumar', salary: 215478, gender: 'Male', dob: '02/12/2018' },
//    { empcode: 'e103', name: 'Gaurav Udawat', salary: 35478, gender: 'Male', dob: '02/12/2018' },
//    { empcode: 'e104', name: 'Dharmendra Kumar', salary: 35478, gender: 'Male', dob: '02/12/2018' },
//    { empcode: 'e105', name: 'Shruti Pandey', salary: 3000, gender: 'Female', dob: '04/12/2018' },
//    { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' },
//    { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' },
//    { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' },
//    { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' }

//];