import { Component, OnInit } from '@angular/core';
import { IonHeader } from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular/standalone';
import { ArticalsComponent } from '../articals/articals.component';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
  imports: [ IonHeader,IonSearchbar,ArticalsComponent ]
})
export class SearchpageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
