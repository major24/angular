import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDisplayDynamicComponent } from './address-display-dynamic.component';

describe('AddressDisplayDynamicComponent', () => {
  let component: AddressDisplayDynamicComponent;
  let fixture: ComponentFixture<AddressDisplayDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDisplayDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDisplayDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
