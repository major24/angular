import { TestBed, inject } from '@angular/core/testing';

import { TaxService } from './tax.service';
var sinon = require('sinon');

describe('TaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxService]
    });
  });

  it('should be created', inject([TaxService], (service: TaxService) => {
    expect(service).toBeTruthy();
  }));
});
