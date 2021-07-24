import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedReferenceComponent } from './templated-reference.component';

describe('TemplatedReferenceComponent', () => {
  let component: TemplatedReferenceComponent;
  let fixture: ComponentFixture<TemplatedReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
