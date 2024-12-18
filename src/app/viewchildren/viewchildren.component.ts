import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css'],
  standalone: false
})
export class ViewchildrenComponent implements OnInit {
 firstName;
  middleName;
  lastName;

  @ViewChildren(NgModel) modelRefList: QueryList<NgModel>;

  show() {

    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });
  }

   ngAfterViewInit() {

    this.modelRefList.changes
      .subscribe(data => {
        console.log(data)
      }
    )
  }

  constructor() { }

  ngOnInit() {
  }

}
