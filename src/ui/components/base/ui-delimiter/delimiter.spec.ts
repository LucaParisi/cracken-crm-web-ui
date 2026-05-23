import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delimiter } from './ui-delimiter';

describe('Delimiter', () => {
  let component: Delimiter;
  let fixture: ComponentFixture<Delimiter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Delimiter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delimiter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
