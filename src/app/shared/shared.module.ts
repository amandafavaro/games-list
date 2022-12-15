import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';

import { GameDirective } from './directives/game.directive';

import { InstalledPipe } from './pipes/installed.pipe';
import { MultiplayerPipe } from './pipes/multiplayer.pipe';

import { HeaderComponent } from './header/header.component';
import { GameFormComponent } from './game-form/game-form.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        HeaderComponent,
        InstalledPipe,
        MultiplayerPipe,
        GameDirective,
        GameFormComponent,
        DialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        InstalledPipe,
        MultiplayerPipe,
        GameDirective,
        GameFormComponent,
        DialogComponent
    ]
})

export class SharedModule { }