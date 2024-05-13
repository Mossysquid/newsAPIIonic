import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar } from '@ionic/angular/standalone';
import { NavbarComponent } from "../navbar/navbar.component";
import { ArticalsComponent } from "../articals/articals.component";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.page.html',
    styleUrls: ['./search-page.page.scss'],
    standalone: true,
    imports: [IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, ArticalsComponent, ]
})
export class SearchPagePage{

  constructor() { }

  // ngOnInit() {
  // }
// data : [
//   'Amsterdam',
//   'Buenos Aires',
//   'Cairo',
//   'Geneva',
//   'Hong Kong',
//   'Istanbul',
//   'London',
//   'Madrid',
//   'New York',
//   'Panama City',
// ]
//   public results = [...this.data];
  // handleInput(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  // }
}
