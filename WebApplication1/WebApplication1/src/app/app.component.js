"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.company = 'icreon';
        this.isDisable = false;
    }
    AppComponent.prototype.onClick = function () {
        console.log('Button clciked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n               <h1>Hello {{name}}</h1>\n               <my-emp></my-emp>\n               <br/>\n               <button [disabled] = 'isDisable'>Click Me </button>\n               <button (click) = 'onClick()'>Click</button>\n\n               event binding\n\n               Name : <input [value]= 'name' (input)= 'name = $event.target.value'/>\n               <br/>\n               You have entered : {{name}}\n               <br/>  <br/>\n               Company : <input [(ngModel)]= 'company'/>\n                <br/>\n               You Company entered : {{company}}\n\n               <br/>\n               Employee List Using *ngFor\n               ========================\n               <my-empList></my-empList>\n\n\n              "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map