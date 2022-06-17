import { Component, OnInit } from '@angular/core';
import {AddDailyRecordService} from '../Services/add-daily-record.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-daily-record',
  templateUrl: './daily-record.component.html',
  styleUrls: ['./daily-record.component.css']
})
export class DailyRecordComponent implements OnInit {

  constructor(private adddailyrecordservice:AddDailyRecordService) { }
  ngOnInit(): void {
  }
  Message:any;
  servicefee:any;
  remainingfeepayable:any;
  feePaid(x:any){
    this.remainingfeepayable=this.servicefee-x.target.value;
  }
  serviceFee(fee:any){
    this.servicefee=fee.target.value;
    this.remainingfeepayable=fee.target.value;
  }disabled:any=true;
  addData(data:any,form:NgForm){
    console.log(data);
    this.adddailyrecordservice.saveDailyRecordDataToDB(data).subscribe((res)=>{
      console.warn(res);
      this.Message=res;
      form.resetForm();
    });
  }
}