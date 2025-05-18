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
import { ZoneJsBasedComponent } from './app/zone.js-based/zone.js-based.component';
import { ZonelessSignalsComponent } from './app/zoneless-signals/zoneless-signals.component';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

// document.addEventListener('DOMContentLoaded', () => {
//      platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
//    });

//  bootstrapApplication(ZoneJsBasedComponent, 
//   // {
  //  providers: [                  
    // provideExperimentalZonelessChangeDetection(),
    // provideRouter(routes)
//    ],
//  }
// );

bootstrapApplication(ZonelessSignalsComponent,   {providers: [                  
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
   ]})
  .catch((err) => console.error(err));

// bootstrapApplication(ZoneJsBasedComponent)
//   .catch((err) => console.error(err));



