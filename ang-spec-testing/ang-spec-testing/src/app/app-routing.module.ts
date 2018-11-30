import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard/dashboard.component';
import { CounterComponent }      from './counter/counter.component';
import { GreeterWithServiceComponent } from './greeter-with-service/greeter-with-service.component';
import { CustomerComponent } from './customer/customer.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'greeter-with-service', component: GreeterWithServiceComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}