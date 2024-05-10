import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  
  },
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'Login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'Likedpage',
    loadComponent: () => import('./liked-page/liked-page.page').then( m => m.LikedPagePage)
  },
  {
    path: 'full-document',
    loadComponent: () => import('./full-document/full-document.page').then( m => m.FullDocumentPage)
  },
  
  {
    path: 'search-page',
    loadComponent: () => import('./search-page/search-page.page').then( m => m.SearchPagePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },


  
  
];

