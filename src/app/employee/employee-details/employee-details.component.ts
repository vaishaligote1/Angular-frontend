import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private routes:ActivatedRoute, private common: CommonService,private locations: Location) { }
  
  employeeObj : Employee;

  ngOnInit(): void {
     // first way is snapshot
  // let empId=parseInt(this.routes.snapshot.paramMap.get('id'));
  // this.common.getEmployee(empId).subscribe(data=>{
  //   console.log("Show Employee "+data);
  //   this.employeeObj=data;
  // })
  
  // Second way is Observable
  this.routes.paramMap.subscribe(param1=>{
    this.common.getEmployee(parseInt(param1.get('id'))).subscribe(data=>{
      this.employeeObj=data;
    })
  })
  }
  getback() {
    this.locations.back();
  }
 
}
