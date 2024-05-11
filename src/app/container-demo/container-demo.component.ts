
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
  //static - True is when the view is initialized (before the first change detection) for the first time. False if you want it to be resolved after every change detection

  comps = [ClassBindingComponent];
  
  ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }
}
