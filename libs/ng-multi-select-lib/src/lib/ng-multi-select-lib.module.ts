import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ToOptionPipe } from './pipes/to-option.pipe';
=======
>>>>>>> feature/libraryComponent
import { MultiSelectOptionComponent } from './components/multi-select-option/multi-select-option.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
<<<<<<< HEAD
  declarations: [MultiSelectComponent, ToOptionPipe, MultiSelectOptionComponent],
  exports: [
    MultiSelectComponent,
    MultiSelectOptionComponent
  ],
  providers: [ToOptionPipe]
=======
  declarations: [MultiSelectComponent, MultiSelectOptionComponent],
  exports: [
    MultiSelectComponent,
    MultiSelectOptionComponent
  ]
>>>>>>> feature/libraryComponent
})
export class NgMultiSelectLibModule {
}
