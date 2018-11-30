import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() { }

  getRate(province: string): number {
    // now hard code buss logic into the ftn
    // later use api with table based solution to get proper data
    // ** NOT Recommended **
    let rate = 0;
    if (province === 'ON') {
      rate = 0.15;
    } else if (province === 'BC') {
      rate = 0.20;
    } else if (province === 'QC') {
      rate = 0.10;
    } else {
      rate = -1;
    }

    return rate;


    // get rate from api later..
    // parse based on province code..
    // now hard coded to ON
    // return 0.15;
  }
}
