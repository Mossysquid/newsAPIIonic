import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchPagePage{

  constructor() { }

  // ngOnInit() {
  // }

}
