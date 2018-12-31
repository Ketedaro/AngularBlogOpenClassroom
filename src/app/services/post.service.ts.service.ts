import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if (postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  loveIt(i: number) {
    this.posts[i].loveIt++;
    this.emitPostSubject();
  }

  dontLoveIt(i: number) {
    this.posts[i].loveIt--;
    this.emitPostSubject();
  }
}
