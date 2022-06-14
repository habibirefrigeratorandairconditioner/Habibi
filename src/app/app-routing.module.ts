import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecordsComponent } from './all-records/all-records.component';
import { DailyRecordComponent } from './daily-record/daily-record.component';

const routes: Routes = [
  {
    path:"",
    component:DailyRecordComponent
  },
  {
    path:"allRecords",
    component:AllRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
