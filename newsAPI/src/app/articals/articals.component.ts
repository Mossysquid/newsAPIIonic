import { ArticalsService } from './../services/articals.service';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from "@ionic/angular/standalone";

import { Articles } from '../interface/articles';
@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.scss'],
  standalone: true,
  imports: [ IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule ,]
})
export class ArticalsComponent  implements OnInit {
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
  this.articalsService.getArticles(this.pageNumber, this.pageSize).subscribe(data => {
    this.articles = data;
    console.log(data)
  })
 }

 loadMoreArticles(event) {
  this.pageNumber++; // Increment page number
    this.articalsService.getArticles(this.pageNumber, this.pageSize).subscribe(data => {
      this.articles.push(...data); // Append newly loaded articles
      (event as InfiniteScrollCustomEvent).target.complete(); // Complete the infinite scroll event
    });
  }
//  this.ArticalsService.getArticals()
//  .pipe(
//   map(data => this.articals = data)
//  ).subscribe();
// console.log(this.articals)
  }

