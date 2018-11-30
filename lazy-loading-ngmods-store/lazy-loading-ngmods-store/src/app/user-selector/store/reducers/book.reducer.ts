import { createSelector } from '@ngrx/store';

export interface Book {
    id: number;
    userId: number;
    title: string;
    author: string;
}

export interface BookState {
     book?: Book;
     favBooks: Book[];
}

export const initialState: BookState = {
    book: {id:300, userId: 240, title: 'Javascript V8', author: 'Randy Rattot'},
    favBooks:[
        {id:400, userId: 24, title:'Angular 6', author: 'Samual'},
        {id:401, userId: 24, title:'Docker intro', author: 'Andrea'},
        {id:402, userId: 24, title:'Reach JS', author: 'Jackson'},
    ]
}

export function bookReducer(state = initialState,
            action: {}): BookState {
        // switch stmnt
        // now just return for testing
        return state;
}

// Selectors - book
export const selectBook = (state: BookState) => state.book;
export const selectFavBooks = (state: BookState) => state.favBooks;


// Selector for book
/*
export const selectBookState = (state: BookState) => state;
export const selectFeatureFavBooks = createSelector(
    selectBookState, (state: BookState) => state.book
);
/*
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