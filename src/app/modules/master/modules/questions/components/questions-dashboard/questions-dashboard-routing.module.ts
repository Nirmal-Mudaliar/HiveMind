import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsDashboardComponent } from './questions-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsDashboardRoutingModule { }
