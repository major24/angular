import { createSelector } from '@ngrx/store';

import * as users from './user.reducer';
import * as books from './book.reducer';
import { ActionReducer, combineReducers } from "@ngrx/store";
import { ActionReducerMap } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";


export interface UserBookAppState {
    user: users.UserState;
    book: books.BookState;
}

export const reducers = {
    user: users.userReducer,
    book: books.bookReducer
}


// Selector for book
export const getUserBookState = createFeatureSelector<UserBookAppState>('user_book');
export const getUser = createSelector(
    getUserBookState,(state: UserBookAppState) => state.user
);

export const getBook = createSelector(
    getUserBookState,(state: UserBookAppState) => state.book
);







/*
export const initialState: UserBookAppState = {
    selectedUser: {id: 24, name: 'Major Nalliah'},
    allBooks: [
        {id:200, userId: 24, title: 'Colonial Wars', author: 'Stephan McCall'},
        {id:201, userId: 24, title: 'In Your Dreams', author: 'Jennifer Fernando'}]
}
export function userReducer(state = initialState,
            action: {}): UserState {
        // switch stmnt
        // now just return for testing
        return state;
}

// Selectors - user
export const selectUser = (state: UserState) => state.user;
*/
















