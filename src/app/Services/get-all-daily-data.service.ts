import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetAllDailyDataService {
  constructor(private http:HttpClient) { }
  getAllDailyRecordDataFromDB(){
    return this.http.get(environment.apiURL+"getAllDailyData");
  }
  deleteDailyRecordDataFromDB(Record_id:any){
    console.log("Record_id:",Record_id,environment.apiURL+"DeleteDailyRecord/"+Record_id);
    return this.http.post(environment.apiURL+"DeleteDailyRecord/"+Record_id,Record_id);
  }
  getAllRemainingFeeDataFromDB(){
    return this.http.get(environment.apiURL+"getRemainingAmountRecordData");
  }
  updateRemainingFeeData(data:any){
    return this.http.post(environment.apiURL+"updateRemainingFeeRecord",data);
  }
  searchData(data:any){
    return this.http.post(environment.apiURL+"searchRecord",data);
  }
  searchRemainingData(data:any){
    return this.http.post(environment.apiURL+"searchRemainingRecord",data);
  }
}
