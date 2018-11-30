import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }



  save(customer: any) {
    console.log('Entering DatabaseService.save(..) method')
    // saving to db
  }
}
