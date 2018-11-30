import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('P'));
    htmlEl = debugEl.nativeElement;

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current number of counter on init', () => {
    //Assert
    expect(htmlEl.textContent).toEqual('Number: 0');
  });

  it('should increment the counter', () => {
    //Arrange
    const curVal = component.counter;
    //Act
    component.increment();
    const newVal = component.counter;
    //Assert
    expect(newVal).toBe(curVal + 1);
  });

  it('should increment the counter and should be 9', () => {
    //Arrange
    component.counter = 8;
    //Act
    component.increment();
    //Assert
    expect(component.counter).toBe(9);
  });

  it('should decrement the counter and should be 5', () => {
    //Arrange
    component.counter = 6;
    //Act
    component.decrement();
    //Assert
    expect(component.counter).toBe(5);
  });



});
