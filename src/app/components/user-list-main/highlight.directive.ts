import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective {
   
    constructor(
        private el: ElementRef<HTMLElement>,
    ) { }

    @Input()
    set appHighlight(age: number) {
        this.el.nativeElement.style.backgroundColor = (age >= 18 ? 'red':'white');
    }

}
