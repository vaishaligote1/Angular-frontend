import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/sheared/common.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private commonservice:CommonService, private activatedroute:ActivatedRoute) { }
  emp:Employee;
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(param=>{
      this.commonservice.editdata(parseInt(param.get('id'))).subscribe(data=>{
        this.emp=data;        
      })
    }) 
  }

}
