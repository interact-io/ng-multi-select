import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiSelectOptionComponent } from './multi-select-option.component';

describe('MultiSelectOptionComponent', () => {
  let component: MultiSelectOptionComponent;
  let fixture: ComponentFixture<MultiSelectOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
