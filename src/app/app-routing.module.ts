import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { routercontent } from './employee/routes/routes';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:EmployeeLoginComponent},
  {path:"login/register",component:EmployeeRegisterComponent},
  {path:"login/employee", children:routercontent},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
