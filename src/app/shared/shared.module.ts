import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';

import { InstalledPipe } from './pipes/installed.pipe';
import { MultiplayerPipe } from './pipes/multiplayer.pipe';

import { GameDirective } from './directives/game.directive';

@NgModule({
    declarations: [
        HeaderComponent,
        InstalledPipe,
        MultiplayerPipe,
        GameDirective
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        InstalledPipe,
        MultiplayerPipe,
        GameDirective
    ]
})

export class SharedModule { }