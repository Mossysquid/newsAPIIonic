import { ArticalsService } from './../services/articals.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from "@ionic/angular/standalone";
import { map } from 'rxjs';
import { Articles } from '../interface/articles';

@Component({
  standalone: true,
  selector: 'app-most-liked',
  templateUrl: './most-liked.component.html',
  styleUrls: ['./most-liked.component.scss'],
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule, ],
  providers: [ArticalsService]
})
export class MostLikedComponent  implements OnInit {
  articles: Articles[] = [];
  pageNumber = 1; // Initial page number
  pageSize = 10;

  constructor(
    private articalsService: ArticalsService
  ) { }
  ngOnInit() {
    this.loadArticles();
 }

 loadArticles() {
  this.articalsService.getTopArticals(this.pageNumber, this.pageSize).subscribe(data => {
    if(data) this.articles = data;
    console.log(data)
  })
 }

 loadMoreArticles(event) {
  this.pageNumber++; // Increment page number
    this.articalsService.getArticles(this.pageNumber, this.pageSize).subscribe(data => {
      if(data) this.articles.push(...data); // Append newly loaded articles
      (event as InfiniteScrollCustomEvent).target.complete(); // Complete the infinite scroll event
    });
  }

}
//data.articals