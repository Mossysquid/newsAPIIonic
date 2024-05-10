import { NewsChannels } from './../interface/newsChannels';
import { Component, OnInit } from '@angular/core';
import { ArticalsService } from './../services/articals.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss'],
  standalone: true,
  imports: []
})
export class CatagoriesComponent  implements OnInit {

  constructor(
    private ArticalsService: ArticalsService
  ) { }
  newsChannels: NewsChannels[];

  ngOnInit() {
    this.ArticalsService.getNewsChannels()
    .pipe(
     map(data => this.newsChannels = data)
    ).subscribe();
   console.log(this.newsChannels)
  }

}
