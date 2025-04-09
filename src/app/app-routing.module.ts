import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplatedReferenceComponent } from './templated-reference/templated-reference.component';
import { TemplateDemoComponent } from './template-tag/template-tag.component';
import { NewsComponent } from './news/news.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ContainerDemoComponent } from './container-demo/container-demo.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { DirectivesComponent } from './directives/directives.component';
import { WebwokerDemoComponent } from './webwoker-demo/webwoker-demo.component';
import { AngularzoneComponent } from './angularzone/angularzone.component';

export const routes: Routes = [{
  path:'ChangeDetectionComponent',
  component: ChangeDetectionComponent
},
{
  path:'InterpolationComponent',
  component: InterpolationComponent
},
{
  path:'PropertyBindingComponent',
  component: PropertyBindingComponent
},
{
  path:'AttrBindingComponent',
  component: AttrBindingComponent
},
{
  path:'ClassBindingComponent',
  component: ClassBindingComponent
}, {
  path:'StyleBindingComponent',
  component: StyleBindingComponent
},
{
  path:'TwowayBindingComponent',
  component: TwowayBindingComponent
},
{
  path:'PipeDemoComponent',
  component: PipeDemoComponent
},
{
  path:'TemplatedReferenceComponent',
  component: TemplatedReferenceComponent
},
{
  path:'TemplateDemoComponent',
  component: TemplateDemoComponent
},
{
  path:'NewsComponent',
  component: NewsComponent
},
{
  path:'EventBindingComponent',
  component: EventBindingComponent
},
{
  path:'ContainerDemoComponent',
  component: ContainerDemoComponent
},
{
  path:'ViewchildrenComponent',
  component: ViewchildrenComponent
},
{
  path:'DirectivesComponent',
  component: DirectivesComponent
},
{
  path:'WebwokerDemoComponent',
  component: WebwokerDemoComponent
},
{
  path:'AngularzoneComponent',
  component: AngularzoneComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
//     {
//     initialNavigation: 'enabled'
// }
)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
