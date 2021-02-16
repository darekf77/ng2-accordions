import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ecrm-accordion-group',
    template: require('./accordion-group.component.html'),
    styles: [require('./accordion-group.component.scss')]
})
export class AccordionGroupCmp implements OnInit {

    @Output() arrowClick = new EventEmitter<boolean>();
    @Input() heading: string = '';
    @Input() isExpanded: boolean = true;

    open() {
        this.arrowClick.next(true);
    }

    close() {
        this.arrowClick.next(false);
    }

    constructor() { }

    ngOnInit() { }

}
