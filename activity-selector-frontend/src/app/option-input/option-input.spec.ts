import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionInput } from './option-input';

describe('OptionInput', () => {
  let component: OptionInput;
  let fixture: ComponentFixture<OptionInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionInput],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
