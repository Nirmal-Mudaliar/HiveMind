import { ResolveFn } from '@angular/router';
import { Post } from '../models/post';
import { inject } from '@angular/core';
import { PostService } from '../services/post.service';

export const getPostsResolver: ResolveFn<Post[]> = (route, state) => {

  // TODO: Emit an event to fetch posts to the state
  // Get the list from the selector after the request is successfull.
  const postService = inject(PostService);
  return postService.getPosts();
};
