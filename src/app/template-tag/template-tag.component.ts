import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-tag.component.html',
  styleUrls: ['./template-demo.component.scss']
})
export class TemplateDemoComponent implements OnInit {
  serverCreated = false;
	test = {test1 : { test2: {test3: {test4: {demoval: 'test5'} }}}};

  constructor() { }

  ngOnInit(): void {
  }

}
