import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ListService {
  abstract getListItems$: Observable<string[]>

  constructor() { }
}
