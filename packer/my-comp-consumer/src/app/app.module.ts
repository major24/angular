import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// imp my module
import { HeaderModule } from 'my-comp-lib';
import { AddressDisplayModule } from 'my-comp-lib';
// Dynamic address comp
import { AddressDisplayDynamicModule } from 'my-comp-lib';

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
