import { Component, OnInit, Input } from '@angular/core';
//import { AddressService } from '../services/address.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  //constructor(private addressService: AddressService) { }
  constructor() {}
  
  @Input() address: Address = new Address();

  ngOnInit() {
  }


}
