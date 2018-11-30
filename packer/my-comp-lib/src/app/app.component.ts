import { Component } from '@angular/core';

import { Address } from './models/address';
import { OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  headerMeassage = 'Msg from child comp';

  constructor() {
    this.addressInit();
    this.dynamicAddressInit();
  }

  // address NON Dynamic init
  header: string;
  addressType: string;
  address: Address;

  addressInit(): void {
    this.header = 'Address Info';
    this.addressType = 'Primary';
    
    this.address = new Address();
    this.address.street1 = '37 Antelope Drive';
    this.address.street2 = '';
    this.address.city = 'Scarborough';
    this.address.state = 'ON';
    this.address.postcode = 'M1K 6K5';
    this.address.country = 'Canada';
  }

  // addrss DYNAMIC
  addressHeader: string;
  servicingCountry: string;
  //address: Address; // use above

  dynamicAddressInit(){
    this.servicingCountry = 'USA';
    this.addressHeader = 'DYNA HDDR';

    this.address = new Address();
    this.address.addressType = 'Primary';
    this.address.street1 = '200 King Drive';
    this.address.street2 = '';
    this.address.city = 'Toronto';
    this.address.state = 'ON';
    this.address.postcode = 'M1H 9U5';
    this.address.country = 'Canada';
  }


  ngOnInit() {
    console.log('init-header component');
  } 

}
