import { trigger } from '@angular/animations';
import { CommonModule  } from '@angular/common';
import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton, IonButtons, IonSearchbar, IonModal, IonInput, IonItem,  IonCard, IonChip, IonIcon } from '@ionic/angular/standalone';
import { ArticalsComponent } from '../articals/articals.component';
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList,IonButton,IonButtons, IonSearchbar,IonModal, IonInput,IonItem, ArticalsComponent,IonCard, IonChip,IonIcon ],
})
export class HomePage  {
  
  
  }

  