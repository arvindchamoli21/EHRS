"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployee = function () {
        return [
            { empcode: 'e101', name: 'Arvind chamoli', salary: 15478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e102', name: 'Vijendra Kumar', salary: 215478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e103', name: 'Gaurav Udawat', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e104', name: 'Dharmendra Kumar', salary: 35478, gender: 'Male', dob: '02/12/2018' },
            { empcode: 'e105', name: 'Shruti Pandey', salary: 3000, gender: 'Female', dob: '04/12/2018' },
            { empcode: 'e106', name: 'Prachi Arora', salary: 20000, gender: 'Female', dob: '05/12/2018' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=service.js.map