import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostalService {

  constructor() { }

  getShippingCharge(province: string, weight: number): number {
    // get from api based on prov and wgt
    // now hard code
    return 20;
  }
}
