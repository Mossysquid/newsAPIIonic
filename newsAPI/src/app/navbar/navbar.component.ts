import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { IonProgressBar, IonItem, IonRow, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, IonList} from '@ionic/angular/standalone';



@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonProgressBar, IonItem, IonRow, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkWithHref, IonList]
})
export class NavbarComponent  {
  constructor() {}

  // ngOnInit(): void {}
}
