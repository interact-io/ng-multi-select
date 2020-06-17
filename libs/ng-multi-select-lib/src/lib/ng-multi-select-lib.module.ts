import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [MultiSelectComponent],
  exports: [
    MultiSelectComponent
  ]
})
export class NgMultiSelectLibModule {}
