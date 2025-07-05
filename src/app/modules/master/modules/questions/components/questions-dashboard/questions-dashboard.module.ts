import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsDashboardRoutingModule } from './questions-dashboard-routing.module';
import { QuestionsDashboardComponent } from './questions-dashboard.component';


@NgModule({
  declarations: [QuestionsDashboardComponent],
  imports: [
    CommonModule,
    QuestionsDashboardRoutingModule
  ]
})
export class QuestionsDashboardModule { }
