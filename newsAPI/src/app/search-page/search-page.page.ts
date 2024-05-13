import { ArticalsService } from './../services/articals.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, SearchbarInputEventDetail } from '@ionic/angular/standalone';
import { NavbarComponent } from "../navbar/navbar.component";
import { ArticalsComponent } from "../articals/articals.component";
import { IonSearchbarCustomEvent } from '@ionic/core';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.page.html',
    styleUrls: ['./search-page.page.scss'],
    standalone: true,
    imports: [IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent, ArticalsComponent, ]
})
export class SearchPagePage{

  constructor(private searchService: SearchService) {}

  handleInput(event: any): void {
    const query = event.target.value.trim(); // Trim to remove leading/trailing whitespace
    this.searchService.updateQuery(query);
  }
}
