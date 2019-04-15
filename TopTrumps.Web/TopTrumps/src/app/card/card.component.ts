import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../card-data';
import { Deck } from '../deck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public isGoingFirst: boolean;
  @Input() public decks: Deck[];
  public winningPlayer: string;
  public gameStarted: boolean = false;
  constructor() { }
  ngOnInit() {
  }

  public compareValues(value: string): void {
    switch (value) {
      case "cost_in_credits":
        this.largerValueWins(value);
        break;
      case "crew":
        this.smallerValueWins(value);
        break;
      case "mglt":
        this.largerValueWins(value);
        break;
      case "films":
        this.largerValueWins(value);
        break;
      case "hyperdrive_rating":
        this.largerValueWins(value);
        break;
    }
  }
  public smallerValueWins(value: string): void {
    let playersValue = this.decks[0].ships[0][value];
    let opponentsValue = this.decks[1].ships[0][value];
    if (playersValue < opponentsValue) {
      let winnings = this.decks[1].ships.shift();
      let lastCardInDeck = this.decks[0].ships.shift();
      this.decks[0].ships.push(winnings);
      this.decks[0].ships.push(lastCardInDeck);
      this.checkForWinner();
      return;
    }
    let winnings = this.decks[0].ships.shift();
    let lastCardInDeck = this.decks[1].ships.shift();
    this.decks[1].ships.push(winnings);
    this.decks[1].ships.push(lastCardInDeck);
    this.checkForWinner();
    return;
  }
  public largerValueWins(value: string): void {
    let playersValue = this.decks[0].ships[0][value];
    let opponentsValue = this.decks[1].ships[0][value];
    if (playersValue > opponentsValue) {
      let winnings = this.decks[1].ships.shift();
      let lastCardInDeck = this.decks[0].ships.shift();
      this.decks[0].ships.push(winnings);
      this.decks[0].ships.push(lastCardInDeck);
      this.checkForWinner();
      return;
    }
    let winnings = this.decks[0].ships.shift();
    let lastCardInDeck = this.decks[1].ships.shift();
    this.decks[1].ships.push(winnings);
    this.decks[1].ships.push(lastCardInDeck);
    this.checkForWinner();
    return;
  }
  public opponentsTurn(): void{
    let arrayOfProperties = ["cost_in_credits", "crew", "films", "hyperdrive_rating", "mglt"];
    let chosenProperty = Math.floor(Math.random() * arrayOfProperties.length);
    this.compareValues(arrayOfProperties[chosenProperty])
    return;
  }
  public playerTurn(value: string): void {
    this.compareValues(value);
    this.opponentsTurn();
  }
  public checkForWinner(): void {
    if (this.decks[0].ships.length < 1) {
      this.winningPlayer = "Player wins; bet you can't do it again.";
      return;      
    }
    if (this.decks[1].ships.length < 1) {
      this.winningPlayer = "Ai wins."
      return;
    }
    return;
  }
  public beginGame(): void {
    
    if (!this.isGoingFirst) {
      this.opponentsTurn();
    }
    this.gameStarted = true;
    return;
  }
}
