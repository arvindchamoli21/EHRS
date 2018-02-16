import { Component , Input , OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    template: `  You Entered {{ smpleInput }}
              `

})
export class SimpleComponent implements OnChanges {

    @Input() smpleInput: string;
    //// Implement onChanges interfac for componenet lifecycle
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': CurrentValue = ' + current + ', PreviousValue= ' + previous + '');
        }


    } 
}