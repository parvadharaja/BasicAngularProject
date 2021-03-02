import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {demoComponent} from './demmo/demo.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { HelloComponent } from './hello/hello.component';
import { PageNotFoundComponent } from './others/pafeNotFound.component';
import {CreateEmployeecanDeactivateService} from './route-guard.service';
import {CreateEmpComponent} from './shared/create-emp/create-emp.component'

const routes: Routes = [
  {path:'home', component:demoComponent},
  {path:'empdetails', component:EmployeListComponent},
  {path:'empcreatedetails', component:CreateEmpComponent, canDeactivate:[CreateEmployeecanDeactivateService]},
  {path:'', component:HelloComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CreateEmployeecanDeactivateService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
