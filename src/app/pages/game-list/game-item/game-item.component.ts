import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import Game from 'src/app/models/Game';

@Component({
    selector: 'app-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
    @Input() game: Game = {
        title: "Título",
        genre: "Gênero",
        releaseDate: new Date(),
        multiplayer: false
    }

    constructor(public datepipe: DatePipe){}

    changeColor(): string {
        return this.game?.multiplayer? "#00ffff": "";
    }

    formatDate() {
        return this.datepipe.transform(this.game.releaseDate, 'dd/MM/yyyy');
    }
}
