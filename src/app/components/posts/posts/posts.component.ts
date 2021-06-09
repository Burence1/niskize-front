import { Posts } from './../../../interfaces/posts';
import { PostsService } from './../../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Posts[]=[];
  constructor(private postsservice:PostsService) { }

  findPosts() {
    this.postsservice.fetchAll().subscribe(
      (res) => {
        this.posts = res

      }, error => {
        console.error(error)
      }
    );
  }
  ngOnInit(): void {
    this.findPosts()
  }
}