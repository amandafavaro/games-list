import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        MatToolbarModule,
        MatSlideToggleModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }
