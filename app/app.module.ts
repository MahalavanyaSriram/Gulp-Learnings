import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import {DataGridModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataGridModule,
    ButtonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
