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
        path: 'apertura',
        loadComponent: () => import('./pages/apertura/apertura.page').then((m) => m.AperturaPage),
    },
    {
        path: 'contactar',
        loadComponent: () => import('./pages/contactar/contactar.page').then(m => m.ContactarPage)
    },
    {
        path: 'carta/:seccion',
        loadComponent: () => import('./pages/carta/carta.page').then(m => m.CartaPage)
    },

];
