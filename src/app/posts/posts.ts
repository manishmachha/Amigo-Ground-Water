import { Component, inject, signal } from '@angular/core';
import { PostService } from '../services/post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  postService = inject(PostService);

  posts = signal<any[]>([]);
  formId = '8724ee6f-7fd5-4c8e-aac4-883134d1712f';
  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((res: any) => {
      this.posts.set(res);
      console.log(this.posts());
    });
  }
}
