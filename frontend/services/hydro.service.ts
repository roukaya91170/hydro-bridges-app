import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HydroService {
  private apiUrl = 'https://hubeau.seine-et-marne.fr';

  constructor(private http: HttpClient) { }

  // Get all hydrometric stations
  getStations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/stations`);
  }

  // Get observations for a specific station
  getObservations(stationId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/stations/${stationId}/observations`);
  }
}