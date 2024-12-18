import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ListService } from './list.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [
    {
        provide: ListService,
        useClass: EmployeeService
    }
],
standalone: false
})
export class ButtonComponent implements OnInit {
  // @Input() color = '#cecece'
  someClassMember: boolean;

  constructor(private cdr: ChangeDetectorRef, private listService?: ListService) { }

  ngOnInit(): void {
    this.listService.getListItems$.subscribe((data)=>{
    console.log(data);
  })
  }

}
