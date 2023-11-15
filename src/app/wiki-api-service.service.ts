import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  of,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikiApiServiceService {
  // constructor(private http: HttpClient) {}

  getSearchResults(query: string): Observable<string[]> {
    // Simulate an API call, replace this with your actual API call
    const results = ['result1', 'result2', 'result3'];
    return of(results);
  }
}
