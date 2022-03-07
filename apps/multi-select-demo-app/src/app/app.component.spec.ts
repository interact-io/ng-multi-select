import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';
import { AppComponent } from './app.component';
import { MultiSelectFormComponent } from './components/multi-select-form/multi-select-form.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MultiSelectFormComponent],
      imports: [
        NgMultiSelectLibModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
