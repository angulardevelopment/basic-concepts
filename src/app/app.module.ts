import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
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
import { SortPipe } from './pipe-demo/sort.pipe';
import { TestComponent } from './templated-reference/test/test.component';
import { HeadingComponent } from './template-tag/heading/heading.component';
import { SizerComponent } from './twoway-binding/sizer/sizer.component';
import { WebwokerDemoComponent } from './webwoker-demo/webwoker-demo.component';
import { AngularzoneComponent } from './angularzone/angularzone.component';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './button/button.directive';
import { CountDirective } from './directives/count.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightDynamicDirective } from './directives/highlight-dynamic.directive';
import { HideshowDirective } from './directives/hideshow.directive';
import { SpecialComponent } from './button/special/special.component';
import { MyPipe } from './button/my.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { TestComponent1 } from './change-detection/test/test.component';
import { ListComponent } from './list/list.component';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import  { createCustomElement } from '@angular/elements';
import { CurrencyFormatPipe } from './currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    // AttrBindingComponent,
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
    SortPipe,
    TestComponent,
    HeadingComponent,
    SizerComponent,
    WebwokerDemoComponent,
    AngularzoneComponent,
    ButtonComponent,
    ButtonDirective,
    HideshowDirective, HighlightDirective, HighlightDynamicDirective,
    CountDirective, SpecialComponent, MyPipe, LifecycleHooksComponent,
    ViewchildrenComponent,
    ChangeDetectionComponent,
    TestComponent1,
    ListComponent,
    NewsComponent,
    CurrencyFormatPipe
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule ,
    HttpClientModule
  ],
  providers: [
    { provide: JsonPipe }, { provide: DatePipe }, DataService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector });
    customElements.define('news-widget', el);
  }
  ngDoBootstrap() {}
}
