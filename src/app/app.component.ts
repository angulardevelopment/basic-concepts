import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  // imports: [RouterModule]
})
export class AppComponent {
  title = 'basic';
   // Array to hold routes data
   routes: Routes = [];

   constructor(private router: Router) {}
 
   ngAfterViewInit(): void {
     // Fetch the routes from the router
     this.routes = this.router.config;
   }
   showText = true;
   showHideRouteBlock() {
 this.showText = !this.showText;
   }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./app.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
// }