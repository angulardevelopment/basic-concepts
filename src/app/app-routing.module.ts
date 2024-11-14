import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [{
  path:'detection',
  component: ChangeDetectionComponent
},
{
  path:'InterpolationComponent',
  component: InterpolationComponent
}, 
{
  path:'PropertyBindingComponent',
  component: PropertyBindingComponent
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
