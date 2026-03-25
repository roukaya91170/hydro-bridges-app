import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-station-sidebar',
  template: `<div>
               <h2>Station Information</h2>
               <p><strong>Name:</strong> {{ station.name }}</p>
               <p><strong>Location:</strong> {{ station.location }}</p>
               <p><strong>Status:</strong> {{ station.status }}</p>
             </div>`,
  styles: [':host { display: block; padding: 1rem; border: 1px solid #ccc; }']
})
export class StationSidebarComponent {
  @Input() station: { name: string; location: string; status: string };
}