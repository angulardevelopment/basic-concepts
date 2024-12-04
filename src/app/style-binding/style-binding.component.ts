import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  expression = true;
  isSpecial = true;
  canSave = true;
  employeeList = [{ name: 'smith', country: 'UK' }, { name: 'Meyers', country: 'USA' }];
  fontSizePx = 40;
  PrintButton = true
  flag;
  randomcolor = "#4bacc6";

  constructor() { }

  ngOnInit(): void {
  }
  // Here we are going to update colour based on the country.
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
    }
  }



  getRandomColor() {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setColor() {
    const color = this.getRandomColor();
    this.randomcolor = color;
  }
}
