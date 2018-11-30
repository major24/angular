import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './components/home.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { AddressDetailUpdateComponent} from './address-detail-update/address-detail-update.component';


const appRoutes: Routes = [
    //{
      //  path: '',
        //component: HomeComponent
    //},
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: 'counter',
      component: CounterComponent
    },
    {
      path: 'alert-button',
      component: AlertButtonComponent
    },
    {
      path: 'address-detail',
      component: AddressDetailComponent
    },
    {
      path: 'customer',
      component: CustomerComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'address-detail-update',
      component: AddressDetailUpdateComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
