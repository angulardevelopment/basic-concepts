import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ChangeDetectionComponent {
  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) { }

  public person = {

    name: 'John Doe',

    age: 20

  };

  count = 0;

  increment() {
    this.count++;
    // this.cd.markForCheck();

  }

  reset() {
    this.count = 0;
  }


  public reassign(): void {

    this.person = {

      name: this.person.name,

      age: this.person.age

    };

  }

}
