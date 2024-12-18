import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-templated-reference',
  templateUrl: './templated-reference.component.html',
  styleUrls: ['./templated-reference.component.scss'],
  standalone: false

})
export class TemplatedReferenceComponent implements OnInit {
  newExample = 'test';
  user: any = { name: '', email: null, age: '' };
  @ViewChild('myTestDiv') myTestDiv: ElementRef;
  @ViewChild('myTestComp') myTestComp: TestComponent;

  constructor() { }

  ngOnInit(): void {
    // const divEl: HTMLDivElement = this.myTestDiv.nativeElement;


  }

  ngAfterViewInit(): void {
    // We can access the TestComponent now that this portion of the view tree has been initiated.
    // this.myTestComp.saveTheWorld();
    console.log(this.myTestDiv.nativeElement, 'nativeElement')
}

  callValue(str){
    console.log(str);
  }

  onSubmit(contactForm){

  }

  setUserData(){

  }
}


