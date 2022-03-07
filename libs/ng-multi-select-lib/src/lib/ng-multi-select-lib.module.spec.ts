import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NgMultiSelectLibModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgMultiSelectLibModule, ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgMultiSelectLibModule).toBeDefined();
  });
});
