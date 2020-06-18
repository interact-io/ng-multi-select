import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMultiSelectLibModule } from '@ng-multi-select/ng-multi-select-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectFormComponent } from './components/multi-select-form/multi-select-form.component';

@NgModule({
  declarations: [AppComponent, MultiSelectFormComponent],
  imports: [
    BrowserModule,
    NgMultiSelectLibModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
