import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'interact-multi-select-option',
  templateUrl: './multi-select-option.component.html',
  styleUrls: ['./multi-select-option.component.scss']
})
export class MultiSelectOptionComponent implements AfterViewInit {
  @Input() value: any;
  @Output() selectOptionEvent = new EventEmitter();
  checked: boolean = null;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(_ => this.selectOption());
  }

  selectOption() {
    this.selectOptionEvent.emit();
  }

}
