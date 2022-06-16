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
}
