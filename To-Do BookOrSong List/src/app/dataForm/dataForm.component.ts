import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})

export class DataForm implements OnInit {
   @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  form: Item = {
    creator: '',
    name: '',
    genre: '',
    type: '',
  };
  addItem() {
    this.onItemAdded.emit(this.form);
    this.form = {
      creator: '',
      name: '',
      genre: '',
      type: '',
      totalTime:0
    };
  }
  ngOnInit() {}

}
