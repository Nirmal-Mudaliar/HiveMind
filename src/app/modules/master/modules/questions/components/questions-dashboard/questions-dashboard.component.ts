import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Post } from '../../../../../core/models/post';
import { clone } from 'lodash-es';

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

}
