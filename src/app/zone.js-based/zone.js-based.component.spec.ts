import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneJsBasedComponent } from './zone.js-based.component';

describe('ZoneJsBasedComponent', () => {
  let component: ZoneJsBasedComponent;
  let fixture: ComponentFixture<ZoneJsBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneJsBasedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneJsBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
