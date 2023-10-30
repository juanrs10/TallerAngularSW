// Angular and third-party imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Application-specific imports
import { Serie } from './serie';

// Service metadata
@Injectable({
  providedIn: 'root'
})
export class SerieService {

  // Base URL for the API endpoint
  private baseUrl = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json';

  // Constructor with dependency injection
  constructor(private http: HttpClient) { }

  // Method to retrieve series from the API
  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseUrl);
  }

}
