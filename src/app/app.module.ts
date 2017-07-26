import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UploadService} from "./upload.service";
import {Http, HttpModule} from "@angular/http";
import {MdTableModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
