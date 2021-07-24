import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {
  amount = '5';
  arr = [1,2, 3, 4, 5,6 ,7];
    birthday = new Date(1988, 3, 15);
  title = 'Template Syntax';
  product = {
    name: 'frimfram',
    price: 42
  };
  currentHero = {birthdate: new Date(1970, 1, 25)};
  constructor() { }

  ngOnInit(): void {
  }

}
