import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerService } from './services/customer.service';

import { StoreModule } from '@ngrx/store';  
// http://ngxsolutions.azurewebsites.net/understanding-features-in-ngrx-4/

import { customerReducer } from './store/customer-store.reducer'; 

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customerFeature', {
              customer: customerReducer
            })
  ],
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerDashboardComponent],
  providers: [CustomerService]
})
export class CustomersModule { }
