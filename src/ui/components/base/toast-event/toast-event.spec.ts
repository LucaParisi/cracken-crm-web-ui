import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastEvent } from './toast-event';

describe('ToastEvent', () => {
  let component: ToastEvent;
  let fixture: ComponentFixture<ToastEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
