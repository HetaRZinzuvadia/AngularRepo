import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor = 'red';
  @Output() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private elementRef: ElementRef , private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
