import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private _fb:FormBuilder, private common:CommonService, private locations:Location) { }

  updateForm: FormGroup;

  ngOnInit(): void {
    this.updateForm = this._fb.group({
      id:[],
      ename:[''],
      email:[''],
      mobile:[''],
      designation:[''],
      username:[''],
      password:['']
    })
    this.editData();
  }

  editData(){
    let empObj:any =this.locations.getState();
    console.log("getState() "+empObj.id);
    if(empObj.id!=0){
          this.updateForm.get('id').setValue(empObj.id);
          this.updateForm.get('ename').setValue(empObj.ename);
          this.updateForm.get('email').setValue(empObj.email);
          this.updateForm.get('mobile').setValue(empObj.mobile);
          this.updateForm.get('designation').setValue(empObj.designation);
          this.updateForm.get('username').setValue(empObj.username);
          this.updateForm.get('password').setValue(empObj.password);
    }
  }
  goBack() {
    this.locations.back();
  }

  onSubmit(){
    this.common.updateEmployee(this.updateForm.value).subscribe();
    this.locations.back();
  }
}
