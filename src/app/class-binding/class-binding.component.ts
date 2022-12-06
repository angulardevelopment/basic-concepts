import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  stepCond = 'step1';
  onSale = true;
  classExpression = "my-class-1 my-class-2 my-class-3";
  badCurly = 'bad curly';
  isSpecial = true;
  isSpecial2 = false;
  step='1';
  currentClasses: Record<string, boolean> = {};
  canSave = true;
  isUnchanged = true;

  constructor() { }

  ngOnInit(): void {
  }


  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial
    };
  }
}
