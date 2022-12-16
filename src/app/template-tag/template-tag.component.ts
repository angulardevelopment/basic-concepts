import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-tag.component.html',
  styleUrls: ['./template-demo.component.scss']
})
export class TemplateDemoComponent implements OnInit {
  serverCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

}
