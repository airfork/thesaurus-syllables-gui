import { Injectable } from '@angular/core';
import { Word } from '../models/word';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getSynonyms(word: string, relatedToSearch: boolean): Observable<Word[]> {
    if (word.length == 0) {
      return of([]);
    }

    if (relatedToSearch) {
      return this.httpClient.get<Word[]>(`${this.apiUrl}${word}&rel`);
    }
    return this.httpClient.get<Word[]>(`${this.apiUrl}${word}`);
  }
}
