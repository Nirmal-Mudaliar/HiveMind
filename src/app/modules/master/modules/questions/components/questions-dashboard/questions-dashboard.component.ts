import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Post } from '../../../../../core/models/post';
import { clone } from 'lodash-es';
import { Router } from '@angular/router';

@Component({
  selector: 'questions-dashboard',
  templateUrl: './questions-dashboard.component.html',
  styleUrl: './questions-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class QuestionsDashboardComponent {
  posts = input.required<Post[]>()

  sortedPosts = computed(() => {
    return clone(this.posts()).sort(
      (a, b) => new Date(b.lastModifiedDate).getTime() - new Date(a.lastModifiedDate).getTime()
    )
  });

  constructor(
    private router: Router,
  ) {

  }

  onAddPostBtnClick(): void {
    this.router.navigate(['questions', 'create']);
  }

}
