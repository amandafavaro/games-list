import { Component, Input } from '@angular/core';

import Game from 'src/app/models/game';

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

    constructor() {  }
}
