import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailComponent } from './address-detail.component';
import { Address } from '../models/address';

//import {CustomerComponent} from '../customer/customer.component';

describe('AddressDetailComponent', () => {
  let component: AddressDetailComponent;
  let fixture: ComponentFixture<AddressDetailComponent>;

  // cust
  //let custHostTestComp: CustomerComponent;
  ///let custHostFixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // add cust
    //custHostFixture = TestBed.createComponent(CustomerComponent);

    fixture = TestBed.createComponent(AddressDetailComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
