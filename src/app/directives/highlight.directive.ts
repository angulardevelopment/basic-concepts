import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() defaultColor: string = 'yellow';
  @Input('appHighlight') highlightColor: string = 'red';
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
