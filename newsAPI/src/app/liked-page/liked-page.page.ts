import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonCard, IonRow, IonItem, IonProgressBar } from '@ionic/angular/standalone';
import { UserLikedComponent } from "../user-liked/user-liked.component";
import { MostLikedComponent } from "../most-liked/most-liked.component";



@Component({
    standalone: true,
    selector: 'app-liked-page',
    templateUrl: './liked-page.page.html',
    styleUrls: ['./liked-page.page.scss'],
    imports: [IonProgressBar, IonItem, IonRow, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UserLikedComponent, MostLikedComponent, NavbarComponent, ]
})
export class LikedPagePage  {
  public progress = 0;
  constructor() { 
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }


}
