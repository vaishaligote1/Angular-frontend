import { Routes } from "@angular/router";
import { EmployeeRegisterComponent } from "src/app/employee-register/employee-register.component";
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { EmployeeUpdateComponent } from "../employee-update/employee-update.component";
import { EmployeeComponent } from "../employee/employee.component";
import { HomeComponent } from "../home/home.component";
import { ShowEmployeeComponent } from "../show-employee/show-employee.component";

export const routercontent: Routes = [
    {path:'', component:EmployeeComponent,children:[
        {path:'home', component:HomeComponent},
        {path:'employeelist',component:EmployeeListComponent, children:[
          {path:'updateemployee',component:EmployeeUpdateComponent},
          {path:'showdetails/:id',component:ShowEmployeeComponent},
        ]},
          
        {path:'register', component:EmployeeRegisterComponent}
      ]}  
];