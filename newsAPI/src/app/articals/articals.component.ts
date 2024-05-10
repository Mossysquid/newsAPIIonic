import { ArticalsService } from './../services/articals.service';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/angular/standalone";

import { map } from 'rxjs';
import { Articles } from '../interface/articles';
@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.scss'],
  standalone: true,
  imports: [ IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule ,]
})
export class ArticalsComponent  implements OnInit {

  constructor(
    private ArticalsService: ArticalsService
  ) { }
  articals: Articles[];
  ngOnInit() {
    this.ArticalsService.getArticals()
    .pipe(
     map(data => this.articals = data)
    ).subscribe();
   console.log(this.articals)
 }
  }

