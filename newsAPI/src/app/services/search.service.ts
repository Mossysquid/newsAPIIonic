import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private querySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
  updateQuery(query: string): void {
    this.querySubject.next(query);
  }

  getQuery(): Observable<string> {
    return this.querySubject.asObservable();
  }
}
