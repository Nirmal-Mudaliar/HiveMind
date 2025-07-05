import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/master/master.module').then(m => m.MasterModule)
  }
];
