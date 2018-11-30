import { Component, OnInit } from '@angular/core';

import { CustomerService } from "src/app/services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  msg: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.msg = this.customerService.getCustomerGreetingWithDepService('Steve');
  }

}
