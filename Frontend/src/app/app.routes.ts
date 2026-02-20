import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register').then((m) => m.RegisterComponent),
      },
    ],
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
      },

      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile').then((m) => m.ProfileComponent),
      },

      {
        path: 'books',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/books/book-list/book-list').then((m) => m.BookListComponent),
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/books/book-form/book-form').then((m) => m.BookFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/books/book-form/book-form').then((m) => m.BookFormComponent),
          },
        ],
      },
    ],
  },

  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
