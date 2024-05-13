import { ArticalsService } from './../services/articals.service';

import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from "@ionic/angular/standalone";

import { Articles } from '../interface/articles';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.scss'],
  standalone: true,
  imports: [ IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule ,]
})
export class ArticalsComponent  implements OnInit, OnDestroy{
  articles: Articles[] = [];
  pageNumber = 1; // Initial page number
  pageSize = 10;
  query = 'news'; // Initial query
  querySubscription: Subscription;

  constructor(
    private articalsService: ArticalsService,
    private searchService: SearchService
  ) { }
  ngOnInit(): void {
    this.loadArticles();
    this.querySubscription = this.searchService.getQuery().subscribe((query: string) => {
      this.query = query;
      this.loadArticles();
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
 loadArticles() {
  this.articalsService.getArticles(this.pageNumber, this.pageSize, this.query).subscribe(data => {
    if(data) this.articles = data;
    console.log(data)
  })
 }

 loadMoreArticles(event) {
  this.pageNumber++; // Increment page number
    this.articalsService.getArticles(this.pageNumber, this.pageSize, this.query).subscribe(data => {
      if(data) this.articles.push(...data); // Append newly loaded articles
      (event as InfiniteScrollCustomEvent).target.complete(); // Complete the infinite scroll event
    });
  }
//  this.ArticalsService.getArticals()
//  .pipe(
//   map(data => this.articals = data)
//  ).subscribe();
// console.log(this.articals)
  }

