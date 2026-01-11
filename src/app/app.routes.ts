import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
    },
    {
        path: 'menu',
        loadComponent: () => import('./pages/menu/menu.page').then(m => m.MenuPage)
    },
    {
        path: 'apertura',
        loadComponent: () => import('./pages/apertura/apertura.page').then((m) => m.AperturaPage),
    },
    {
        path: 'contactar',
        loadComponent: () => import('./pages/contactar/contactar.page').then(m => m.ContactarPage)
    },
    {
        path: 'carta/:tipo',
        loadComponent: () => import('./pages/carta/carta.page').then(m => m.CartaPage)
    },

];
