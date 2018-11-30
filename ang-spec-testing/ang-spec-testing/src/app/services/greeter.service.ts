import { Injectable } from '@angular/core';

//@Injectable({
  //providedIn: 'root'
//})
@Injectable()
export class GreeterService {

  constructor() { }

  getMessage() {
    return 'Message from Greeter Service';
  }

  getGreeting(name: string){
    return 'Hello ' + name;
  }
}
