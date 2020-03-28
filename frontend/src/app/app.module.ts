import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { ResidentsComponent } from './residents/residents.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from "./api.service";
import { TokenInterceptorService } from "./token-interceptor.service";
import { NoticeComponent } from './notice/notice.component';


@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    ResidentsComponent,
    ComplaintComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
