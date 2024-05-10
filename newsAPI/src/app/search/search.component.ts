import { Component, OnInit } from '@angular/core';
import { IonHeader } from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [ ]
})
export class SearchComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
