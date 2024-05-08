import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonButton, IonContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-user-liked',
  templateUrl: './user-liked.component.html',
  styleUrls: ['./user-liked.component.scss'],
  imports: [IonCardSubtitle, IonCardTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonButton]
})
export class UserLikedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
