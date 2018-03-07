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
var employee_service_1 = require("./employee.service");
require("rxjs/add/operator/toPromise");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeservice, zone) {
        this._employeeservice = _employeeservice;
        this.zone = zone;
        this.selectedEmployeeCountRadioButton = 'All';
    }
    //ngOnInit() {
    //    debugger;
    //    this._employeeservice.getComments().subscribe((employeeData) => this.employees == employeeData);//// This is the Use of suscribe method for observable service method
    //    console.log(this.employees);
    //}
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.getComments().toPromise().then(function (data) {
                _this.employees = data || [];
            });
        });
        this._employeeservice.getEmployees().subscribe(function (data) { return _this.comments = data; }, function (error) { return console.log(error); });
    };
    EmployeeListComponent.prototype.getComments = function () {
        return this._employeeservice.getComments();
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        return this._employeeservice.getEmployees();
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
    };
    EmployeeListComponent.prototype.getTotalEmployee = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployee = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployee = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-empList',
            templateUrl: '/src/app/employee/employeelist.component.html',
            styleUrls: ["./employeelist.component.css"],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, core_1.NgZone])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeelist.componenet.js.map