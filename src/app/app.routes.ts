import { Routes } from '@angular/router';
import { authGuard } from './modules/core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/master/master.module').then(m => m.MasterModule),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  }
];
