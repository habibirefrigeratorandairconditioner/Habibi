import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddDailyRecordService {

  constructor(private http:HttpClient) { }

  saveDailyRecordDataToDB(data:any){
    return this.http.post(environment.apiURL+"addDailyRecordData",data);
  }
}
