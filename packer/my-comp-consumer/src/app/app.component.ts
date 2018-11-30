import { Component } from '@angular/core';

// imp my module from my lib package
import { HeaderModule } from 'my-comp-lib';
import { AddressDisplayModule } from 'my-comp-lib';
import { OnInit } from "@angular/core";

// Dynamic address comp
import { AddressDisplayDynamicModule } from 'my-comp-lib';
// import address obj
import { Address } from './models/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Consumer app for library';
  headerMeassage = 'This msg from parent to child via lib';

  constructor() {
  }

  ngOnInit() {
    this.addressInit();
    //dynamic comps
    this.dynamicAddressInit();
  } 

  // address init
  header: string;
  addressType: string;
  address: Address;

  addressInit(): void {
    this.header = 'Address Info';
    this.addressType = 'Primary';
    
    this.address = new Address();
    this.address.street1 = '5140 Yonge Street';
    this.address.street2 = '';
    this.address.city = 'North York';
    this.address.state = 'ON';
    this.address.postcode = 'M1L 9U7';
    this.address.country = 'Canada';
  }


    // addrss DYNAMIC
  addressHeader: string;
  servicingCountry: string;
  //address: Address; // use above

  dynamicAddressInit(){
    this.servicingCountry = 'USA'; //CAN | USA
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


}
