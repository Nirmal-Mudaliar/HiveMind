import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from '../../../../../../../core/models/post';

@Component({
  selector: 'post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  post = input.required<Post>();
}
