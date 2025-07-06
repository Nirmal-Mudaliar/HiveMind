import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from '../../../../../../../core/models/post';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'post',
  imports: [RouterLink, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  post = input.required<Post>();
}
