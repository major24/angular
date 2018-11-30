import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { DatabaseService } from './database.service';
var sinon = require('sinon');

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService]
    });
  });

  it('should be created and calling actual service', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
    const expected = [
          {id: 24, name: 'Steve'},
          {id: 25, name: 'Reynold'}
        ];
    const actual = service.getStaticCustomers();
    expect(expected).toEqual(actual);
  }));

  it('calling update customer with dep service', 
      inject([CustomerService, DatabaseService], 
      (service: CustomerService, dbService: DatabaseService) => {
    expect(service).toBeTruthy();
    const cust = {id: 24, name: 'Steve'};
    // spy on to see if DB.save called?
    const save = sinon.spy(dbService, 'save');
    const actual = service.updateCustomer(cust);
    save.restore();
    sinon.assert.calledOnce(save);
    // assert parameters passed in
    sinon.assert.calledWith(save, cust);
  }));


// STUB
  it('should be using stub', inject([CustomerService], (service: CustomerService) => {
    const cb = sinon.stub();
    cb.withArgs(24).returns(100);
    const resp = cb(24);
    expect(resp).toEqual(100);
  }));

    it('calling update customer with dep service with stub', 
      inject([CustomerService, DatabaseService], 
      (service: CustomerService, dbService: DatabaseService) => {
    const stub = sinon.stub(dbService, 'save');
    const args = {id: 200, name: 'major'};
    // call main mtd and see if internal mtd called
    service.updateCustomer(args);
    expect(stub.calledOnce);
    expect(stub.calledWith(args)).toBe(true);
  }));

});
