import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ServiceEndpoints } from './services/service.endpoints';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CustomerComponent } from './components/customer.component';
import { ProductComponent } from './components/product.component';
import { ObservablesComponent } from './components/observables.component';



// todo-this should be moved to separate module
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'products', component: ProductComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CustomerComponent, ProductComponent, ObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceEndpoints],
  bootstrap: [AppComponent]
})
export class AppModule { }
