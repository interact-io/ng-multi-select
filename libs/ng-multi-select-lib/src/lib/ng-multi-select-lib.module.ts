import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectOptionComponent } from './components/multi-select-option/multi-select-option.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [MultiSelectComponent, MultiSelectOptionComponent],
  exports: [
    MultiSelectComponent,
    MultiSelectOptionComponent
  ]
})
export class NgMultiSelectLibModule {
}
