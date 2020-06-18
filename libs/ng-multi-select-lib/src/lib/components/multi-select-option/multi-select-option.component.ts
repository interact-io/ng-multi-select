<<<<<<< HEAD
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
=======
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
>>>>>>> feature/libraryComponent

@Component({
  selector: 'interact-multi-select-option',
  templateUrl: './multi-select-option.component.html',
  styleUrls: ['./multi-select-option.component.scss']
})
export class MultiSelectOptionComponent implements AfterViewInit {
  @Input() value: any;
  @Output() selectOptionEvent = new EventEmitter();
<<<<<<< HEAD
=======
  @ViewChild('optionLabel') optionLabelRef: ElementRef;
  optionLabel: any;
>>>>>>> feature/libraryComponent
  checked: boolean = null;

  constructor() {
  }

  ngAfterViewInit(): void {
<<<<<<< HEAD
=======
    this.optionLabel = this.optionLabelRef.nativeElement.innerHTML;
>>>>>>> feature/libraryComponent
    setTimeout(_ => this.selectOption());
  }

  selectOption() {
    this.selectOptionEvent.emit();
  }

}
