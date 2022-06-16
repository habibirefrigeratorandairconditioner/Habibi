import { Component, OnInit } from '@angular/core';
import {GetAllDailyDataService} from '../Services/get-all-daily-data.service';
@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {

  constructor(private getAllDataService:GetAllDailyDataService) { }
  allData:any;
  ngOnInit(): void {
    this.getAllDataService.getAllDailyRecordDataFromDB().subscribe((data)=>{
      console.warn(data);
      this.allData=data;
    })
  }
}
