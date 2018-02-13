import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({

    selector: 'emp-count',
    templateUrl: '/src/app/employee/employeeCount.component.html',
    styleUrls: ['/employee/employeeCount.component.css']

})
export class EmployeeCount {

    selectRadioButtonValue: string = 'All';

    @Output() /// output directive
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();/// Custom event using eventemitter

    @Input() //// input directive
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
        console.log(this.selectRadioButtonValue);
    }

}