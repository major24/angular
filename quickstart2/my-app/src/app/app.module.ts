import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './routing.module';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { MessageService } from './services/message.service';
import { AddressDetailComponent } from './address-detail/address-detail.component';
//import { AddressService } from './services/address.service';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AddressDetailUpdateComponent } from './address-detail-update/address-detail-update.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CounterComponent,
    AlertButtonComponent,
    AddressDetailComponent,
    CustomerComponent,
    UserComponent,
    LoginComponent,
    AddressDetailUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
