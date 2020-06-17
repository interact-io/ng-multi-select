import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToOptionPipe } from './pipes/to-option.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [MultiSelectComponent, ToOptionPipe],
  exports: [
    MultiSelectComponent
  ],
  providers: [ToOptionPipe]
})
export class NgMultiSelectLibModule {
}
