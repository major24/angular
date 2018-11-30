import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { throwError } from 'rxjs';  //rxjs v:6

import { Order } from '../../models/order';
import { TaxService } from './tax.service';
import { PostalService } from './postal.service';

/**
 * order service receives order with 
 *    ord amount, weight, province
 * it calcuates tax based on province 
 * and shipping based on weight and province
 * tax and shipping are retrieved from Api calls..
 * 
 * do stub to calcuate diff scenarios without rely on apis
 * 
 * -------------
 *  PROV    TAX
 * -------------
 *  ON      .15
 *  BC      .20
 *  QC      .10
 * 
 *  SHIPPING
 * --------------------------------------------
 *  PROV    <=1KG    <=5KG    <=10KG    >10KG
 * --------------------------------------------
 *  ON       20        30       50       70
 *  BC       24        34       54       74
 *  QC       20        25       40       60
 * 
 *  SAMPLE ORDER and CALC AMT
 * --------------------------------------------
 *  PROV    ORD_AMT    WGT    TAX    SHPING
 * --------------------------------------------
 *  ON      100.00     1kg    15.00  20.00
 *  ON      100.00     4.5kg  15.00  30.00
 *  BC      200.00     5kg    40.00  34.00    
 */



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private taxService: TaxService,
    private postalService: PostalService
  ) { }

   calcuate(order: Order): Observable<Order> {
     // DO NOT USE object.assign
     // https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab
     // Better to use JSON.parse..
     //let newOrder = Object.assign({}, order);
     let orderUpd = JSON.parse(JSON.stringify(order));
     // get tax from tax service based on province..
     const rate = this.taxService.getRate(order.province);
     if (rate === -1) {
        return throwError('Tax rate not found.');
        //throw Observable.throw('Tax rate not found.');
     }
     const shippingChg = this.postalService.getShippingCharge(order.province, order.weight);
     
     orderUpd.tax = order.amount * rate;
     // console.log(orderUpd.tax);

     // get shipping chg from postal service based on 
     //   weight and province...
     orderUpd.shipping = shippingChg;

     orderUpd.total = order.amount + orderUpd.tax + orderUpd.shipping;
     
     // return as observable
     const myObservable = of(orderUpd);
     return myObservable;
     // return orderUpd;
   }


  getTeam(id: number): Observable<any> {
    if (id >= 600) {
      return throwError(
        'Error: ID should be less than 600.');
    } else {

      let url = 'assets/team_300.json'; // correct url
      //return this.httpClient.get<Team>(url)
        //.pipe(
          //catchError(this.handleError)
         //);
         return null;
    }
  }


}
