import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  saveData(data: string): Observable<any> {
    // Replace this with your actual save data logic
    console.log('Saving data:', data);
    // Simulating an HTTP request using of() for simplicity
    return of('Data saved successfully');
  }
}
