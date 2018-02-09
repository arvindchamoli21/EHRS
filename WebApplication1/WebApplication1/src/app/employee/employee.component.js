"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import angular component
var core_1 = require("@angular/core");
// Decorader
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.firstName = 'Arvind';
        this.lastName = 'Chamoli';
        this.age = 34;
        this.salary = 254784;
        this.firstName1 = 'Gaurav';
        this.lastName1 = 'Icreon';
        this.age1 = 34;
        this.salary1 = 254784;
        this.showDetails = false;
    }
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-emp',
            templateUrl: '/src/app/employee/employee.component.html',
            styleUrls: ['/src/app/employee/employee.component.css']
        })
        /// Class Declaration
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map