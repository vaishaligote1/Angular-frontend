import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MobileNo } from '../model/mobileno';
import { CommonService } from '../sheared/common.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private commonservice:CommonService) { }

  ngOnInit(): void {
    this.registerform=this.fb.group({
      ename:['',[Validators.required]],
      email:['',[Validators.required]],
      mobno:this.fb.array([this.getmobileno()]),
      password:['',[Validators.required]],
    })
    
  }
  registerform:FormGroup;
  getmobileno(){
    return this.fb.group({
      mobileno:['']
    })
  }
  addmobileno(){
    this.mobileArray.push(this.getmobileno());
  }
  removemobileno(index){
    this.mobileArray.removeAt(index);
  }
  get mobileArray(){
    return <FormArray>this.registerform.get('mobno')
  }

  
  onRegister(){
  
    this.commonservice.postdata(this.registerform.value).subscribe(emp=>{
      console.log(emp);
    })
    this.registerform.reset()
  }
 

}
