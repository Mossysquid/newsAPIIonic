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
    getArticles(page: number, pageSize: number): Observable<Articles[]> {
      const apiKey = environment.ApiKey;
      const apiUrl = `https://newsapi.org/v2/everything?q=apple&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      return this.http.get<any>(apiUrl).pipe(
        map(data => data.articles),
        map(articles => articles.filter(article => article.title !== null && article.title !== "[Removed]"))
      );
    }

  //api call for news channels
  getNewsChannels(): Observable<NewsChannels[]>{
    const apiKey = environment.ApiKey;
  return this.http.get<any>(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
  }
  //api call for top articals
  getTopArticals(page: number, pageSize: number): Observable<Articles[]>{
    const apiKey = environment.ApiKey;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`
  return this.http.get<any>(apiUrl).pipe(
    map(data => data.articles),
    map(articles => articles.filter(article => article.title !== null && article.title !== "[Removed]"))
  );
  }
  queryArticals(query): Observable<Articles[]>{
    const apiKey = environment.ApiKey;
  return this.http.get<any>(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`).pipe(
    map(data => data.articles),
      map(articles => articles.filter(article => article.title !== null && article.title !== "[Removed]"))
  );
  }
}
