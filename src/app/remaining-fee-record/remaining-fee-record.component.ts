import { Component, OnInit } from '@angular/core';
import {GetAllDailyDataService} from '../Services/get-all-daily-data.service';

@Component({
  selector: 'app-remaining-fee-record',
  templateUrl: './remaining-fee-record.component.html',
  styleUrls: ['./remaining-fee-record.component.css']
})
export class RemainingFeeRecordComponent implements OnInit {

  constructor(private getAllDataService:GetAllDailyDataService) { }
  allData:any;
  index:any=0;
  ngOnInit(): void {
    this.getAllDataService.getAllRemainingFeeDataFromDB().subscribe((data)=>{
      console.warn(data);
      this.allData=data;
    })
  }
  remainingBalance:any=0;
  id:any;
  getRemainingBalance(remainingBalance:any,id:any){
    this.remainingBalance=remainingBalance;
    this.id=id;
  }
  updateRemainingFee(data:any){
    console.log("Remaining Data : ",data);
    this.getAllDataService.updateRemainingFeeData(data).subscribe((res)=>{
      console.warn("Updates Data : ",res);
      this.getAllDataService.getAllRemainingFeeDataFromDB().subscribe((data)=>{
        console.warn("All Data : ",data);
        this.allData=data;
        
      })
    })
   
  }
}
