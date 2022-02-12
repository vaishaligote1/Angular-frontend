import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashbordComponent } from '../dashbord/dashbord.component';

export const headerRoutes: Routes = [
  {
    path:'dashboard', component: DashbordComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  },
  {
    path:'company',
    loadChildren:()=>import('src/app/company/company.module').then(module=>module.CompanyModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('src/app/employee/employee.module').then(module=>module.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
