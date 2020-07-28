import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'nx-options-select',
  templateUrl: './nx-options-select.component.html',
  styleUrls: ['./nx-options-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NxOptionsSelectComponent),
    multi: true
  }]
})
export class NxOptionsSelectComponent implements OnInit, ControlValueAccessor {

  @Input() title: string = null;

  @Input() isTree = false;

  @Output() changed = new EventEmitter<boolean>();

  @Input() optionList: Map<number, string>;

  value: any;

  constructor() {
  }

  onChange: (_: any) => void = (_: any) => {
  };

  onTouched: () => void = () => {
  };

  ngOnInit() {
  }

  writeValue(value: number): void {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(key: any) {
    if (Array.isArray(this.value)) {
      const i = this.value.indexOf(key);
      if (i < 0) {
        this.value.push(key);
      } else {
        this.value.splice(i, 1);
      }

    } else {
      this.value = key;
    }
    this.onChange(this.value);
    this.changed.emit(this.value);
  }

  isSelected(key: any): boolean {
    if (Array.isArray(this.value)) {
      return this.value.indexOf(key) >= 0;
    } else {
      return this.value === key;
    }
  }

  getKeys() {
    return Array.from(this.optionList.keys());
  }

  getTitle(key: any) {
    return this.optionList.get(key);
  }

}
