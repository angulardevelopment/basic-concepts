import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {
  userName = "jbond";
  currentHero!: Hero;
  heroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];

  }
  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

}

export class Hero {
  static nextId = 0;

  static heroes: Hero[] = [
    new Hero(
      0,
      'Hercules',
      'happy',
      new Date(1970, 1, 25),
      'https://www.imdb.com/title/tt0065832/',
      325
    ),
    new Hero(1, 'Dr Nice',   'happy'),
    new Hero(2, 'Narco',     'sad' ),
    new Hero(3, 'Windstorm', 'confused' ),
    new Hero(4, 'Magneta')
  ];


  constructor(
    public id = Hero.nextId++,
    public name?: string,
    public emotion?: string,
    public birthdate?: Date,
    public url?: string,
    public rate = 100,
    ) {}

  clone(): Hero {
    return Object.assign(new Hero(), this);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
