import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule, routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
