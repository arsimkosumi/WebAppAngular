import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthformComponent } from './authform/authform.component';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';

const routes: Routes = [
  {path: 'authform',component:AuthformComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
