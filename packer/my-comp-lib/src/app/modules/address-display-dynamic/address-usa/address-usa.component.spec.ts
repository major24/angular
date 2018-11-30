import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressUsaComponent } from './address-usa.component';

describe('AddressUsaComponent', () => {
  let component: AddressUsaComponent;
  let fixture: ComponentFixture<AddressUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
