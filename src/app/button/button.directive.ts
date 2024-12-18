import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-button[color]',
  standalone: false
})
export class ButtonDirective {
  // @HostBinding('style.backgroundColor')
  @Input() color? = 'pink'

  constructor(public elementRef:ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.children[0].style.backgroundColor = this.color;
    console.log('hi', this, this.elementRef.nativeElement.children[0].style)
  }






}
