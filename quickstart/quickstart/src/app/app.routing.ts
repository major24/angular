import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { PostsComponent } from './components/posts.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
