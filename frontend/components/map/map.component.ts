import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div style='height: 500px'>
               <div style='width: 100%; height: 100%' id='map'></div>
             </div>`,
})
export class MapComponent {
  private map: any;

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = L.map('map').setView([-34.397, 150.644], 8);

    // Add OpenStreetMap tile layer
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    // Dummy data for bridges and hydrometric stations
    const bridges = [
      { name: 'Bridge 1', coordinates: [-34.397, 150.644] },
      { name: 'Bridge 2', coordinates: [-34.407, 150.654] },
    ];

    const stations = [
      { name: 'Station 1', coordinates: [-34.397, 150.634] },
      { name: 'Station 2', coordinates: [-34.407, 150.644] },
    ];

    // Adding bridges to the map
    bridges.forEach(bridge => {
      L.marker(bridge.coordinates).addTo(this.map).bindPopup(bridge.name);
    });

    // Adding hydrometric stations to the map
    stations.forEach(station => {
      L.marker(station.coordinates).addTo(this.map).bindPopup(station.name);
    });
  }
}