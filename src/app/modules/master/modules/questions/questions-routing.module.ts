import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getPostsResolver } from '../../../core/resolvers/get-posts.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/questions-dashboard/questions-dashboard.module').then(m => m.QuestionsDashboardModule),
        resolve: { posts: getPostsResolver},
      },
      {
        path: 'create',
        loadComponent: () => import('./components/question-detail/question-detail.component').then(c => c.QuestionDetailComponent),
      },
      {
        path: ':questionId',
        loadComponent: () => import('./components/question-detail/question-detail.component').then(c => c.QuestionDetailComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
