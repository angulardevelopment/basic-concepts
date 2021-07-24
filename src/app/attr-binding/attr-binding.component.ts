import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss']
})
export class AttrBindingComponent implements OnInit {
  value = 2;
  actionName = 'Go for it';
  isUnchanged = true;

  constructor() { }

  ngOnInit(): void {
  }

}