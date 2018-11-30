import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ComponentFactoryResolver, ViewChild } from '@angular/core';

import { AddressDirective } from './address.directive';
import { AddressComponent } from './address.component';
import { AddressUsaComponent } from './address-usa/address-usa.component';
import { AddressCanadaComponent } from './address-canada/address-canada.component';
import { Type } from "@angular/core";

@Component({
  selector: 'app-address-display-dynamic',
  templateUrl: './address-display-dynamic.component.html',
  styleUrls: ['./address-display-dynamic.component.css']
})
export class AddressDisplayDynamicComponent implements OnInit, OnDestroy {

  @Input() data: any;
  @ViewChild(AddressDirective) addressHost: AddressDirective;
  
  @Input() addressHeader: string;
  @Input() servicingCountry: string;
  @Input() address: any;

  private components = {
    'USA': AddressUsaComponent,
    'CAN': AddressCanadaComponent
  }; 


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.addressHeader);
    console.log(this.address);
    let data = {'addressHeader': this.addressHeader };
    this.loadComponent(this.servicingCountry, this.address, data);
  }

  ngOnDestroy(){

  }

  loadComponent(typeName: string, address: any, data: any) {
    let AddressComponent = this.getComponent(typeName);
    let componentFactory = 
      this.componentFactoryResolver.resolveComponentFactory(AddressComponent)

    let viewContainerRef = this.addressHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AddressDisplayDynamicComponent>componentRef.instance).data = data;
    (<AddressDisplayDynamicComponent>componentRef.instance).address = address;
  }

  getComponent(typeName: string){
    return this.components[typeName];
  }

}
