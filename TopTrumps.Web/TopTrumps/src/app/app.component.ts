import { Component } from '@angular/core';
import { TopTrumpsDataService } from './top-trumps-data.service';
import { Deck } from './deck';
import { CardData } from './card-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopTrumpsDataService]
})
export class AppComponent {
  title = 'TopTrumps';
  decks: Deck[];
  isGoingFirst: boolean;
  constructor(deckGetter: TopTrumpsDataService) {
    deckGetter.getDecks().subscribe(e => {
      this.decks = e;
    });
    this.chooseFirstPlayer()
  }
  public chooseFirstPlayer(): void {
    let goingFirst = Math.floor(Math.random() * 10)
    this.isGoingFirst = goingFirst < 2
  }
  
}
