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
        return this._http.get("http://localhost:50034/api/Employee/")
            .map((response:Response)=> <IEmployee[]> response.json());//// Convert and map the data to response observable
    }
    getComments(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:50034/api/Employee/").map(
            (response) => {
                let data = response.text() ? response.json() : [{}];
                if (data) {
                    return data;
                }
                return data;
            });
    }
}
