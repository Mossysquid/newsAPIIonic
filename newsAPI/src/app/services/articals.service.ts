import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Articles } from '../interface/articles';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticalsService {

  constructor(
private http: HttpClient
  ) { }
  getArticals(): Observable<Articles>{
    const apiKey = environment.ApiKey;
  return this.http.get<Articles>(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
  }
}
