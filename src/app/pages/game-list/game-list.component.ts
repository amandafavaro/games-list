import { Component, OnInit } from '@angular/core';

import { GameService } from './../../services/game.service';

import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {
  gameList: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameList = this.gameService.getGames();
  }
}