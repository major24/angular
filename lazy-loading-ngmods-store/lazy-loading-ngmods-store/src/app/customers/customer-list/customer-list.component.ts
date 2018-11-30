import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'; 
import { LoadCustomers } from '../store/customer-store.actions';  
import { CustomerState } from '../store/customer-store.reducer';  

import { CustomerService } from '../services/customer.service';
import { Customer } from '../store/models/customer';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';  //rxjs v:6

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

 customers: Customer[];

  constructor(public store: Store<CustomerState>,
        private customerService: CustomerService) { }

  ngOnInit() {
    // log for debug - inital state
    this.store
        .select<any>((state: any) => state) // complete state
        .subscribe((completeState: any) => {
            console.log(completeState);
        });

    this.store
        .select<any>('customerFeature')
        .subscribe((customerState: CustomerState) => {
            console.log(customerState);
        });

    /*this.customerService.getCustomers()
        .subscribe(result => {
          console.log(result);
          this.customers = result as Customer[]
    });*/

  }

}
