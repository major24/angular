import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
//import { UserAppState, User, Book }  from '../store/reducers/user.reducer';
//import { selectFeature, selectFeatureUser, 
  //  selectFeatureAllBooks, selectFeatureBookById }  from '../store/reducers/user.reducer';
import { User, selectUser }  from '../store/reducers/user.reducer';
import { Book } from '../store/reducers/book.reducer';
import { UserBookAppState, getUserBookState, getUser, getBook } from '../store/reducers/index.reducer';
// selectors
//import { selectBookState } from '../store/reducers/index.reducer';
// selectFeatureFavBooks, selectBookState


///import { selectFeature, selectFeatureUser, 
   // selectFeatureAllBooks, selectFeatureBookById }  from '../store/reducers/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: Observable<UserBookAppState>;
  user: User;
  book: Book;
  favBooks: Book[];

  selectUser: User;
  selectBook: Book;
  selectFavBooks: Book[];
  selectBookById: Book;

  constructor(private store: Store<UserBookAppState>) {
    this.user$ = store.pipe(select('user_book'));
   }

  ngOnInit() {
    this.user$.subscribe((x) => {
      console.log(x.user);
      this.user = x.user.user;
    });

    this.user$.subscribe((x) => {
      this.book = x.book.book;
    });
    //this.user$.subscribe((x) => {
      //this.favBooks = x.book.favBooks;
    //});

    // using selectors
    this.debugSelectUserBySelector();
    //this.debugSelectsBookById(201);*/
  }



  debugSelectUserBySelector(){
    console.log('using selectors-book');
    this.store.pipe(select(getUserBookState))
      .subscribe((x) => {
        console.log(x);
        //this.selectFavBooks = x as Book[];
      });
    this.store.pipe(select(getUser))
      .subscribe((x) => {
        console.log(x);
        this.selectUser = x.user as User;
      });

      // book
     this.store.pipe(select(getBook))
      .subscribe((x) => {
        console.log(x);
        this.selectBook = x.book as Book;
      });     

  }

  debugSelectsBookById(id){
    console.log('using selectors-book by id');
/*    this.store.pipe(select(selectFeatureBookById(id)))
      .subscribe((x) => {
        console.log(x);
        this.selectBookById = x as Book;
      });*/
  }
  

  
}

  
 
