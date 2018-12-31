import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service.ts.service';
import { Post } from '../models/post.model';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() post: Post;
    @Input() index: number;

    //lastUpdate = this.post.created_at;

    constructor(private route: ActivatedRoute, private postsService: PostService, private router: Router) { }

    ngOnInit() {
    }

    onLoveIt() {
        this.postsService.loveIt(this.index);
    }

    onDontLoveIt() {
        this.postsService.dontLoveIt(this.index);
    }

    onViewPost(id: number) {
        this.router.navigate(['/posts', this.index]);
    }

    onDeletePost(post: Post) {
        this.postsService.removePost(post);
    }

    getColor() {
        if (this.post.loveIt >= 0) {
            return 'green';
        } else if (this.post.loveIt < 0) {
            return 'red';
        }
    }
}
