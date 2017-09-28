import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

 import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {CommonModule} from '@angular/common';
 import { InMemoryDataService } from './in-memory-data.service';
 import {DataGridModule} from 'primeng/primeng';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule , SharedModule, PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductSearchComponent } from './product-search/product-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, DataGridModule, BrowserAnimationsModule,
    InputTextModule, DataTableModule, ButtonModule, DialogModule, CommonModule, SharedModule, PanelModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),
     AppRoutingModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ AppComponent, ProductListComponent, DashboardComponent, ProductFormComponent, ProductSearchComponent ],
  providers: [InMemoryDataService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
