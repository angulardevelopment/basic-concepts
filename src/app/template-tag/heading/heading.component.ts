import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  // theTruth = 'test';
  @Input() title;
  constructor() { }

  ngOnInit(): void {
    console.log(this.title, 'test1');
    
  }

}
