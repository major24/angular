import { AddressDisplayModule } from './address-display.module';

describe('AddressDisplayModule', () => {
  let addressDisplayModule: AddressDisplayModule;

  beforeEach(() => {
    addressDisplayModule = new AddressDisplayModule();
  });

  it('should create an instance', () => {
    expect(addressDisplayModule).toBeTruthy();
  });
});
