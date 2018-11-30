import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // mn. since we be accessing the number, init here
    de = fixture.debugElement.query(By.css('#number'));
    htmlElement = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial number of the counter is 0', () => {
    // access the number element from html and assert 
    expect(htmlElement.textContent).toEqual('Number: 0');
  });

  it('should increment the number by one and counter is 1', () => {
    // access the number element from html and assert 
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 1');
  });

  it('should increment the number by three and counter is 3', () => {
    // access the number element from html and assert 
    component.increment();
    component.increment();
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 3');
  });

    it('should decrement the number by one and counter is -1', () => {
    // access the number element from html and assert 
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: -1');
  });


});
