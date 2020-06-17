import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import _ from 'lodash';

@Component({
  selector: 'interact-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
  @Input() fields: any[];
  @Input() multiSelectLabel?: string;
  localFormGroup: FormGroup;
  multiSelectChangeSubscription: Subscription;
  showMultiSelect: boolean;
  @ViewChild('multiSelectContainer') multiSelectContainer: ElementRef;
  onChange: (value: any[]) => {};
  onTouched: () => {};

  constructor(@Optional() public ngControl: NgControl, private formBuilder: FormBuilder) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  get values() {
    return this.localFormGroup.controls['values'].value;
  }

  ngOnInit(): void {
    this.localFormGroup = this.formBuilder.group({
      values: this.ngControl ? [this.ngControl.value || [], this.ngControl.control.validator, this.ngControl.control.asyncValidator] : []
    });
  }

  ngAfterViewInit(): void {
    this.multiSelectChangeSubscription = this.localFormGroup.get('values').valueChanges.subscribe((val: any[]) => {
      this.updateInput(val);
    });
  }

  updateInput(val: string[]) {
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: any[]): void {
    if (value && this.localFormGroup) {
      this.localFormGroup.get('values').setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    if (this.multiSelectChangeSubscription) {
      this.multiSelectChangeSubscription.unsubscribe();
    }
  }

  selectOption(field: any) {
    this.localFormGroup.controls['values'].patchValue(_.xor(this.values, [field]));
  }

  focusMultiSelect() {
    if (this.showMultiSelect) {
      this.multiSelectContainer.nativeElement.focus();
    }
  }

  setShowMultiSelect(value: boolean) {
    this.showMultiSelect = value;
  }

}
