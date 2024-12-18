import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
  standalone: false
})
export class EventBindingComponent implements OnInit {
  clickMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('Saved.' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target class is ' + (event.target as HTMLElement).className
      : '';
    alert('Click me.' + evtMsg);
  }

}
