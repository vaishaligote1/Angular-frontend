import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private _fb:FormBuilder, private commonService: CommonService, private location:Location) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group(
      {
        id:[],
        ename:[''],
        email:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        password:['']
      }
    )
  }
  onSubmit()
  {
    if(this.registerForm.valid){
      console.log("in submit method");
      this.commonService.saveEmployee(this.registerForm.value).subscribe();
    }
  }

  goBack(){
      this.location.back();
  }
}
