import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectFormComponent } from './multi-select-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MultiSelectFormComponent', () => {
  let component: MultiSelectFormComponent;
  let fixture: ComponentFixture<MultiSelectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
