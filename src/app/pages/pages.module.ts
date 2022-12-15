import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { GameItemComponent } from './game-list/game-item/game-item.component';
import { GameListComponent } from './game-list/game-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameAddComponent } from './game-add/game-add.component';

@NgModule({
    declarations: [
        GameListComponent,
        GameItemComponent,
        PageNotFoundComponent,
        GameAddComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        GameItemComponent,
        GameListComponent        
    ]
})
export class PagesModule { }
