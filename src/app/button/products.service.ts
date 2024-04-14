import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getListItems$ = of(['p1', 'p2'])

  constructor() { }
}
