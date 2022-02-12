import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../sheared/common.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private commonservice:CommonService, private router:Router) { }
  loginform:any
  ngOnInit(): void {
    this.getloginform()
  }
  getloginform(){
    this.loginform=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  msg:string;
  Error:boolean=false;
  onLogin(){
    alert("login success")
    this.commonservice.logincheck(this.loginform.value).subscribe(employee=>{
      var e=employee;
      if(e){
        this.loginform.reset();
        // localStorage.setItem("employee", JSON.stringify(u));
        this.router.navigate(['login/employee'])
      }
      else{
        this.Error=true;
        this.msg='Wrong Username and Password';
      }
    })
    
  }

}
