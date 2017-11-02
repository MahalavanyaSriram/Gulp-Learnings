import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, RequestOptions } from '@angular/http';

 import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import {CommonModule} from '@angular/common';

 import {DataGridModule} from 'primeng/primeng';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule , SharedModule, PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRequestOptions } from './auth-request';
import { AuthErrorHandler } from './auth-error-handler';
import { ProductService } from './product.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, DataGridModule, BrowserAnimationsModule,
    InputTextModule, DataTableModule, ButtonModule, DialogModule, CommonModule, SharedModule, PanelModule,

     AppRoutingModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ AppComponent, ProductListComponent, DashboardComponent, ProductFormComponent, LoginComponent, SignupComponent ],
  providers: [ ProductService ,
    {
      provide: RequestOptions, 
      useClass: AuthRequestOptions
    },{
      provide: ErrorHandler, 
      useClass: AuthErrorHandler
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
