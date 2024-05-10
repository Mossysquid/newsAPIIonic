import { NewsChannels } from './../interface/newsChannels';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Articles } from '../interface/articles';
import { Observable, map,  } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
  
})
export class ArticalsService {

  constructor(
private http: HttpClient
  ) { }
  //api call for all articals
  getArticals(): Observable<Articles[]>{
    const apiKey = environment.ApiKey;
  return this.http.get<any>(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`).pipe(
    map(data => data.articles)
  );
  }
  //api call for news channels
  getNewsChannels(): Observable<NewsChannels[]>{
    const apiKey = environment.ApiKey;
  return this.http.get<any>(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
  }
  //api call for top articals
  getTopArticals(): Observable<Articles[]>{
    const apiKey = environment.ApiKey;
  return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`).pipe(
    map(data => data.articles)
  )
  }
}
