import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-demo',
  templateUrl: './container-demo.component.html',
  styleUrls: ['./container-demo.component.scss']
})
export class ContainerDemoComponent implements OnInit {
  lessons = true;
  constructor() { }

  ngOnInit(): void {
  }

}
