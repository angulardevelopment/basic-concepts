import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webwoker-demo',
  templateUrl: './webwoker-demo.component.html',
  styleUrls: ['./webwoker-demo.component.scss'],
  standalone: false
})
export class WebwokerDemoComponent {

  factorialResult!: number;
  factorialInput: number = 1;

  constructor() {
    this.worker = new SharedWorker(new URL('./worker.ts', import.meta.url).href);
    
    this.worker.port.onmessage = (event) => {
      console.log('Message from worker:', event.data);
    };
    // the `start()` method is called on the `worker.port` to initialize communication with the worker.
    this.worker.port.start(); // Start the SharedWorker
    this.calculateFactorial();
  }

  calculateFactorial() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.factorialResult = data;
      };
      worker.postMessage(this.factorialInput);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  // e worker is ready to communicate, allowing you to send and receive messages effectively.
  private worker: SharedWorker;



  sendMessage() {
    // You can send messages to the worker using `postMessage()`:
    this.worker.port.postMessage('Hello, worker!');
  }

}
