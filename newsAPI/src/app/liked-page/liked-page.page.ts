import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UserLikedComponent } from "../user-liked/user-liked.component";

@Component({
    standalone: true,
    selector: 'app-liked-page',
    templateUrl: './liked-page.page.html',
    styleUrls: ['./liked-page.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UserLikedComponent]
})
export class LikedPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
