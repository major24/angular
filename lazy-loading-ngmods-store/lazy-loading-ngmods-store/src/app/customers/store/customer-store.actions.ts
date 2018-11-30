import { Customer } from './models/customer';
import { Action } from '@ngrx/store';

// expose two actions
export const LOAD_CUSTOMERS = '[Customers] Load';
export const LOAD_CUSTOMERS_COMPLETE = '[Customers] Load:Complete';

export class LoadCustomers implements Action {
    readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomersComplete implements Action {
    readonly type = LOAD_CUSTOMERS_COMPLETE;

    constructor(public customers: Customer[]){}
}

export type Actions = LoadCustomers | LoadCustomersComplete;