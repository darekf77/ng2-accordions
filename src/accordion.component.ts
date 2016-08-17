import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ecrm-accordion',
    template: require('./accordion.component.html'),
    styles: [ require('./accordion.component.scss') ]
})
export class AccordionCmp implements OnInit {
    constructor() { }

    ngOnInit() { }

}
