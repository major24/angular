import { Injectable } from '@angular/core';

import { GreeterService } from './greeter.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private greeterService: GreeterService) { }

  getCustomerGreeting(name: string){
    return 'Important Messge to our customers: ' + name;
  }

  getCustomerGreetingWithDepService(name: string){
    //'Hello ' + name;
    const msg = this.greeterService.getGreeting(name);
    console.log(msg);
    return 'Msg with dependant service: ' + msg;
  }
}
