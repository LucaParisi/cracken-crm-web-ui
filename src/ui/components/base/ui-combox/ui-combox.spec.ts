import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCombox } from './ui-combox';

describe('UiCombox', () => {
  let component: UiCombox;
  let fixture: ComponentFixture<UiCombox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCombox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCombox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
