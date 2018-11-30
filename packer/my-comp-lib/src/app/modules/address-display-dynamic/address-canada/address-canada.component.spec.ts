import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCanadaComponent } from './address-canada.component';

describe('AddressCanadaComponent', () => {
  let component: AddressCanadaComponent;
  let fixture: ComponentFixture<AddressCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
