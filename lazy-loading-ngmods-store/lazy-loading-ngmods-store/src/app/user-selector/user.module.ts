import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';  

//import { userReducer } from './store/reducers/user.reducer'; 
import * as fromReducer  from './store/reducers/index.reducer'; 

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
        StoreModule.forFeature(
              'user_book', fromReducer.reducers
            )

  ],
  declarations: [UserComponent],
  providers: []
})
export class UserModule { }

