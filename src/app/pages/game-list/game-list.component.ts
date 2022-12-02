import { Component } from '@angular/core';

import Game from 'src/app/models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  gameList: Game[] = [
    {
      title: "Counter-Strike",
      genre: "Tactical shooter",
      releaseDate: new Date("11/09/2000"),
      multiplayer: true
    },
    {
      title: "Lineage 2",
      genre: "MMORPG",
      releaseDate: new Date("10/01/2003"),
      multiplayer: true
    },
    {
      title: "Call of Duty: Warzone",
      genre: "Battle Royale",
      releaseDate: new Date("03/10/2020"),
      multiplayer: true
    },
    {
      title: "Black Desert",
      genre: "MMORPG",
      releaseDate: new Date("07/14/2015"),
      multiplayer: true
    },
    {
      title: "Valorant",
      genre: "Tactical shooter",
      releaseDate: new Date("06/02/2020"),
      multiplayer: true
    }
  ];
}