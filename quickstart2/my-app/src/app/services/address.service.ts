import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable()
export class AddressService {

  // instead of DB, run array as storage for testing
  // able to update / get address info
  private data = [];

  constructor() {
    console.log('ctr-adr-service');
    // init data
    //data[0] = 
   }
  address: Address;

  getAddress(customerId): Address{
    // return mock data now
    return this.getMockAddress(customerId);
  }





  private getMockAddress24(){
      var address = new Address();
      address.street = '24-37 Antelope';
      address.city = 'Toronto';
      address.postcode = 'M1B';
      address.province = 'ON';
      return address;
  }

  private getMockAddress25(){
      var address = new Address();
      address.street = '25-958 King Street';
      address.city = 'Mississauga';
      address.postcode = 'L7R';
      address.province = 'ON';
      return address;
  }


  private getMockAddress(customerId){
    console.log(customerId);
    var address = new Address();
    if (customerId === '24'){
      address.street = '24-37 Antelope';
      address.city = 'Toronto';
      address.postcode = 'M1B';
      address.province = 'ON';
    } else if (customerId === '25'){
      address.street = '25-958 King Street';
      address.city = 'Mississauga';
      address.postcode = 'L7R';
      address.province = 'ON';
    }
    return address;
  }

  
}
