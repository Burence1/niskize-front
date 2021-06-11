import { Posts } from './../../../interfaces/posts';
import { PostsService } from './../../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsform = new FormGroup({
    user: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
    comment:new FormControl(''),
  });


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
  onSubmit(posts: any) {
    this.postsservice.create(posts).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(posts)
  }
}