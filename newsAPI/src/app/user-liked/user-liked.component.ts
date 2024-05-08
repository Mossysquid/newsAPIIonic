import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonButton, IonContent, IonCardTitle, IonCardSubtitle, IonList, IonInfiniteScroll, IonItem, IonInfiniteScrollContent, IonAvatar, IonLabel } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-user-liked',
  templateUrl: './user-liked.component.html',
  styleUrls: ['./user-liked.component.scss'],
  imports: [IonLabel, IonAvatar, IonInfiniteScrollContent, IonItem, IonInfiniteScroll, IonList, IonCardSubtitle, IonCardTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonButton, CommonModule]
})
export class UserLikedComponent  implements OnInit {

  constructor() { }
  articals = [];
  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      this.articals.push(`Item ${i}`);
    }
  }
 
}
