import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {
      id: '6',
      title: 'How to handle nested routes in Angular?',
      description: 'I want to build a dashboard with nested modules. How do I properly configure child routes?',
      lastModifiedDate: '2025-06-30T09:30:00Z'
    },
    {
      id: '7',
      title: 'What’s the difference between BehaviorSubject and Subject in RxJS?',
      description: 'Can someone explain when to use BehaviorSubject over Subject in an Angular service?',
      lastModifiedDate: '2025-06-29T11:05:00Z'
    },
    {
      id: '8',
      title: 'Best practices for Angular form validation',
      description: 'What’s the cleanest way to handle reactive form validation with custom messages?',
      lastModifiedDate: '2025-06-28T14:40:00Z'
    },
    {
      id: '9',
      title: 'How to lazy load components in Angular 17?',
      description: 'I want to use standalone components and lazy load them. What’s the new syntax?',
      lastModifiedDate: '2025-06-27T17:00:00Z'
    },
    {
      id: '10',
      title: 'What is inject() in Angular and when to use it?',
      description: 'Angular now supports inject(). How does it differ from constructor injection?',
      lastModifiedDate: '2025-06-26T10:10:00Z'
    },
    {
      id: '11',
      title: 'Unit testing services in Angular',
      description: 'How do I write unit tests for services that depend on HttpClient?',
      lastModifiedDate: '2025-06-25T15:20:00Z'
    },
    {
      id: '12',
      title: 'Angular vs React for large enterprise apps',
      description: 'We’re evaluating Angular vs React for a complex internal tool. What are your experiences?',
      lastModifiedDate: '2025-06-24T18:00:00Z'
    },
    {
      id: '13',
      title: 'How to use standalone pipes and directives?',
      description: 'Angular 16 introduced standalone pipes. How do I use them without NgModules?',
      lastModifiedDate: '2025-06-23T13:30:00Z'
    },
    {
      id: '14',
      title: 'How to create dynamic forms in Angular?',
      description: 'Need to generate form fields based on a JSON schema. What’s the best approach?',
      lastModifiedDate: '2025-06-22T09:45:00Z'
    },
    {
      id: '15',
      title: 'How to debounce search input using RxJS?',
      description: 'Trying to debounce a search box. How do I use debounceTime with a FormControl?',
      lastModifiedDate: '2025-06-21T12:15:00Z'
    },
    {
      id: '16',
      title: 'Angular animations not triggering on route change',
      description: 'I’ve set up animations but they’re not working on navigation. Any idea what’s missing?',
      lastModifiedDate: '2025-06-20T14:55:00Z'
    },
    {
      id: '17',
      title: 'How to use ViewChild with standalone components?',
      description: 'Trying to reference a child component via ViewChild. Does it work with standalone?',
      lastModifiedDate: '2025-06-19T11:25:00Z'
    },
    {
      id: '18',
      title: 'Why do I get ExpressionChangedAfterItHasBeenCheckedError?',
      description: 'I’m getting this error in dev mode. What causes it and how can I avoid it?',
      lastModifiedDate: '2025-06-18T16:45:00Z'
    },
    {
      id: '19',
      title: 'PrimeNG DataTable pagination with server-side API',
      description: 'How do I integrate PrimeNG table pagination with a paginated backend?',
      lastModifiedDate: '2025-06-17T08:00:00Z'
    },
    {
      id: '20',
      title: 'Best way to share state between Angular modules',
      description: 'Should I use a shared service or NgRx store for cross-module communication?',
      lastModifiedDate: '2025-06-16T10:50:00Z'
    },
    {
      id: '21',
      title: 'Can I preload lazy-loaded modules in Angular?',
      description: 'Is there a way to preload modules after initial load for performance?',
      lastModifiedDate: '2025-06-15T13:40:00Z'
    },
    {
      id: '22',
      title: 'Handling scroll position on route change',
      description: 'How to preserve or reset scroll position when navigating between routes?',
      lastModifiedDate: '2025-06-14T17:25:00Z'
    },
    {
      id: '23',
      title: 'Angular Signals vs RxJS: When to use what?',
      description: 'With Angular Signals gaining traction, should I replace RxJS for local state?',
      lastModifiedDate: '2025-06-13T09:10:00Z'
    },
    {
      id: '24',
      title: 'How to show skeleton loader in Angular?',
      description: 'Looking to add a skeleton screen while data loads. Any recommendations?',
      lastModifiedDate: '2025-06-12T12:35:00Z'
    },
    {
      id: '25',
      title: 'ngOnDestroy not being called — why?',
      description: 'I have a component with subscriptions, but ngOnDestroy doesn’t fire. What could cause this?',
      lastModifiedDate: '2025-06-11T15:00:00Z'
    }
  ];

  constructor() { }

  getPostById(postId: string): Post | undefined {
    return this.posts.find(post => post.id === postId);
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
