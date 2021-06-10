import { FormControl, FormGroup } from '@angular/forms';
import { Posts } from './../../interfaces/posts';
import { PostsService } from './../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.css']
})
export class UpdatePostsComponent implements OnInit {

  updatepost: Posts = {
    // title: '',
    // image: '',
    // content: '',
    comment: '',
    // first_name:'',
    // pub_date:'',
  };

  commentForm = new FormGroup({
    comment: new FormControl(''),
  });

  posts: Posts[] = [];
  id: any;

  constructor(private postservice: PostsService, private route: ActivatedRoute,
    private redirect: Router) { }

  getPost(id: string | null) {
    this.postservice.get(id)
      .subscribe(
        data => {
          this.updatepost = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  updatePost(): void {
    this.postservice.update(this.updatepost.id, this.updatepost)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
  deletePost(): void {
    this.postservice.delete(this.updatepost.id)
      .subscribe(
        response => {
          console.log(response);
          this.redirect.navigate(['/posts']);
        },
        error => {
          console.log(error);
        });
  }
  onSubmit(post: any) {
    this.postservice.create(post).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(post)
  }

}
