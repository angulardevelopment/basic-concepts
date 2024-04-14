import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent extends ButtonComponent implements OnInit {

  constructor(cdr: ChangeDetectorRef) {
    super(cdr)
   }

  ngOnInit(): void {
  }

  anotherMethod(){

  }

}


interface ArticleSummary {
  id: number;
  title: string;
  summary: string;
  author: string;
  datePublished: string;
  dateUpdated: string;
  content: string;    
}
// segregation 
interface Article {
  id: number;
  title: string;
  summary: string;
  author: string;
  dateUpdated: string;
}

interface ArticleDetails extends Article {
  datePublished: string;
  content: string;   
}

abstract class Math {
  abstract add(x: number, y: number): number;
  abstract multiply(x: number, y: number): number;
}

class MyMath implements Math {
  add(x: number, y: number) {
      return x - y;
  }

  multiply(x: number, y: number) {
      return x / y;
  }
}

class SensibleMath implements Math {
  add(x: number, y: number) {
      return x + y;
  }

  multiply(x: number, y: number) {
      return x * y;
  }
}
