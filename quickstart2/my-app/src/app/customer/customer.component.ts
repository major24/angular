import { Component, OnInit } from '@angular/core';

//show address comp
//import { AddressDetailComponent } from '../address-detail/address-detail.component';
import { Address } from '../models/address';
//import { AddressService } from '../services/address.service';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private userService: UserService) {}
        //private addressService: AddressService) { }

  selectedAddress: Address;
  userid: string;
  selectedUser: User;

  ngOnInit() {
    // get user id from logged storage
    //this.userService.getUser(24);
    this.userid = sessionStorage.getItem('userid');
    console.log(this.userid);
    var addr = new Address();

    if (this.userid == '' || this.userid == null){
      this.userid = 'NOT LOGGED IN';
      addr.street = 'NA';
      this.selectedAddress = addr; //this.addressService.getAddress("25");
    } else {
      //this.getAddress(this.userid);
      this.selectedUser = this.getUser(this.userid);
      console.log(this.selectedUser);
      this.selectedAddress = this.selectedUser.address;
    }
  }

  getUser(id: string): User {
    return this.userService.getUser(id);
  }

  /*getAddress(value: string): void {
    console.log(value);
    this.selectedAddress = this.addressService.getAddress(value);
  }*/

}
