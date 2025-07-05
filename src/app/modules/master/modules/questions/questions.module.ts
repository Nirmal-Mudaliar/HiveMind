import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { RouterOutlet } from '@angular/router';
import { QuestionsComponent } from './questions.component';


@NgModule({
  declarations: [
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    RouterOutlet,
  ]
})
export class QuestionsModule { }
