import { IonMenu, IonMenuButton, IonMenuToggle, IonCheckbox, IonLabel, SearchbarInputEventDetail } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,  IonCard, IonHeader, IonItem, IonToolbar, IonTitle, IonContent, IonList, IonButtons, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonCheckbox, IonSplitPane, IonButtons, IonList, IonContent, IonTitle, IonToolbar, IonItem, IonHeader, IonApp, IonRouterOutlet, IonCard, IonMenu, IonMenuToggle, IonMenuButton],
})
export class AppComponent {
  constructor() {}
  selectedCatagories: string[] = [];handleCheckboxChange(label: string): void {
    if (this.selectedCatagories.includes(label)) {
      // Label is already selected, so remove it
      this.selectedCatagories = this.selectedCatagories.filter(item => item !== label);
    } else {
      // Label is not selected, so add it
      this.selectedCatagories.push(label);
    }
    console.log(this.selectedCatagories)
  }

}
