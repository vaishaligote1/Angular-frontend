import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/sheared/common.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  updateform:any;
  constructor(private fb:FormBuilder,private location:Location, private commonservice:CommonService, private activatedrouter:ActivatedRoute) {
    this.emp=this.location.getState()
    console.log(this.emp);  
   }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.updateform=this.fb.group({
      eid:[''],
      ename:['',[Validators.required]],
      email:['',[Validators.required]],
      mobno:this.fb.array([]),
      password:['',[Validators.required]],
    });
    this.updateform.get('eid').setValue(this.emp.eid)
    this.updateform.get('ename').setValue(this.emp.ename)
    this.updateform.get('email').setValue(this.emp.email)
    this.updateform.get('password').setValue(this.emp.password)
    for(let mbileno of this.emp.mobno){
      // console.log(mbileno);
      this.mobileArray.push(this.getmobileno1(mbileno));
    }
 
  }
  
  emp:any;
  getmobileno(){
    return this.fb.group({
      mobid:[],
      mobileno:['']
    })
  }
  getmobileno1(mobileno){
    return this.fb.group({
      mobid:[mobileno.mobid],
      mobileno:[mobileno.mobileno]
    })
  }
  addmobileno(){
    this.mobileArray.push(this.getmobileno());
  }
  removemobileno(index){
    this.mobileArray.removeAt(index);
  }
  get mobileArray(){
    return <FormArray>this.updateform.get('mobno')
  }

  
  onUpdate(){
  
    this.commonservice.putdata(this.updateform.value).subscribe(emp=>{
      console.log(emp);
    })
    this.updateform.reset()
  }

}
