import { IonMenuButton } from '@ionic/angular/standalone';
import { IonMenuToggle } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { IonProgressBar, IonItem, IonRow, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonTabs, IonIcon, IonTabButton, IonTabBar, IonButtons, IonSearchbar } from '@ionic/angular/standalone';


@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [IonSearchbar, IonProgressBar, IonItem, IonRow, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkWithHref, IonList, IonTabs, IonIcon, IonTabButton, IonTabBar, IonMenuToggle, IonMenuButton, IonButtons, ]
})
export class NavbarComponent  {
  constructor() {}

  // ngOnInit(): void {}
}
