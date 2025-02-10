import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {
  provideExperimentalZonelessChangeDetection
 } from '@angular/core';
 import { bootstrapApplication } from '@angular/platform-browser';
import { AttrBindingComponent } from './app/attr-binding/attr-binding.component';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });

//  bootstrapApplication(AppComponent, 
//   {
//    providers: [                  
    // provideExperimentalZonelessChangeDetection(),
    // provideRouter(routes)
//    ],
//  }
// );



