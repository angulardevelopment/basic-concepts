import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
declare let Zone: any;
@Component({
  selector: 'app-angularzone',
  templateUrl: './angularzone.component.html',
  styleUrls: ['./angularzone.component.scss'],
  standalone: false
})
export class AngularzoneComponent {
  @ViewChild('btn') btnEl: ElementRef<HTMLButtonElement>;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  @ViewChild('tasknote') input: ElementRef;
  @ViewChild('abcd') private abcd: ElementRef;
  interval;
  message = 'Hello';
  progress: number = 0;
  label: string;
  data: any; // initial application state
  element: HTMLElement;
  clientX;
  clientY;

  constructor(private _ngZone: NgZone, private readonly renderer: Renderer2) { }

  ngOnInit() {
    // this.dataService.fetchDataFromRemoteService().subscribe((data) => {
    //   this.data = data; // application state has changed, change detection needs to run now
    //   console.log(data);
    // });
  }
  ngAfterViewInit() {
    // this.setupClickListener();
    //using selectRootElement instead of deprecated invokeElementMethod
    // this.renderer.selectRootElement(this.input['nativeElement']).focus();
  }

  ngAfterViewChecked() {
    // console.log("CD performed");
  }
  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    const startTime = performance.now();
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      console.log('Process completed!');
      console.log(`Time taken: ${timeTaken.toFixed(2)}ms`);
      console.log('Inside Done!')});
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    const startTime = performance.now();
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
  
        console.log('Process completed!');
        console.log(`Time taken: ${timeTaken.toFixed(2)}ms`);
        // reenter the Angular zone and display done
        this._ngZone.run(() => {
  
          console.log('Outside Done!');
        });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10); // Simulate async task
    } else {
      doneCallback();
    }
  }

  // https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html

  mouseDown(event) {
    console.log(event, 'mouseDown');

    // this.element = event.target;

    // runOutsideAngular
    // When some event is fired it tells angular to detect changes.
    // If you are using mouseUp() or mouseDown() event, then on every change it tells angular to detect the changes.
    // If we don't want these changes to take place run-time in angular (which reduces performance of the app), we can run it outside of angular zone.
    // Contrast to this, if we keenly want to get each and every update then we can use ngZone.run(). Means it will run the change detection in normal.
    this._ngZone.runOutsideAngular(() => {
      console.log('runOutsideAngular');
      // window.document.addEventListener('mousemove', this.mouseMove.bind(this));
      // setInterval(() => doSomething(), 100)
    });
  }

  mouseUp(e) {
    console.log(e, 'mouseUp');
  }

  mouseMove(event) {
    console.log(event, 'mouseMove');
    event.preventDefault();
    this.element.setAttribute('x', event.clientX + this.clientX + 'px');
    this.element.setAttribute('y', event.clientX + this.clientY + 'px');
  }

  onClick() {
    console.log('onClick');

    // this.zone.runOutsideAngular(() => {
    //   console.log("onClick runOutsideAngular");
    // });

    this._ngZone.run(() => {
      this.message = 'World';
    });
  }

  private setupClickListener() {
    // this.setupClickListenerViaNativeAPI();
    // this.setupClickListenerViaRenderer();
    // this.setupClickListenerViaRxJS();

    this._ngZone.runOutsideAngular(() => {
      // this.setupClickListenerViaNativeAPI();
      // this.setupClickListenerViaRenderer();
      this.setupClickListenerViaRxJS();
    });
  }

  private setupClickListenerViaNativeAPI() {
    this.btnEl.nativeElement.addEventListener('click', () => {
      console.log('onClick');
    });
  }

  private setupClickListenerViaRenderer() {
    this.renderer.listen(this.btnEl.nativeElement, 'click', () => {
      console.log('onClick');
    });
  }

  private setupClickListenerViaRxJS() {
    fromEvent(this.btnEl.nativeElement, 'click').subscribe(() => {
      console.log('onClick setupClickListenerViaRxJS');
    });
  }

  handleClick() {
    this._ngZone.runOutsideAngular(() => {
      document.addEventListener('click', this.onClickOutside);
    });
  }

  onClickOutside = () => {
    console.log('Click event detected!');
  };

  runInZone() {
    const myZone = Zone.current.fork({
      name: 'My Zone',
      onInvokeTask: (
        parentZoneDelegate,
        currentZone,
        targetZone,
        task,
        applyThis,
        applyArgs
      ) => {
        console.log('Task invoked in My Zone:', task.source);
        parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
      },
      onHandleError: (parentZoneDelegate, currentZone, targetZone, error) => {
        console.log('Error occurred in My Zone:', error.message);
        parentZoneDelegate.handleError(targetZone, error);
      },
    });

    myZone.run(() => {
      console.log('Running code in My Zone...');
    });
  }

  runOutsideZone() {
    this._ngZone.runOutsideAngular(() => {
      console.log('Running code outside of Angular zone...');
    });
  }

  test() {
    this._ngZone.runOutsideAngular(() => {
      this.interval = window.setInterval(() => {
        this.setNextColor();
        this.paint();
      }, 10);
    });
  }

  setNextColor() { }

  paint() { }


  testRender() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.abcd.nativeElement, li);
  }

  // It has one issue renderer2 selectRootElement overwrites element content.
  // If you want to preserve content then use the second boolean parameter to true.

  example() {
    let activeLi = this.renderer.selectRootElement('ul.ddl>li.active', true);
    const element = this.renderer.selectRootElement('.myclass');
    const text = this.renderer.createText('Namaste!!!');
    this.renderer.appendChild(element, text);
  }

  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }

  // Try to avoid it. It does not come under good practice.

  /*
   * this._elementRef.nativeElement.setAttribute('style', 'color: #666666');
   * this._elementRef.nativeElement.style.setProperty('color', '$gray-35');
   * this.lowEnd.nativeElement.style.width = this.lowEndVal + '%';
   */
}
