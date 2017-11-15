import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TamilComponent } from './tamil/tamil.component';
import { TeluguComponent } from './telugu/telugu.component';


@NgModule({
  declarations: [
    AppComponent,
    TamilComponent,
    TeluguComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
