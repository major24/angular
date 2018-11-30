//import { createSelector } from '@ngrx/store';

export interface User {
    id: number;
    name: string;
}

export interface UserState {
     user?: User;
}

export const initialState: UserState = {
    user: {id:100, name: 'Major Nalliah'}
}

export function userReducer(state = initialState,
            action: {}): UserState {
        // switch stmnt
        // now just return for testing
        return state;
}

// Selectors - user
export const selectUser = (state: UserState) => state.user;

















/*export interface Book {
    id: number;
    userId: number;
    title: string;
    author: string;
}*/

/*export interface UserAppState {
    selectedUser: User;
    allBooks: Book[];
}

export const initialState: UserAppState = {
    selectedUser: {id: 24, name: 'Major'},
    allBooks: [
        {id:200, userId: 24, title: 'Rainbow Wars', author: 'Stephan McCall'},
        {id:201, userId: 24, title: 'Stolen Arc', author: 'Jennifer Fernando'}]
}
export function userReducer(state = initialState,
            action: {}): UserAppState {
        // switch stmnt
        // now just return for testing
        return state;
}

// Selectors - user
export const selectFeature = (state: UserAppState) => state.user; // .selectedUser;
export const selectFeatureUser = createSelector(
    selectFeature, (state: UserAppState) => state.selectedUser 
);*/

// Selectors - book
/*export const selectFeatureAllBooks = createSelector(
    selectFeature, (state: UserAppState) => state.allBooks 
);

// selector with param, with help of above selector
export const selectFeatureBookById = (id) => createSelector(
    selectFeatureAllBooks, (allBooks) => {
        if (allBooks){
            return allBooks.find(item => {
                return item.id === id
            });
        } else {
            return {};
        }
});*/
// add more..