import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  currentCustomer = 'Maria';
  recommended = 'recommended';
  itemImageUrl2 = 'https://i.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8';
  constructor() { }

  ngOnInit(): void {
  }

  getVal(): number { return 2; }

}
