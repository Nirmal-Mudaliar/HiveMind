import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsDashboardRoutingModule } from './questions-dashboard-routing.module';
import { QuestionsDashboardComponent } from './questions-dashboard.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [QuestionsDashboardComponent],
  imports: [
    CommonModule,
    QuestionsDashboardRoutingModule,
    PostComponent,
  ]
})
export class QuestionsDashboardModule { }
