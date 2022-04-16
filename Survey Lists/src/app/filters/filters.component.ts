import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class Filters implements OnInit {
  @Input() filterType: string;
  @Input() filterValues: string[]; // ['All', 'Active', 'Completed']
  @Output() onFilterSelected: EventEmitter<string> = new EventEmitter<string>();
  selectedFilter: string = '';
  onClicked(filter: string) {
    this.onFilterSelected.emit(filter);
    this.selectedFilter = filter;
  }
  ngOnInit() {}
}
