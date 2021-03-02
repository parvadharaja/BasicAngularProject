
import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmpComponent } from './shared/create-emp/create-emp.component';

@Injectable()
export class CreateEmployeecanDeactivateService implements CanDeactivate<CreateEmpComponent>{
    canDeactivate(component: CreateEmpComponent): boolean{
        if(component.employForm.dirty){
            return confirm('Are u sure to discard ur changes?');
        }
        return true;
    }
}