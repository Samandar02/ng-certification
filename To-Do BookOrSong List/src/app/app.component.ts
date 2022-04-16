import {Component} from '@angular/core';
import {Item} from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Book: string = 'Book';
  Song: string = 'Song';
  songsList: Item[] = [];
  booksList: Item[] = [];
  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item:Item) {
  if(item.type == "Song"){
      this.songsList.push(item);
    }
    else{
      this.booksList.push(item)
    }
  }


  onItemDelete(item:Item) {
    let index;
    if(item.type == "Song"){
      index = this.songsList.indexOf(item)
      this.songsList.splice(index, 1);
    }
    else{
      index = this.booksList.indexOf(item)
      this.booksList.splice(index, 1);
    }
  }
}
