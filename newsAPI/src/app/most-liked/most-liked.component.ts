import { ArticalsService } from './../services/articals.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/angular/standalone";
import { map } from 'rxjs';
import { Articles } from '../interface/articles';

@Component({
  standalone: true,
  selector: 'app-most-liked',
  templateUrl: './most-liked.component.html',
  styleUrls: ['./most-liked.component.scss'],
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonList, IonButton, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, CommonModule, ],
  providers: [ArticalsService]
})
export class MostLikedComponent  implements OnInit {

  constructor(
    private ArticalsService: ArticalsService
  ) { }
articals: Articles[];
  ngOnInit() {
    //subscribe to the service observable getArticals
     this.ArticalsService.getTopArticals()
     .pipe(
      map(data => this.articals = data)
     ).subscribe(
     );
    console.log(this.articals)
  }

}
//data.articals