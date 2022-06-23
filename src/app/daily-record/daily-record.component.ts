import { Component, OnInit } from '@angular/core';
import {AddDailyRecordService} from '../Services/add-daily-record.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({ 
  selector: 'app-daily-record',
  templateUrl: './daily-record.component.html',
  styleUrls: ['./daily-record.component.css']
})
export class DailyRecordComponent implements OnInit {

  constructor(private adddailyrecordservice:AddDailyRecordService) { }

  ngOnInit() {
  }
  addRecord = new FormGroup({
    date: new FormControl('',[Validators.required]),
    serviceType: new FormControl('',[Validators.required]),
    serviceDescription: new FormControl('',[Validators.required]),
    serviceFee: new FormControl('',[Validators.required]),
    feePaid: new FormControl('',[Validators.required]),
    remainingFee: new FormControl({value: '', disabled: true}),
    customerName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    customerAddress: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^(0)(3)([0-9]{9})$')]),
  });
  get customerName(){
    return this.addRecord.get("customerName");
  }
  get customerAddress(){
    return this.addRecord.get("customerAddress");
  }
  get remainingFee(){
    return this.addRecord.get("remainingFee");
  }
  get feePaid(){
    return this.addRecord.get("feePaid");
  }
  get serviceFee(){
    return this.addRecord.get("serviceFee");
  }
  get date(){
    return this.addRecord.get("date");
  }
  get serviceDescription(){
    return this.addRecord.get("serviceDescription");
  }
  get serviceType(){
    return this.addRecord.get("serviceType");
  }
  get phoneNumber(){
    return this.addRecord.get("phoneNumber");
  }
  Message:any;
  servicefee:any;
  remainingfeepayable:any;
  feePaidValue:any;
  feePaids(x:any){
    if(x.target.value>this.servicefee || x.target.value<0){
      this.remainingfeepayable=0;
    }
    else{
      this.remainingfeepayable=this.servicefee-x.target.value;
    }
  }
  serviceFees(fee:any){
    this.servicefee=fee.target.value;
    this.remainingfeepayable=fee.target.value;
    // this.remainingfeepayable=fee.target.value-this.feePaidValue;
  }
  disabled:any=true;
  addData(data:any){
    console.log(data);
    this.adddailyrecordservice.saveDailyRecordDataToDB(data).subscribe((res)=>{
      console.warn(res);
      this.Message=res;
     this.addRecord.reset();
    });
  }
}