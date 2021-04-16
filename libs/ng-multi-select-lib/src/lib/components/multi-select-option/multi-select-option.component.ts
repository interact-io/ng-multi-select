import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'interact-multi-select-option',
  templateUrl: './multi-select-option.component.html',
  styleUrls: ['./multi-select-option.component.scss']
})
export class MultiSelectOptionComponent implements AfterViewInit {
  @Input() value: any;
  @Output() selectOptionEvent = new EventEmitter();
  @ViewChild('optionLabel') optionLabelRef: ElementRef;
  optionLabel: any;
  checked: boolean = null;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.optionLabel = this.optionLabelRef.nativeElement.innerHTML.replace(/&amp;/g, '&');
    setTimeout(_ => this.selectOption());
  }

  selectOption() {
    this.selectOptionEvent.emit();
  }

}
