import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// TEST CHILD @Input 
import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { AddressDetailComponent } from "app/address-detail/address-detail.component";
import { UserService } from "app/services/user.service";

@Component({
  template: '<app-address-detail [address]="selectedAddress"></app-address-detail>'
})
class TestHostComponent { 
  address: Address
}
//---------------------------------



describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  //----
  let testFixture: any; // ComponentFixture<AddressDetailComponent>;
  let testHost: AddressDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerComponent, 
              TestHostComponent, 
              AddressDetailComponent ],
      providers:[ UserService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //----
    testFixture = TestBed.createComponent(TestHostComponent); 
    testHost = testFixture.componentInstance;
    testHost.address = new Address();
    //----
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.selectedAddress = new Address();
    fixture.detectChanges();
  });

  it('should create', () => {
    // ----
    testHost.address = new Address();
    testFixture.detectChanges();
    //----
    expect(component).toBeTruthy();
  });
});
