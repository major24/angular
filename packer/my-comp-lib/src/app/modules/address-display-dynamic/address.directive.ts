import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[address-host]',
})
export class AddressDirective {
    constructor(public viewContainerRef: ViewContainerRef){}
}