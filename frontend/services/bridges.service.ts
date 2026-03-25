import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgesService {
  private apiUrl = 'https://api.example.com/bridges'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Create a new bridge
  createBridge(bridge: any): Observable<any> {
    return this.http.post(this.apiUrl, bridge);
  }

  // Get all bridges
  getBridges(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a bridge by ID
  getBridgeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a bridge
  updateBridge(id: number, bridge: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bridge);
  }

  // Delete a bridge
  deleteBridge(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}