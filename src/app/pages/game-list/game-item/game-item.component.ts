import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import Game from 'src/app/models/Game';

@Component({
    selector: 'app-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
    @Input() game: Game = {
        title: "Title",
        genre: "Genre",
        releaseDate: new Date(),
        multiplayer: false,
        installed: false
    }

    constructor(){}

    changeInstalled(): void {
        if (this.game) this.game.installed = !this.game.installed;
    }
}
