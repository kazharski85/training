import { Directive, ElementRef, Input, numberAttribute, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnChanges {

    constructor(
        private el: ElementRef<HTMLElement>,
    ) { }

    @Input({ required: true, transform: numberAttribute })
    age!: number;

    @Input({ required: true, transform: numberAttribute })
    maxAge!: number;

    ngOnChanges(changes: SimpleChanges): void {
        if ('age' in changes || 'maxAge' in changes) {
            this.highlight(this.age, this.maxAge);
        }
    }
    
    highlight(age: number, maxAge: number) {
        this.el.nativeElement.style.backgroundColor = (age >= maxAge ? 'red':'white');
    }

}
