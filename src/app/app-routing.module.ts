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

const routes: Routes = [{
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
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
//     {
//     initialNavigation: 'enabled'
// }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
