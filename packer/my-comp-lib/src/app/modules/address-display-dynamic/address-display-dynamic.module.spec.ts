import { AddressDisplayDynamicModule } from './address-display-dynamic.module';

describe('AddressDisplayDynamicModule', () => {
  let addressDisplayDynamicModule: AddressDisplayDynamicModule;

  beforeEach(() => {
    addressDisplayDynamicModule = new AddressDisplayDynamicModule();
  });

  it('should create an instance', () => {
    expect(addressDisplayDynamicModule).toBeTruthy();
  });
});
