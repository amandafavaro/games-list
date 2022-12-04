import { Component } from '@angular/core';

import Game from 'src/app/models/Game';

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
      title: "Demon's Souls",
      genre: "Action role-playing",
      releaseDate: new Date("02/05/2009"),
      multiplayer: false
    },
    {
      title: "Black Desert",
      genre: "MMORPG",
      releaseDate: new Date("07/14/2015"),
      multiplayer: true
    },
    {
      title: "The Last of Us",
      genre: "Action-adventure",
      releaseDate: new Date("06/14/2013"),
      multiplayer: false
    },
    {
      title: "Call of Duty: Warzone",
      genre: "Battle royale",
      releaseDate: new Date("03/10/2020"),
      multiplayer: true
    }
  ];
}