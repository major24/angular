import { Customer } from './models/customer';  
import * as customerActions from './customer-store.actions';

export interface CustomerState {  
    customers: Customer[];
    loading: boolean;
}

export const initialState: CustomerState = {  
    customers: [],
    loading: false
};

export function customerReducer(state: CustomerState = initialState, action: customerActions.Actions): CustomerState {  
    switch (action.type) {
        case customerActions.LOAD_CUSTOMERS: {
            console.log(`customerReducer-customer_load`);
            return {
                ...state,
                loading: true // Just set the loading flag to true. This action will mostly be handled by effects
            };
        }
        case customerActions.LOAD_CUSTOMERS_COMPLETE: {
            console.log(`customerReducer-customer_load_complete`);
            return {
                ...state,
                customers: action.customers, // these are the users returned from the data-source
                loading: false
            };
        }
        default:
            console.log(`customerReducer-default`);
            return state;
    }
}