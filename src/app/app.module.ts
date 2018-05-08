import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Modulo01Module } from './modulo01/modulo01.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    Modulo01Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
