import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDemoComponent } from './template-tag.component';

describe('TemplateDemoComponent', () => {
  let component: TemplateDemoComponent;
  let fixture: ComponentFixture<TemplateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
