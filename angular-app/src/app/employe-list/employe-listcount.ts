import {Component, Input, Output,EventEmitter} from'@angular/core';

@Component({
    selector:'employeeCountComp',
    template:`
        <span class="radioClass"> Show:</span>
        <input type="radio" name="options" value="All" [(ngModel)]="selectedRadioBtnValue" (change)="onRadioBtnChanged()"/>
        <span class="radioClass">{{"All("+all+")"}}</span> 
        <input type="radio" name="options" value="Male" [(ngModel)]="selectedRadioBtnValue" (change)="onRadioBtnChanged()"/>
        <span class="radioClass">{{"Male("+male+")"}}</span> 
        <input type="radio" name="options" value="Female" [(ngModel)]="selectedRadioBtnValue" (change)="onRadioBtnChanged()"/>
        <span class="radioClass">{{"Female("+female+")"}}</span> 
    `
})

export class EmployeeCount{

    selectedRadioBtnValue: string="All";

    @Output()
    countRadioBtnSelectedChanged: EventEmitter<string>= new EventEmitter<string>();

    @Input()
    all!:number;

    @Input()
    male!:number;
    
    @Input()
    female!:number;

    onRadioBtnChanged(){
        this.countRadioBtnSelectedChanged.emit(this.selectedRadioBtnValue);
    }

}