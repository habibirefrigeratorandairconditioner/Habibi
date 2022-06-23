import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { AllRecordsComponent } from './all-records/all-records.component';
import {HttpClientModule} from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RemainingFeeRecordComponent } from './remaining-fee-record/remaining-fee-record.component';
@NgModule({
  declarations: [
    AppComponent,
    DailyRecordComponent,
    AllRecordsComponent,
    RemainingFeeRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
