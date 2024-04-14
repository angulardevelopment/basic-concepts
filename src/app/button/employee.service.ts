import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getListItems$ = of(['Josh', 'Kathy'])

  constructor() { }
}
