import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home';
import { ProfileComponent } from './features/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'books',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/books/books-routing.module').then((m) => m.BooksRoutingModule),
  },

  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
