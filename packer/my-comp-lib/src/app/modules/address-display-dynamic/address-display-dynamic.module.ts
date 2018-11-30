import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressDisplayDynamicComponent } from './address-display-dynamic.component';
import { AddressDirective } from './address.directive';
import { AddressUsaComponent } from './address-usa/address-usa.component';
import { AddressCanadaComponent } from './address-canada/address-canada.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddressDisplayDynamicComponent,
    AddressUsaComponent, 
    AddressCanadaComponent,
    AddressDirective],
  exports: [AddressDisplayDynamicComponent,
  AddressUsaComponent,
  AddressCanadaComponent
  ],
  entryComponents: [AddressUsaComponent, 
    AddressCanadaComponent ],
})
export class AddressDisplayDynamicModule { }
