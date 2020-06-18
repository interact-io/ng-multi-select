import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToOptionPipe } from './pipes/to-option.pipe';
import { MultiSelectOptionComponent } from './components/multi-select-option/multi-select-option.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [MultiSelectComponent, ToOptionPipe, MultiSelectOptionComponent],
  exports: [
    MultiSelectComponent,
    MultiSelectOptionComponent
  ],
  providers: [ToOptionPipe]
})
export class NgMultiSelectLibModule {
}
