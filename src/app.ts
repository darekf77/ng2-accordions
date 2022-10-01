//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-ng2-accordions',
      template: 'hello from ng2-accordions'
    })
    export class Ng2AccordionsComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [Ng2AccordionsComponent],
      declarations: [Ng2AccordionsComponent],
      providers: [],
    })
    export class Ng2AccordionsModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion