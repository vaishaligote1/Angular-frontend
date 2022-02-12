import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url: string = "http://localhost:3000/Employee";
  regiterURL: string = "http://localhost:8089/api/registerEmployee";
  findAllURL: string = "http://localhost:8089/api/findAllEmployees";
  commonUrl: string="http://localhost:8089";
  constructor(private httpClient: HttpClient) { }

  saveEmployee(emp: Employee): Observable<Employee> {
    console.log("in service of saveEmployee" + emp.email);
    console.log("in service of saveEmployee   " + this.url);
    return this.httpClient.post<Employee>(this.regiterURL, emp);
  }

  getdata(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }

  deleteData(id:number){
    return this.httpClient.delete(this.url+"/"+id);
  }

  getEmployee(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+"/"+id)
  }

  updateEmployee(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.url+'/'+emp.id,emp)
  }
}
