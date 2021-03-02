import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [CreateEmpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
