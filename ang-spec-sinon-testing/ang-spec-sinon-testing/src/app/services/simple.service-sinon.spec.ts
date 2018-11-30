// using sinon
import { TestBed, inject } from '@angular/core/testing';
//import { sinon } from 'sinon';
var sinon = require('sinon');
import { SimpleService } from './simple.service';


describe('Sinon - SimpleService', () => {
    let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('create simple service via injection', 
        inject([SimpleService], (service: SimpleService) =>  {
    expect(service).toBeTruthy();
    const resp = service.getMessage();
    expect(resp).toEqual('Message from Simple Service.');
  }));

  it('create simple service via injection and spy on console log', 
        inject([SimpleService], (service: SimpleService) =>  {
    // Spy - Ensure console log is called..
    const cons = sinon.spy(console, 'log');
    const resp = service.getMessage();
    expect(resp).toEqual('Message from Simple Service.');
    cons.restore();
    sinon.assert.calledOnce(cons);
  }));

  it('create simple service via injection and stub on getRate', 
        inject([SimpleService], (service: SimpleService) =>  {
    const respRate = service.getRate();
    expect(respRate).toEqual(.10);

    // what if the Api for get rate fails. stub it
    const getRateStub = sinon.stub(service, 'getRate')
        .callsFake(function fakeGetRate(){
          return 0.2;
        });
    const respFakeRate = getRateStub();
    expect(respFakeRate).toEqual(0.2);
  
  }));


});


