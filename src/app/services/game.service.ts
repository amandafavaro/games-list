import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

import Game from 'src/app/models/Game';

const gameListStorageKey = 'Game_List';

const defaultGameList = [
  {
    id: 1,
    title: "Counter-Strike",
    genre: "Tactical shooter",
    releaseDate: new Date("11/09/2000"),
    multiplayer: true,
    installed: true
  },
  {
    id: 2,
    title: "Lineage 2",
    genre: "MMORPG",
    releaseDate: new Date("10/01/2003"),
    multiplayer: true,
    installed: false
  },
  {
    id: 3,
    title: "Demon's Souls",
    genre: "Action role-playing",
    releaseDate: new Date("02/05/2009"),
    multiplayer: false,
    installed: true
  },
  {
    id: 4,
    title: "Black Desert",
    genre: "MMORPG",
    releaseDate: new Date("07/14/2015"),
    multiplayer: true,
    installed: false
  },
  {
    id: 5,
    title: "The Last of Us",
    genre: "Action-adventure",
    releaseDate: new Date("06/14/2013"),
    multiplayer: false,
    installed: false
  },
  {
    id: 6,
    title: "Call of Duty: Warzone",
    genre: "Battle royale",
    releaseDate: new Date("03/10/2020"),
    multiplayer: true,
    installed: true
  }
];

@Injectable({
  providedIn: 'root'
})

export class GameService {
  gameList: Game[] = [];

  constructor(private storageService: StorageService) { 
    this.gameList = storageService.getData(gameListStorageKey) || defaultGameList;
   }

   saveList() {
    this.storageService.setData(gameListStorageKey, this.gameList);
  }

  getGames(): Game[] {
    return this.gameList;
  }

  postGame(newGame: Game): void {
    this.gameList.push(newGame);
    this.saveList();
  }

  patchGame(id: number, patchedGame: Game): void {
    const index = this.gameList.findIndex((game)=> game.id == id);
    this.gameList[index] = patchedGame;
    this.saveList();
  }

  deleteGame(id: number) {
    const index = this.gameList.findIndex((game)=> game.id == id);
    this.gameList.splice(index, 1);
    this.saveList();
  }
}