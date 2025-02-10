Ways To Resolve Most Common Errors in Angular.

In this article, i will talk about the most common errors that you face while doing the development of an Angular application. Errors like dependency,

version update, an app-shell error can easily be solved by running simple commands.

If your repository or code deployed on Github then you can check errors under the security section. you can easily fix all those errors by following the below steps and commands.

Here is a list of common errors-

Dependency error:

To fix the dependency errors run the below commands.

>npm update
>npm audit fix
>npm i // Now you need to again install the node modules

If the audit fix command does not work then you need to run this command with the force flag.

npm audit fix --force

schema validation:

If you are getting schema validation error like

Data path ".builders['app-shell']" should have required property 'class'.

then run below commands

>npm uninstall @angular-devkit/build-angular
>npm i @angular-devkit/build-angular@0.13.0

node-sass error:

If you are getting some node-sass error the run this cmd

>npm install --save-dev --unsafe-perm node-sass

Cannot find module 'node-sass'

npm install node-sass

Node Sass version 5.0.0 is incompatible with ^4.0.0.

npm uninstall node-sass
npm install node-sass@4.14.1

new error- >npm ERR! Build failed with error code: 1 node-sass
update version in dependency-
"dependencies": {
"axios": "^0.10.2",
"node-sass": "^7.0.1",
"webpack": "^4.0.0"
}
https://github.com/sass/node-sass#node-version-support-policy

rxjs version error:

if you are getting below error

node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected.

run this command

>npm install rxjs@6.0.0 --save

ngModel import error:

Can't bind to 'ngModel' since it isn't a known property of 'input'

To correct this error import FormsModule in the app module file.

import { FormsModule } from '@angular/forms';
....
@NgModule({
imports: [
...
FormsModule
],
})

path import:

if you are getting the error of image after deployment then change the path from ../../assets/img/logo.png" to ./assets/image/logo.png"

Error on a project run:

The term 'ng' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.

To resolve this issue you can use the below command-

>npm install -g @angular/cli

Angular version error:

If you are getting this error dynamic import cannot be used when targeting ECMAScript 2015 modules.

Then you need to update tsconfig.app.json file in the angular project-

change "module": "es2015"  to "module": "commonjs"

getprojectmetadata error: 

job name ..getprojectmetadata does not exist angular 8

To correct this run below command-

npm i @angular-devkit/build-angular@0.803.24

babel error:

[BABEL] D:\pro\projectname\dist\vamschool\polyfills-es5.js: Could not find plugin "proposal-class-properties". Ensure there is 

an entry in ./available-plugins.js for it.

To correct this install following packages-

npm i @babel/compat-data@7.8.0 Dependencies
    "@babel/preset-env": "7.8.7", devDependencies

project start error

 An unhandled exception occurred: No projects support the 'serve' target.

install npm packages again 

Argument of type 'string' is not assignable to parameter of type 'never'

arr = []

solution

  arr : string[] = [];

Property 'uploader' has no initializer and is not definitely assigned in the constructor. angular error

Solution

Add "strictPropertyInitialization": false 

Refusing to install package with name "redux" under a package npm ERR! also called "redux". Did you name your project the same npm ERR! as the dependency you're installing

solution

change the name in the package.json file

Class 'NgRedux<RootState>' incorrectly implements interface 'ObservableStore<RootState>'. Property '[Symbol.observable]' is missing in type 'NgRedux<RootState>' but required in type 'ObservableStore<RootState>

solution

npm install --save redux@4.0.1

An unhandled exception occurred: Could not find the implementation for builder @angular-devkit/build-angular:dev-server

solution-

npm uninstall @angular-devkit/build-angular
npm install --save-dev @angular-devkit/build-angular

angular JIT compilation failed: '@angular/compiler' not loaded angular 9

solution

import '@angular/compiler'

ViewContainerRef not giving reference angular 8

solution

use ngAfterViewInit instead of ngoninit

expressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'undefined'. Current value: 'test'

solution

Add
import { ChangeDetectorRef} from '@angular/core';

  constructor(
        private cdr: ChangeDetectorRef) {
    }

