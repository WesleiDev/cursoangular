import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {


  }

  @HostListener('mouseenter') onMouseDown() {
    // this.renderer.setElementStyle(this.elementRef.nativeElement,
    //   'background-color', 'yellow');

    this.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') onMouseLeave(){
    //   this.renderer.setElementStyle(this.elementRef.nativeElement, 
    // 'background-color','white');
    this.backgroundColor = 'white';

  }

  @HostBinding('style.background-color') backgroundColor: string;



}
