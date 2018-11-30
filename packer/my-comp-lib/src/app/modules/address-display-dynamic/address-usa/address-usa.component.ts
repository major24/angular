import { Component, OnInit, Input } from '@angular/core';

import { AddressComponent } from '../address.component';

@Component({
  selector: 'app-address-usa',
  templateUrl: './address-usa.component.html',
  styleUrls: ['./address-usa.component.css']
})
export class AddressUsaComponent implements OnInit, AddressComponent {

  constructor() { }

  @Input() data: any;
  @Input() address: any;

  ngOnInit() {
  }

}
