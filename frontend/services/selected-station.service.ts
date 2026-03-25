import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedStationService {
  private selectedStationSource = new BehaviorSubject<any>(null);
  selectedStation$ = this.selectedStationSource.asObservable();

  setSelectedStation(station: any) {
    this.selectedStationSource.next(station);
  }
}
