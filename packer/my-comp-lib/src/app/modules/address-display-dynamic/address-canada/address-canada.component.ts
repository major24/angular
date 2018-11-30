import { Component, OnInit, Input } from '@angular/core';

import { AddressComponent } from '../address.component';

@Component({
  selector: 'app-address-canada',
  templateUrl: './address-canada.component.html',
  styleUrls: ['./address-canada.component.css']
})
export class AddressCanadaComponent implements OnInit, AddressComponent {

  constructor() { }

 @Input() data: any;
 @Input() address: any;

  ngOnInit() {
  }

}
