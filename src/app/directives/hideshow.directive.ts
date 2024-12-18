import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideshow]',
  standalone: false
})
export class HideshowDirective {


  @Input('appHideshow') highlightColor: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {


  }

  ngOnInit() {
      console.log(this.highlightColor)
    let privilegeRole = this.highlightColor;
      if (privilegeRole === 'red2') {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
  }
}
