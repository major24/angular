import { Component, OnInit } from '@angular/core';

//show address comp
import { Address } from '../models/address';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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

}
