import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templated-reference',
  templateUrl: './templated-reference.component.html',
  styleUrls: ['./templated-reference.component.scss']
})
export class TemplatedReferenceComponent implements OnInit {
  newExample = 'test';
  constructor() { }

  ngOnInit(): void {
  }

  callValue(str){
    alert(str);
  }
}
