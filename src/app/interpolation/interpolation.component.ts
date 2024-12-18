import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
  standalone: false
})
export class InterpolationComponent implements OnInit {
  item = {id:1};

  currentCustomer = 'Maria';
  recommended = 'recommended';
  itemImageUrl2 = 'https://i.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8';
  customers = [
    { name: 'Maria' },
    { name: 'Oliver' },
    { name: 'Walter' },
    { name: 'Lakshmi' },
    { name: 'Yasha' }
  ];
  testval = 5;
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    console.log('test');

  }
  getVal(): number { return 6; }

  changeTitle(text){
    console.log(text, 'text');

  }
  beverageInputValue = '';
  getBeverageInput(value){
this.beverageInputValue = value;
  }

}
