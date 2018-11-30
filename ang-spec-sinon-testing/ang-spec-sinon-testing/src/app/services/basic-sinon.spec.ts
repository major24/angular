
// using sinon
import { TestBed, inject } from '@angular/core/testing';
//import { sinon } from 'sinon';
var sinon = require('sinon');
import { SimpleService } from './simple.service';

function myfunc() {
    return 'test message';
}


describe('Sinon - Basic Test (fake)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
  });

  it('should be created', inject([SimpleService], (service: SimpleService) => {
    expect(service).toBeTruthy();
  }));

  // using sinon
  it('create a basic fake, with no behaviour', function () {
    console.log(sinon);
    var fake = sinon.fake();
    fake();
    expect(fake.callCount).toBe(1);
  });

  it('create a basic fake, with behaviour. return str', function () {
    var fake = sinon.fake.returns(`hello world`);
    const res = fake();
    expect(fake.callCount).toBe(1);
    expect(res).toEqual(`hello world`);
  });

  it('create a basic fake, with behaviour. throw error', function () {
    var fake = sinon.fake.throws(new Error(`invalid value`));
  });



});


