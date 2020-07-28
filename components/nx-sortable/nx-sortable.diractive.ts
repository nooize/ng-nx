import {Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ISortHandler} from '../../i-sort-handler.interface';

@Directive({
  selector: '[nx-sortable]',
})

export class NxSortableDirective implements OnInit, OnDestroy {

  @Input('nx-sortable') sortField: string;
  @Input() sortHandler: ISortHandler;

  @HostBinding('class.nx-sortable') true;

  @HostBinding('class.reverse') get reverse() {
    return this.sortHandler.IsSortReversed();
  }

  @HostBinding('class.active') get active() {
    return this.sortField === this.sortHandler.SortFiledName();
  }

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.onClick = this.onClick.bind(this);
  }

  ngOnInit() {
    this.el.addEventListener('click', this.onClick);
  }


  ngOnDestroy() {
    this.el.removeEventListener('click', this.onClick);
  }

  private onClick($event) {
    this.sortHandler.Sort(this.sortField, this.sortHandler.SortFiledName() ? !this.sortHandler.IsSortReversed() : false);
  }

}
