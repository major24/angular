import { TestBed, inject } from '@angular/core/testing';

import { GreeterService } from './greeter.service';

describe('GreeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreeterService]
    });
  });

  it('should be created', inject([GreeterService], (service: GreeterService) => {
    expect(service).toBeTruthy();
  }));

  it('should create greeter service and get message', inject([GreeterService], service => {
    const expected = 'Message from Greeter Service';
    const result = service.getMessage();
    expect(result).toEqual(expected);
  }));

  it('should create greeter service and get greeting with param', inject([GreeterService], service => {
    const expected = 'Hello Major';
    const result = service.getGreeting('Major');
    expect(result).toEqual(expected);
  }));



});
