import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Post } from '../../../../../core/models/post';
import { PostForm } from './models/post-form';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'question-detail',
  imports: [CommonModule],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionDetailComponent {

  post = input<Post>();

  postForm: FormGroup<PostForm> = new FormGroup<PostForm>({
    id: new FormControl(null),
    title: new FormControl(null),
    description: new FormControl(null),
    lastModifiedDate: new FormControl(null),
  });

  constructor(
    private router: Router,
  ) {
  }

  onBackBtnClick(): void {
    this.router.navigate(['questions']);
  }
}
