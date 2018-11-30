import { Component, OnInit } from '@angular/core';

import { Address } from '../models/address';
//import { AddressService } from '../services/address.service';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-address-detail-update',
  templateUrl: './address-detail-update.component.html',
  styleUrls: ['./address-detail-update.component.css']
})
export class AddressDetailUpdateComponent implements OnInit {

  constructor(private userService: UserService) { }

  selectedAddress: Address;
  userid: string;

  ngOnInit() {
    // get user id from logged storage
    this.userid = sessionStorage.getItem('userid');
    console.log(this.userid);
    var addr = new Address();

    if (this.userid == '' || this.userid == null){
      this.userid = 'NOT LOGGED IN';
      addr.street = 'NA';
      this.selectedAddress = addr; //this.addressService.getAddress("25");
    } else {
      //this.getAddress(this.userid);
      var user = this.getUser(this.userid);
      this.selectedAddress = user.address;
    }
  }

  getUser(id: string): User {
    return this.userService.getUser(id);
  }

  /*getAddress(value: string): void {
    console.log(value);
    this.selectedAddress = this.addressService.getAddress(value);
  }*/

  onSubmit(data: Address): void {
    //console.log('form is submitting');
    //console.log(data);
    this.userService.updateUserAddress(this.userid, data);
  }

}
