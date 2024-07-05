import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        loadComponent: () => import('./product/product.component').then(c => c.ProductComponent)
    },
    {
        path: 'user',
        loadChildren: () => import('./user.routes').then(m => m.USER_ROUTES)
    }
];
