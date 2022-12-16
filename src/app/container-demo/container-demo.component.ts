
import { Component, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from "@angular/core";
import { ClassBindingComponent } from "../class-binding/class-binding.component";


@Component({
  selector: 'app-container-demo',
  templateUrl: './container-demo.component.html',
  styleUrls: ['./container-demo.component.scss']
})
export class ContainerDemoComponent {
  lessons = [{'sub':'eng'}];
  showLesson = true;
  condition = true;
  items = ["a", "b"]

  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild("tpl", { read: TemplateRef }) tpl: TemplateRef<any>;
  
  comps = [ClassBindingComponent];
  
  ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }
}
