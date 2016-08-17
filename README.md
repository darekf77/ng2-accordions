## Accordions for Angular2 appps ##

Super nice accordions wih animation for angual2 apps based on bootstrap3.

**import it**

    import { AccordionCmp, AccordionGroupCmp } from "ng2-accordions/ng2-accordions"


include it

    ...
    directives: [ AccordionCmp, AccordionGroupCmp]
    ....

use it in html ... you can do it int 2 ways :

    <ecrm-accordion>
      
      <ecrm-accordion-group heading="Title" [isExpanded]="e['other_informations']">
      	body 1
      </ecrm-accordion-group>
      
      <ecrm-accordion-group 
      [isExpanded]="e[accordion.name] 
      (arrowClick)="e[accordion.name]=$event">
	        <nav head>`enter code here`
    		 <h1> My own awesome header </h1>
	      </nav>  
    	body2
      </ecrm-accordion-group>

    <ecrm-accordion>


