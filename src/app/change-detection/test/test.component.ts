import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TestComponent1 implements OnInit {
  @Input() person;
@Input() count = 0;
  constructor(private cdRef: ChangeDetectorRef) {
    // cdRef.detach();
  }
  // this.cd.detectChanges();
  ngOnInit() { 
    console.log('ngOnInit', this);
  }
}
