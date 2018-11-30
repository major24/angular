import { TestBed, inject } from '@angular/core/testing';

var sinon = require('sinon');
import { Observable, of } from "rxjs";
import { throwError } from 'rxjs';  //rxjs v:6

import { OrderService } from './order.service';
import { Order } from '../../models/order';
import { TaxService } from './tax.service'; // using for stub
import { PostalService } from './postal.service'; // using for stub

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



describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));


  // first simple test
  it('should get order for ON_100_1kg no calc', inject([OrderService], (service: OrderService) => {
    let order = getOrderON_100_1kg();
    // console.log(order);
    //let actual = service.calcuate(order);
    service.calcuate(order).subscribe(resp => {
      expect(resp.amount).toEqual(100);
    });
  }));

  // calc tax and shipping via dep service calls
  it('should calc tx/shping for ON_100_1kg', inject([OrderService], (service: OrderService) => {
    let order = getOrderON_100_1kg();
    let actual = service.calcuate(order);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(15);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(135);
    });
  }));

  it('should calc tx/shping for BC_100_1kg', inject([OrderService], (service: OrderService) => {
    let order = getOrderBC_100_1kg();
    let actual = service.calcuate(order);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(20);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(140);
    });    
  }));

  it('should calc tx/shping for QC_100_1kg', inject([OrderService], (service: OrderService) => {
    let order = getOrderQC_100_1kg();
    let actual = service.calcuate(order);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(10);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(130);
    });
  }));

});


// *********************************************************
// STUB: 
// Now stub dep services. DO NOT rely on API services
// *********************************************************

describe('OrderService - STUB: TaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));


  // first simple test
  it('should get order for ON_100_1kg no calc', inject([OrderService], (service: OrderService) => {
    let order = getOrderON_100_1kg();
    // console.log(order);
    let actual = service.calcuate(order);
    // console.log(actual);
    //expect(actual.amount).toEqual(100);
  }));

  // calc tax and shipping via dep service calls
  it('should  calc with stub tx/shping for ON_100_1kg', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderON_100_1kg();
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(0.15);
    // stub postal service
    const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
                    .returns(20);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    expect(stubTaxService.calledOnce);
    expect(stubTaxService.calledWith('ON')).toBe(true);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(15);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(135);
    });
    //expect(actual.tax).toEqual(15);
    //expect(actual.shipping).toEqual(20);
    //expect(actual.total).toEqual(135);
  }));

  // Prove bypass dep services are stubbed, by fake numbers
  // calc tax and shipping via dep service calls
  it('should  calc with stub tx/shping for ON_100_1kg fake returns', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderON_100_1kg();
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(0.5);  // 50% of 100 = 50
    // stub postal service
    const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
                    .returns(500);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    expect(stubTaxService.calledOnce);
    expect(stubTaxService.calledWith('ON')).toBe(true);
    expect(stubPostalService.calledWith('ON', 1)).toBe(true);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(50); // 50%
      expect(actual.shipping).toEqual(500);
      expect(actual.total).toEqual(650); //100+50+500=650
    });
    //expect(actual.tax).toEqual(50);  // 50%
    //expect(actual.shipping).toEqual(500); 
    //expect(actual.total).toEqual(650); // 100+50+500=650
  }));

  // ON-100-1kg
  it('should  calc with stub tx/shping for ON_100_1kg', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderON_100_1kg();
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(0.15);
    // stub postal service
    const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
                    .returns(20);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    expect(stubTaxService.calledOnce);
    expect(stubTaxService.calledWith('ON')).toBe(true);
    expect(stubPostalService.calledWith('ON', 1)).toBe(true);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(15);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(135);
    });
    //expect(actual.tax).toEqual(15);
    //expect(actual.shipping).toEqual(20); 
    //expect(actual.total).toEqual(135);
  }));


  // BC-100-1kg
  it('should  calc with stub tx/shping for BC_100_1kg', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderBC_100_1kg();
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(0.2);
    // stub postal service
    const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
                    .returns(24);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    expect(stubTaxService.calledOnce);
    expect(stubTaxService.calledWith('BC')).toBe(true);
    expect(stubPostalService.calledWith('BC', 1)).toBe(true);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(20);
      expect(actual.shipping).toEqual(24);
      expect(actual.total).toEqual(144);   //100+20+24
    });
  }));

  // QC-100-1kg
  it('should  calc with stub tx/shping for QC_100_1kg', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderQC_100_1kg();
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(0.1);
    // stub postal service
    const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
                    .returns(20);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    expect(stubTaxService.calledOnce);
    expect(stubTaxService.calledWith('QC')).toBe(true);
    expect(stubPostalService.calledWith('QC', 1)).toBe(true);
    service.calcuate(order).subscribe(actual => {
      expect(actual.tax).toEqual(10);
      expect(actual.shipping).toEqual(20);
      expect(actual.total).toEqual(130);
    });
  }));


  // handle error on tax rate
  // NOT WORKING - NEEDS FIXING
  /*
  it('should  calc with stub tx error for QC_100_1kg', 
      inject([OrderService, TaxService, PostalService], 
      (service: OrderService, 
      taxService: TaxService, 
      postalService: PostalService) => {
    // Arrange
    let order = getOrderQC_100_1kg();
    order.province = 'XX';
    // stub tx service
    const stubTaxService = sinon.stub(taxService, 'getRate')
                    .returns(-1);
    // stub postal service
    //const stubPostalService = sinon.stub(postalService, 'getShippingCharge')
      //              .returns(20);
    // Act
    let actual = service.calcuate(order);
    // Assert
    // ensure getTax(<<'ON'>>) is called?
    //expect(stubTaxService.calledOnce);
    const respErr = 'Tax rate not found.';
    service.calcuate(order).subscribe((err) => {
      expect(err).toEqual(respErr);
      //console.log(err);
      //expect(actual.shipping).toEqual(20);
      //expect(actual.total).toEqual(20);
    });
  }));
*/



});









 
// helper functions
function getOrderON_100_1kg() {
  let order = new Order();
  order.province = 'ON';
  order.weight = 1;
  order.amount = 100;
  order.tax = 0;
  order.shipping = 0;
  order.total = 0;
  return order;
}

function getOrderBC_100_1kg() {
  let order = new Order();
  order.province = 'BC';
  order.weight = 1;
  order.amount = 100;
  order.tax = 0;
  order.shipping = 0;
  order.total = 0;
  return order;
}

function getOrderQC_100_1kg() {
  let order = new Order();
  order.province = 'QC';
  order.weight = 1;
  order.amount = 100;
  order.tax = 0;
  order.shipping = 0;
  order.total = 0;
  return order;
}