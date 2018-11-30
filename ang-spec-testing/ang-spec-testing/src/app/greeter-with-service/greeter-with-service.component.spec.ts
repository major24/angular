import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterWithServiceComponent } from './greeter-with-service.component';
import { GreeterService } from "src/app/services/greeter.service";
import { inject } from "@angular/core/testing";

describe('GreeterWithServiceComponent', () => {
  let component: GreeterWithServiceComponent;
  let fixture: ComponentFixture<GreeterWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterWithServiceComponent ],
      providers:[ GreeterService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create greeter service', inject([GreeterService], service => {
    expect(service).toBeTruthy();
  }));

  it('should create component', () => {
   expect(component).toBeTruthy();
  });

  it('should create greeter service and get message', inject([GreeterService], service => {
    const msg = 'Message from Greeter Service';
    const result = service.getMessage();
    expect(result).toEqual(msg);
  }));
  
  it('should create greeter service and get greeting with param', inject([GreeterService], service => {
    const expected = 'Hello Nalliah';
    const result = service.getGreeting('Nalliah');
    expect(result).toEqual(expected);
  }));

});
