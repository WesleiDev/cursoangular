import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor() { }

    @HostListener('mouseenter') onMouseDown() {

    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;

  }

  @HostBinding('style.background-color') backgroundColor: string;

  @Input() public defaultColor: string = 'white';
  @Input('highlight') public highlightColor: string = 'yellow'

  ngOnInit(){
    this.backgroundColor = this.defaultColor;  
  }

}
