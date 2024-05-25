import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

  name = 'Angular ' + VERSION.major;
  // 3
  data = [
    { id: 11, name: 'a1' },
    { id: 12, name: 'a2' },
    { id: 13, name: 'a3' },
    { id: 14, name: 'a4' },
  ];

  // 4
  arrData = [
    { id: 11, name: 'a1' },
    { id: 12, name: 'a2' },
    { id: 13, name: 'a3' },
    { id: 14, name: 'a4' },
  ];

  // 6
  array = [{ key2: 'value1', key12: 'value12' }];

  // 7
  array2 = [{ key1: 'value1' }];

  getIterableData = (room, index) =>
    Object.keys(room).map((key) => ({
      key: key,
      data: this.array[index][key],
    }));
  // 1
  getText(event) {
    var target = event.target || event.srcElement;
    console.log(event.target.innerHTML);
  }
  // 2.1

  highLightElement() {
    let listElements, makeActive;
    listElements = document.querySelectorAll('.nav li');
    makeActive = function () {
      for (let i = 0; i < listElements.length; i++)
        listElements[i].classList.remove('active');
      this.classList.add('active');
    };
    for (let i = 0; i < listElements.length; i++) {
      listElements[i].addEventListener('mousedown', makeActive);
    }
  }
  // 2.2
  clicked(event) {
    event.target.classList.add('class3');
    event.target.classList.remove('class1');
    event.target.classList.contains('class2'); // To check class is present or not.
    event.target.classList.toggle('class4'); // To hide/show element.
  }

  // 5
  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

  collection = [];
  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
