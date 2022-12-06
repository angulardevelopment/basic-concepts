import { Component, OnInit } from '@angular/core';
import { Observable, interval } from "rxjs";

import { map, takeWhile, finalize } from "rxjs/operators";

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {
  amount = '5';
  arr = [1, 2, 3, 4, 5, 6, 7];
  birthday = new Date(1988, 3, 15);
  title = 'Template Syntax';
  product = {
    name: 'frimfram',
    price: 42
  };
  currentHero = { birthdate: new Date(1970, 1, 25) };
  words = [{ 'key': 'ab', value: 'cd' }];
  items = ["Angular", "React"];

  constructor() { }



  countCompleted = false;

  countDown = 5;

  count$: Observable<number>;

  message = "Happy Birthday!";

  ngOnInit() {

    const timer = interval(1000);

    this.count$ = timer.pipe(

      map(i => this.countDown - i),

      takeWhile(i => i > 0),

      finalize(() => (this.countCompleted = true))

    );

  }

  addPure = (v1, v2) => { return v1 + v2; };

  addImpure = (() => {

    let state = 0;
    
    return (v) => {
    
    return state += v;
    
    }
    
    })();

    test(){
      this.addPure(2, 3);
      this.addImpure(5);
    }

}


