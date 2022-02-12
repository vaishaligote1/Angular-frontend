import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/sheared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private commonservice:CommonService) { }
  ngOnInit(): void {
    this.getallemp()
  }
  emplist:Employee[];
  getallemp(){
    this.commonservice.getallemployee().subscribe(emp=>{
      this.emplist=emp;
    })
  }
  page:number=1;
  deletedata(id){
    alert("delete called")
    this.commonservice.deletedata(id).subscribe()
    this.getallemp()
  }

}
