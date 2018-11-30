import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Address } from '../models/address';

@Injectable()
export class UserService {

  private data = [];

  constructor() { 
    console.log('usr-srv-init');
    this.data.push(this.getMockUser24());
    this.data.push(this.getMockUser25());
  }

  getUser(id): User {
    let user = new User();
    this.data.forEach(x => {
      if (id === x.userid){
        user = x;
        return user;
      }
    });
    return user;
  }

  updateUserAddress(id, userInfo): void {
    let user = this.getUser(id);
    //update the address
    console.log(userInfo);

    if (user.userid != '') {
      // user found. update..
      let addr = new Address();
      addr.street = userInfo.street;
      addr.city = userInfo.city;
      addr.postcode = userInfo.postcode;
      addr.province = userInfo.province;

      user.address = addr;
      // update array.. only for testing
      this.data.forEach((x, idx) =>{
        if (id === x.userid){
            this.data[idx] = user;
            console.log(user);
        }
      });
    }
  }



  private getMockUser24(){
      var user = new User();
      var address = new Address();
      address.street = '24-37 Antelope';
      address.city = 'Toronto';
      address.postcode = 'M1B';
      address.province = 'ON';

      user.userid = '24';
      user.fname = 'Major';
      user.address = address;
      return user;
  }

  private getMockUser25(){
      var user = new User();
      var address = new Address();
      address.street = '25-958 King Street';
      address.city = 'Mississauga';
      address.postcode = 'L7R';
      address.province = 'ON';

      user.userid = '25';
      user.fname = 'Steve';
      user.address = address;
      return user;
  }
}
