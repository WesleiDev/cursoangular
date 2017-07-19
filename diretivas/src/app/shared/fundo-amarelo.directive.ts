import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private rederer: Renderer) { 
    //console.log(this.elementRef.nativeElement.style.backgroundColor);
    
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    this.rederer.setElementStyle(this.elementRef.nativeElement, 
    'background-color','yellow');
    
  }

}
