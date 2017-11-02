import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataListModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DataGridModule } from 'primeng/primeng';
import { InputTextModule, DataTableModule, DialogModule, PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { DropdownService } from './service/dropdown.service';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { ProductSearchService } from './service/product-search.service';
import { CartService } from './service/cart.service';
import { CarouselModule } from 'primeng/primeng';
import { AuthService } from './service/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DataGridModule,
    BrowserAnimationsModule,
    InputTextModule,
    DataTableModule,
    DataListModule,
    DataScrollerModule,

    DialogModule,
    CommonModule,

    PanelModule,
    AppRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, ProductListComponent, DashboardComponent, ProductSearchComponent, LoginComponent, CartComponent, SignupComponent, CallbackComponent, HeaderComponent, FooterComponent],
  providers: [ProductService, DropdownService, AuthService, ProductSearchService, CartService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
