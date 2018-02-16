"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get("http://localhost:50034/api/employees")
            .map(function (response) { return response.json(); }); //// Convert and map the data to response observable
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
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
//# sourceMappingURL=employee.service.js.map