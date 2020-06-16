import { async, TestBed } from '@angular/core/testing';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';

describe('NgMultiSelectLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMultiSelectLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgMultiSelectLibModule).toBeDefined();
  });
});
