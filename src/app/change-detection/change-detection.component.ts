import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  standalone: false
})
export class ChangeDetectionComponent{


  public person = {

    name: 'John Doe',

    age: 20

   };



   public reassign(): void {

    this.person = {

     name: this.person.name,

     age: this.person.age

    };

   }
    constructor(private elementRef: ElementRef,private cd: ChangeDetectorRef) { }
}
