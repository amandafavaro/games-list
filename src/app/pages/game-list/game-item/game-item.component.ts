import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GameService } from './../../../services/game.service';

import { DialogComponent } from './../../../shared/dialog/dialog.component';

import Game from 'src/app/models/Game';

@Component({
    selector: 'app-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']
})

export class GameItemComponent {
    @Input() game?: Game;
    @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

    constructor(private gameService: GameService, private dialog: MatDialog) { }

    changeInstalled(): void {
        if (this.game) this.game.installed = !this.game?.installed;
    }

    deleteGame() {
        if (this.game) this.gameService.deleteGame(this.game.id);
    }

    openDialog() {
        if (this.dialogTemplate) {
            this.dialog.open(this.dialogTemplate, {
                data: { title: "Update Game" }
            });
        }
    }
}