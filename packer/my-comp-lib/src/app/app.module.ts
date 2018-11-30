import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import our module 
import { HeaderModule } from './modules/header/header.module';
import { AddressDisplayModule } from './modules/address-display/address-display.module';
import { AddressDisplayDynamicModule } from './modules/address-display-dynamic/address-display-dynamic.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AddressDisplayModule,
    AddressDisplayDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
