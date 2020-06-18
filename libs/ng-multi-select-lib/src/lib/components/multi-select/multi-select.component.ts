import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import _ from 'lodash';
import { MultiSelectOptionComponent } from '../multi-select-option/multi-select-option.component';

@Component({
  selector: 'interact-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
  @Input() multiSelectLabel?: string;
  @Input() disabled?: boolean;
  localFormGroup: FormGroup;
  multiSelectChangeSubscription: Subscription;
  showMultiSelect: boolean;
  @ViewChild('multiSelectContainer') multiSelectContainer: ElementRef;
  optionLabelsList = [];
  onChange: (value: any[]) => {};
  onTouched: () => {};
  @ContentChildren(MultiSelectOptionComponent, { descendants: true }) private options: QueryList<MultiSelectOptionComponent>;

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
    this.options.toArray().forEach((option: MultiSelectOptionComponent) => {
      option.selectOptionEvent.subscribe(_ => {
        if (option.checked === null) {
          option.checked = this.values.includes(option.value);
          if (option.checked) {
            this.updateOptionLabelsList(option.optionLabel);
          }
        } else {
          this.selectOption(option.value);
          this.updateOptionLabelsList(option.optionLabel);
          option.checked = this.values.includes(option.value);
        }
      });
    });
  }

  ngOnChanges() {

  }

  updateInput(val: string[]) {
    this.onChange(val);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled && this.localFormGroup && !this.localFormGroup.disabled) {
      this.localFormGroup.disable();
    } else if (!isDisabled && !this.localFormGroup.enabled) {
      this.localFormGroup.enable();
      this.localFormGroup.get('values').enable();
    }
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

  selectOption(value: any) {
    this.localFormGroup.controls['values'].patchValue(_.xor(this.values, [value]));
  }

  focusMultiSelect() {
    if (this.showMultiSelect) {
      this.multiSelectContainer.nativeElement.focus();
    }
  }

  setShowMultiSelect(value: boolean) {
    if (!this.disabled) {
      this.showMultiSelect = value;
    }
  }

  updateOptionLabelsList(optionLabel) {
    this.optionLabelsList = _.xor(this.optionLabelsList, [optionLabel]);
  }

}
