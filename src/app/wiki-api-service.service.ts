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
  constructor(private http: HttpClient) {}

  // getSearchResults(query: string): Observable<string[]> {
  //   // Simulate an API call, replace this with your actual API call
  //   const results = ['result1', 'result2', 'result3'];
  //   return of(results);
  // }
  search(term$: Observable<string>): Observable<string[]> {
    return term$.pipe(
      debounceTime(300),
      map((value) => value.trim()),
      // (prevTerm, currTerm) => prevTerm.trim() === currTerm.trim()
      distinctUntilChanged(),
      switchMap((term: string) => this.fetchResults(term))
    );
  }
  private fetchResults(term: string): Observable<string[]> {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`;

    return this.http.get(url).pipe(
      map((response: any) => {
        return response?.query?.search?.map((result: any) => result.title);
      })
    );
  }
}
