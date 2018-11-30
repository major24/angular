import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { GreeterService } from './greeter.service';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CustomerService, GreeterService ]
    })
  });

  it('should be created', inject([CustomerService, GreeterService], 
          (service: CustomerService, greetService: GreeterService) => {
    expect(service).toBeTruthy();
    expect(greetService).toBeTruthy();
  }));



  it('should create customer service and get message', inject([CustomerService], service => {
    const expected = 'Important Messge to our customers: Nalliah'
    const result = service.getCustomerGreeting('Nalliah');
    expect(result).toEqual(expected);
  }));

  it('should create customer service and get message', inject([CustomerService], service => {
    const expected = 'Msg with dependant service: Hello Steve'
    const result = service.getCustomerGreetingWithDepService('Steve');
    expect(result).toEqual(expected);
  }));



});
