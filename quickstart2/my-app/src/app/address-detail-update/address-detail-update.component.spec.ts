import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailUpdateComponent } from './address-detail-update.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from '../services/user.service';

describe('AddressDetailUpdateComponent', () => {
  let component: AddressDetailUpdateComponent;
  let fixture: ComponentFixture<AddressDetailUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule ],
      declarations: [ AddressDetailUpdateComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
