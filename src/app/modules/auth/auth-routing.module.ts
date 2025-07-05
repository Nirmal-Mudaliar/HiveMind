import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component').then(c => c.LoginComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./modules/sign-up/sign-up.component').then(c => c.SignUpComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