ngAfterViewInit() {
 
            this.cdr.detectChanges();

    }
Not helpful soltion in case of api call asyync

If ngModel is used within a form tag, either the name attribute must be set or the form control must be defined as 'standalone' in ngModelOptions.

Solution-

add name attribute in input type.

Don't give space while creating a new pipe. 

 Uncaught TypeError: Cannot read property 'id' of undefined at registerNgModuleTyp

 delete and install node modules again

core.js:5980 ERROR Error: Found the synthetic property @autoHeight. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.

BrowserAnimationsModule

An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'

npm i

unable to resolve dependency tree npm angular 11

npm install --save --legacy-peer-deps

npm cache clean --force

----

Cannot find module './lib/source-map-generator

remove node_modules and install again

------

ng is not recognized as a cmdlet command

update env variables

path

C:\Users\sunny.gupta\AppData\Roaming\npm

rxjs version error

Property 'from' does not exist on type 'typeof Observable

change Observable

.from to  observableFrom

import { concatMap, delay, map, mergeMap, Observable, Subject, switchMap, from as observableFrom } from 'rxjs';

in case of this error

ng : File C:\Users\Sunnyvale\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system.
For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1

ng generate module app-routing --flat --module=app

~~

CategoryInfo : SecurityError: (:) [], PSSecurityException

FullyQualifiedErrorId : UnauthorizedAccess

run this cmd

set-ExecutionPolicy RemoteSigned -Scope CurrentUser

If 'router-outlet' is an Angular component, then verify that it is part of this module

app.module
imports: [
BrowserModule,
AppRoutingModule,
RouterModule
],.

context.js:265 DEPRECATED: DI is instantiating a token "MockTestService" that inherits its @Injectable decorator but does not provide one itself.
This will become an error in a future version of Angular. Please add @Injectable() to the "MockTestService" clas

solution-

@Injectable() 

----in case if you get puthon error while running old angular project
C:\Users\sunny.gupta\AppData\Local\Programs\Python\Python310'
C:\Program Files (x86)\Mozilla Maintenance Service

npm config set python C:\Users\sunny.gupta\AppData\Local\Programs\Python\Python310

in your Python interpreter, type the following commands:

import os
import sys
os.path.dirname(sys.executable)
'C:\Python25'

problem- No pipe found with name 'date'

solution- import commonmodule then

problem-

    'rourer-outlet' is not a known element:

If 'rourer-outlet' is an Angular component, then verify that it is part of this module.

If 'rourer-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

solution- 

Import RouterModule into your app.module.ts

import { RouterModule } from '@angular/router';
Add RouterModule into your imports []

like this:

imports: [ RouterModule, ]

or

   RouterModule.forRoot(appRoutes),

new error-

in this configuration angular requires zone.js

import 'zone.js';
…
platformBrowserDynamic().bootstrapModule(AppModule);

 : The 'buildOptimizer' option cannot be used without 'aot'
   "aot": false,
              "buildOptimizer": false
			  
			  main.js error
			  "configurations" ->
			     "development": {
              "optimization": false,
              "sourceMap": true,
              "namedChunks": true,
              "aot": false,
              "buildOptimizer": false
            }
			
       "defaultConfiguration": "development"
       
			  "development": {
              "buildTarget": "averaging:build:development"
            }
			
			
 Angular Material's matTooltip doesn’t support HTML rendering within the tooltip for security reason

 An argument for 'value' was not provided unsubscribe next method
  you should call this.ngUnsubscribe$.next(void 0)


  'router-outlet' is not a known element

Import RouterModule into your app.module.ts

import { RouterModule } from '@angular/router';
Add RouterModule into your imports []

like this:

 imports: [    RouterModule,  ]

   declarations: [
    MainComponent // <----- DON'T FORGET TO DECLARE THIS
  ],

https://angular.dev/errors/NG0403
  Bootstrapped NgModule doesn't specify which component to initialize
    bootstrap: [],

 error NG0908
 import 'zone.js';