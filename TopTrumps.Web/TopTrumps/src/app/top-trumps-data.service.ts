import { Injectable } from '@angular/core';
import { TopTrumpsApp } from './top-trumps-app'
import { Deck } from './deck'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopTrumpsDataService {

  constructor(private http: HttpClient) { }

  getDecks(): Observable<Deck[]> {

    let decks = this.http.get<Deck[]>("api/deck");
    return decks;
  }
}
