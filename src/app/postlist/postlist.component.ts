import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service.ts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-postlist',
    templateUrl: './postlist.component.html',
    styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

    posts: Post[];
    postsSubscription: Subscription;

    constructor(private postsService: PostService, private router: Router) { }

    ngOnInit() {
        this.postsSubscription = this.postsService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        )
        this.postsService.emitPosts();
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
