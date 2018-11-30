import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private dbServe: DatabaseService) { }

  getStaticCustomers(): any {
    return [
      {id: 24, name: 'Steve'},
      {id: 25, name: 'Reynold'}
    ];
  }

  updateCustomer(data): any {
    console.log('Entering CustomerService.updateCustomer(..) method')
    this.dbServe.save(data);
  }



}
