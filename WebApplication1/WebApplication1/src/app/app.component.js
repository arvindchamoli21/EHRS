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
        this.usertext = 'Input Test';
        this.name = 'Angular';
        this.company = 'icreon';
        this.isDisable = false;
    }
    AppComponent.prototype.onClick = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<my-empList></my-empList>\n             \n              "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
////Your Text: <input type='text'[(ngModel)] = 'usertext' />
////    <br/><br/ >
////    <simple[smpleInput] ='usertext' > </simple>
////<h1>Employee List Using * ngFor < /h1>
////    < br />
////   <my-empList > </my-empList>
////   < br />
////<h1>Hello { { name } } </h1>
////    < my - emp > </my-emp>
////    < br />
////    <button[disabled] = 'isDisable' > Click Me < /button>
////        < button(click) = 'onClick()' > Click < /button>
////event binding
////Name: <input[value]= 'name'(input) = 'name = $event.target.value' />
////    <br/>
////You have entered: { { name } }
////<br/>  <br/ >
////    Company : <input[(ngModel)]= 'company' />
////        <br/>
////You Company entered: { { company } }
////<br/>
////Employee List Using * ngFor
////    ========================
//# sourceMappingURL=app.component.js.map