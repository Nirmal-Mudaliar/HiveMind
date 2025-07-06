import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getPostsResolver } from '../../../core/resolvers/get-posts.resolver';
import { getPostResolver } from '../../../core/resolvers/get-post.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/questions-dashboard/questions-dashboard.module').then(m => m.QuestionsDashboardModule),
        resolve: { posts: getPostsResolver },
      },
      {
        path: 'create',
        loadComponent: () => import('./components/question-detail/question-detail.component').then(c => c.QuestionDetailComponent),
      },
      {
        path: ':postId',
        loadComponent: () => import('./components/question-detail/question-detail.component').then(c => c.QuestionDetailComponent),
        resolve: { post: getPostResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
