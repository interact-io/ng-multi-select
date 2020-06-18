import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface MultiSelectDemoInterface {
  id: number;
  external_id?: string;
  title: string;
  labeledValues: LabeledValue[];
}

interface LabeledValue {
  label: string;
}

@Component({
  selector: 'interact-multi-select-form',
  templateUrl: './multi-select-form.component.html',
  styleUrls: ['./multi-select-form.component.scss']
})
export class MultiSelectFormComponent implements OnInit {
  localFormGroup: FormGroup;
  objectsList: MultiSelectDemoInterface[] = [
    { id: 1, title: 'object1', labeledValues: [{ label: '1_1' }, { label: '1_2' }] },
    { id: 2, title: 'object2', labeledValues: [{ label: '2_1' }, { label: '2_2' }] },
    { id: 3, title: 'object3', labeledValues: [{ label: '3_1' }, { label: '3_2' }] },
    { id: 4, title: 'object4', labeledValues: [{ label: '4_1' }, { label: '4_2' }] }];
  numbersList = [4,9,13,52,104,1062];
  disabled = false;
  selectObjectsLabel = '';
  selectNumbersLabel = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.localFormGroup = this.formBuilder.group({
      objects: [[], Validators.required],
      numbers: [[13], Validators.required]
    });
  }

}
