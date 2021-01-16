import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlightdirective]'
})
export class HighlightdirectiveDirective {
  
  private isHighlight=false
  
  @HostBinding('class.colourchange')
  get highlighted(){
    return this.isHighlight
  }

  @HostListener('mouseover')
  mouseOver(){
    this.isHighlight=true
  }
  @HostListener('mouseout')
  mouseOut(){
    this.isHighlight=false
  }
  constructor() { }

}
