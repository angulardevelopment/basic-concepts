import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessSignalsComponent } from './zoneless-signals.component';

describe('ZonelessSignalsComponent', () => {
  let component: ZonelessSignalsComponent;
  let fixture: ComponentFixture<ZonelessSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
