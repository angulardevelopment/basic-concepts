import { ChangeDetectorRef, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

  @ViewChild('test') paragraph: ElementRef;

  constructor(private cd: ChangeDetectorRef, private elRef: ElementRef) {}
  ngOnChanges(changedvals: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changedvals);
    for (let f in changedvals) {
      let c = changedvals['propName'];
      let current = JSON.stringify(c.currentValue);
      let previous = JSON.stringify(c.previousValue);
    }
  }

  ngOnInit() {
    console.log('ngOnInit called!');

    // throw err
    // console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
    const tmp = document.createElement('div');
    const el = this.elRef.nativeElement.cloneNode(true);
    tmp.appendChild(el);
    console.log(tmp.innerHTML, 'dx');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
