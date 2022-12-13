import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { GameItemComponent } from './game-list/game-item/game-item.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
    declarations: [
        GameListComponent,
        GameItemComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        GameItemComponent,
        GameListComponent        
    ]
})
export class PagesModule { }
