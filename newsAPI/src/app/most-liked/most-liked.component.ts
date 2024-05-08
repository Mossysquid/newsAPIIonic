import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-most-liked',
  templateUrl: './most-liked.component.html',
  styleUrls: ['./most-liked.component.scss'],
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule]
})
export class MostLikedComponent  implements OnInit {

  constructor() { }
articals= [];
  ngOnInit() {
    //subscribe to the service observable getArticals
    for (let i = 1; i < 20; i++) {
      this.articals.push(`Item ${i}`);
    }
  }

}
