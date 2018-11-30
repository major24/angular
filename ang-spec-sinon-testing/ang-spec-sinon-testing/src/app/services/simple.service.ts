import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  getMessage(): string {
    console.log('Entering SimpleService.getMessage() ftn');
    return `Message from Simple Service.`;
  }

  getRate(): number {
    // get rate from API
    return 0.1;
  }
}
