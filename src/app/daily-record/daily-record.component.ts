import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AddDailyRecordService} from '../Services/add-daily-record.service';

@Component({
  selector: 'app-daily-record',
  templateUrl: './daily-record.component.html',
  styleUrls: ['./daily-record.component.css']
})
export class DailyRecordComponent implements OnInit {

  constructor(private adddailyrecordservice:AddDailyRecordService) { }
  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  ngOnInit(): void {
  }
  Message:any;
  servicefee:any;
  remainingfee:any;
  feePaid(x:any){
    this.remainingfee=this.servicefee-x.target.value;
  }
  serviceFee(fee:any){
    this.servicefee=fee.target.value;
    this.remainingfee=fee.target.value;
  }
  addData(data:any){
    this.adddailyrecordservice.saveDailyRecordDataToDB(data).subscribe((res)=>{
      console.warn(res);
      this.Message=res;
    });
  }
}
