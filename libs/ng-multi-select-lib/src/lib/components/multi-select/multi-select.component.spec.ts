import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectComponent],
      imports: [ReactiveFormsModule, NgMultiSelectLibModule]
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
