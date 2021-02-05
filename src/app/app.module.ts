import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ConditionComponent } from './condition/condition.component';
import {MaterialModule} from './material.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
