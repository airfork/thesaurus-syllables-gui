import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'thesaurus-gui';
  search = '';
  relatedToSearch = false;

  updateSearch($event: string) {
    this.search = $event;
  }
}
