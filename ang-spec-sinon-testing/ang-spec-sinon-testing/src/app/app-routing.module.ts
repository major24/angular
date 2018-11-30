import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard/dashboard.component';
import { CounterComponent }      from './counter/counter.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}