import { Articles } from './../../interfaces/articles';
import { ArticlesService } from './../../services/articles/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})
export class UpdateArticlesComponent implements OnInit {

  updatearticle: Articles = {
    title: '',
    image: '',
    content: '',

  };

  articles:Articles[]=[];
  id: any;

  constructor(private articlesservice: ArticlesService, private route: ActivatedRoute,
    private redirect: Router) { }

  getArticle(id: string | null) {
    this.articlesservice.get(id)
      .subscribe(
        data => {
          this.updatearticle = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  ngOnInit(): void {
    this.getArticle(this.route.snapshot.paramMap.get('id'));
  }

  updateArticle(): void {
    this.articlesservice.update(this.updatearticle.id, this.updatearticle)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteArticle(): void {
    this.articlesservice.delete(this.updatearticle.id)
      .subscribe(
        response => {
          console.log(response);
          this.redirect.navigate(['/articles']);
        },
        error => {
          console.log(error);
        });
  }
}