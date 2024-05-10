import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle,} from '@ionic/angular/standalone';
import { Articles } from '../interface/articles';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-document',
  templateUrl: './full-document.page.html',
  styleUrls: ['./full-document.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle,]
})
export class FullDocumentPage implements OnInit {
artical: Articles
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap.get('artical');
  }

}
