"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { empcode: 'E101', name: 'Arvind chamoli', salary: '15478', gender: 'Male' },
            { empcode: 'E102', name: 'Vijendra Kumar', salary: '215478', gender: 'Male' },
            { empcode: 'E103', name: 'Gaurav Udawat', salary: '35478', gender: 'Male' }
        ];
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-empList',
            templateUrl: '/src/app/employee/employeelist.component.html',
            styleUrls: ["./employeelist.component.css"]
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeelist.componenet.js.map