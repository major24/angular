import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressDisplayComponent } from './address-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddressDisplayComponent],
  exports:[
    AddressDisplayComponent
  ]
})
export class AddressDisplayModule { }
