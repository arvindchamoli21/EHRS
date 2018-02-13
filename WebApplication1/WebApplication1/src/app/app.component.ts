import { Component } from '@angular/core';

//import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeelist.componenet';

@Component({
    selector: 'my-app',
    template: `
                     <h1>Employee List Using * ngFor</h1>
                     <br/>
                     <my-empList></my-empList>
              `
})
export class AppComponent  {
    name = 'Angular';
    company: string = 'icreon';
    isDisable: boolean = false;

    onClick(): void {
    }

}
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
