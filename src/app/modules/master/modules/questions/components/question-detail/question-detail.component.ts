import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Post } from '../../../../../core/models/post';

@Component({
  selector: 'question-detail',
  imports: [CommonModule],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionDetailComponent {

  post = input<Post>();

  constructor(
    private router: Router,
  ) {
  }

  onBackBtnClick(): void {
    this.router.navigate(['questions']);
  }
}
