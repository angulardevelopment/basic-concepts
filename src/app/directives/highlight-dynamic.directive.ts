import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDynamic]',
})
export class HighlightDynamicDirective {
  @Input() defaultColor: string;
  @Input('appHighlightDynamic') highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {

    this.backgroundColor = this.defaultColor;
  }
}
