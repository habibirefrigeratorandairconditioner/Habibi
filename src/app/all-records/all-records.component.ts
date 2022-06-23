import { Component, OnInit } from '@angular/core';
import {GetAllDailyDataService} from '../Services/get-all-daily-data.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
}) 
export class AllRecordsComponent implements OnInit {

  constructor(private getAllDataService:GetAllDailyDataService,private toastr: ToastrService) { }
  allData:any;
  index:any=0;
  ngOnInit(): void {
    this.getAllDataService.getAllDailyRecordDataFromDB().subscribe((data)=>{
      console.warn(data);
      this.allData=data;
    })
  }
  searchRecord = new FormGroup({
    search_text: new FormControl('',[Validators.required]),
  });
  get search_text(){
    return this.searchRecord.get("search_text");
  }
  searchRecords(data:any){
    console.log("Search Data : ",data);
    this.getAllDataService.searchData(data).subscribe((res)=>{
      console.warn(res);
      this.allData=res;
    });
  }
  deleteDailyRecordData(id:any){
    if(confirm("Are you sure to delete this record")) {
      console.log("Id:",id);
      this.getAllDataService.deleteDailyRecordDataFromDB(id).subscribe((data)=>{
        console.warn(data);
        alert("Record Deleted Successfully!");
      })
      this.getAllDataService.getAllDailyRecordDataFromDB().subscribe((data)=>{
        console.warn(data);
        this.allData=data;
      })
   
    }
  }
}