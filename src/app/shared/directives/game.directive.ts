import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[gameDirective]'
})

export class GameDirective implements OnChanges {
    @Input()
    gameDirective: boolean | undefined;

    constructor(private el: ElementRef) {
        console.log(this.gameDirective);        
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.gameDirective) {
            this.el.nativeElement.style.backgroundColor = 'deepskyblue';
        } else {
            this.el.nativeElement.style.backgroundColor = 'khaki';
        }
    }
}