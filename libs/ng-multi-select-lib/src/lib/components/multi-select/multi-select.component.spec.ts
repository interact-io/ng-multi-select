import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectComponent],
      imports: [ReactiveFormsModule, NgMultiSelectLibModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
