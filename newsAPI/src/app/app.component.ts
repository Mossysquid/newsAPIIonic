import { Component } from '@angular/core';
import { } from '@ionic/angular';
import { IonApp, IonRouterOutlet,  IonCard} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonCard],
})
export class AppComponent {
  constructor() {}
}
