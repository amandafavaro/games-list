import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GameService } from '../../services/game.service';

import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent {
  @Input() newGame: Game = new Game();
  @Input() requestType: string = "post";

  gameForm?: FormGroup;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameForm = new FormGroup({
      title: new FormControl(this.newGame.title),
      genre: new FormControl(this.newGame.genre),
      releaseDate: new FormControl(this.newGame.releaseDate),
      multiplayer: new FormControl(this.newGame.multiplayer),
      installed: new FormControl(this.newGame.installed)
    });
  }

  onSubmitForm() {
    this.gameForm?.patchValue({
      title: this.gameForm?.controls['title'].value,
      genre: this.gameForm?.controls['genre'].value,
      releaseDate: new Date(this.gameForm?.controls['releaseDate'].value),
      multiplayer: this.gameForm?.controls['multiplayer'].value,
      installed: this.gameForm?.controls['installed'].value
    })

    this.newGame = {id: this.newGame.id, ...this.gameForm?.value};

    if (this.requestType == "post") {
      this.gameService.postGame(this.newGame);
    } else {
      this.gameService.patchGame(this.newGame.id, this.newGame);
    }    
  }
}
