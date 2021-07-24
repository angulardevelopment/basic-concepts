import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrBindingComponent } from './attr-binding.component';

describe('AttrBindingComponent', () => {
  let component: AttrBindingComponent;
  let fixture: ComponentFixture<AttrBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
