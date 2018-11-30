import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { GreeterWithServiceComponent } from './greeter-with-service/greeter-with-service.component';
import { GreeterService } from "src/app/services/greeter.service";
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from "src/app/services/customer.service";
import { TeamComponent } from './team/team.component';
import { TeamService } from 'src/app/services/team.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    GreeterWithServiceComponent,
    CustomerComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GreeterService, CustomerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
