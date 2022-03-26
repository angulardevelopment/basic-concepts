import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplatedReferenceComponent } from './templated-reference/templated-reference.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplateDemoComponent } from './template-tag/template-tag.component';

import { ContainerDemoComponent } from './container-demo/container-demo.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './pipe-demo/exponential-strength.pipe';
import { NgclassComponent } from './ngclass/ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    AttrBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    DirectivesComponent,
    TemplatedReferenceComponent,
    PipeDemoComponent,
    TemplateDemoComponent,
    ContainerDemoComponent,
    ExponentialStrengthPipe,
    NgclassComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,

    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
