import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:8085/'
  logincheck(loginform):Observable<Employee>{
    return this.http.get<Employee>(this.url+'login/'+loginform.email+'/'+loginform.password)
  }
  postdata(registerform):Observable<Employee>{
    return this.http.post<Employee>(this.url+'register', registerform)
  }
  getallemployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+'getalldata')
  }
  deletedata(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url+'delete/'+id)
  }
  editdata(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.url+"edit/"+id)
  }
  putdata(updateform):Observable<Employee>{
    return this.http.put<Employee>(this.url+'update', updateform)
  }
}
