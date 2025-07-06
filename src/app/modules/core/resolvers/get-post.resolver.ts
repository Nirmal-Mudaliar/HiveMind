import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

export const getPostResolver: ResolveFn<Post | undefined> = (route, state) => {
  const { postId } = route.params;
  const postService = inject(PostService);
  const router = inject(Router);
  const post: Post | undefined = postService.getPostById(postId);
  if (!post) {
    router.navigate(['questions']);
  }
  return post;
};
