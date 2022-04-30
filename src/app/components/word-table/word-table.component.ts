import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Word } from '../../models/word';
import { WordService } from '../../services/word.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-word-table',
  templateUrl: './word-table.component.html',
  styleUrls: ['./word-table.component.css'],
})
export class WordTableComponent implements OnChanges, AfterViewInit {
  @Input()
  search = '';

  @Input()
  relatedToSearch = false;

  words: Word[] = [];

  dataSource = new MatTableDataSource<Word>(this.words);

  displayedColumns: string[] = ['word', 'syllables', 'score'];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  @ViewChild(MatPaginator)
  paginator: any = MatPaginator;

  constructor(private wordService: WordService) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getWords(): void {
    this.wordService
      .getSynonyms(this.search, this.relatedToSearch)
      .subscribe((words) => {
        this.words = words;
        this.dataSource.data = words;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWords();
  }
}
