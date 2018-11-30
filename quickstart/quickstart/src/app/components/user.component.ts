import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers:[]
})


export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
        this.name = 'Major'; 
        this.email = 'major@gmail.com';
        this.address = {
            street: '37 King Street',
            city: 'Toronto',
            zip: 'M1B6k5'
        }
        this.hobbies = ["Movies", "Music", "Sports"];
        this.showHobbies = false;
  }

  toggleHobbies(){
      if (this.showHobbies === true){
        this.showHobbies = false;
      } else {
        this.showHobbies = true;
      }
  }

  addHobby(hobby: string){
      this.hobbies.push(hobby);
  }

  deleteHobby(idx: number){
      this.hobbies.splice(idx,1);
  }

}


interface address {
    street: string;
    city: string;
    zip: string;
}
