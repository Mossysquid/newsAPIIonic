import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonSearchbar } from '@ionic/angular/standalone';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList],
})
export class HomePage {

}
