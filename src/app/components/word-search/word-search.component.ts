import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css'],
})
export class WordSearchComponent {
  search = '';

  @Output()
  searchEmitter = new EventEmitter<string>();

  emitSearch() {
    this.searchEmitter.emit(this.search);
  }
}
