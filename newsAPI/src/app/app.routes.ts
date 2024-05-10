import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  
  },
  {
    path: 'searchpage',
    loadComponent: () => import('./searchpage/searchpage.page').then( m => m.searchpagePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'liked-page',
    loadComponent: () => import('./liked-page/liked-page.page').then( m => m.LikedPagePage)
  },
  {
    path: 'full-document',
    loadComponent: () => import('./full-document/full-document.page').then( m => m.FullDocumentPage)
  },
  
  
];

