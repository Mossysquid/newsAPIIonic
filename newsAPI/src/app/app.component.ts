import { IonMenu, IonMenuButton, IonMenuToggle } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { } from '@ionic/angular';
import { IonApp, IonRouterOutlet,  IonCard, IonHeader, IonItem, IonToolbar, IonTitle, IonContent, IonList, IonButtons, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonSplitPane, IonButtons, IonList, IonContent, IonTitle, IonToolbar, IonItem, IonHeader, IonApp, IonRouterOutlet, IonCard, IonMenu, IonMenuToggle, IonMenuButton],
})
export class AppComponent {
  constructor() {}
}
