import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebwokerDemoComponent } from './webwoker-demo.component';

describe('WebwokerDemoComponent', () => {
  let component: WebwokerDemoComponent;
  let fixture: ComponentFixture<WebwokerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebwokerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebwokerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
