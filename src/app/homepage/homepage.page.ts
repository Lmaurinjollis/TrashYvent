import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, Marker, HtmlInfoWindow, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// tslint:disable-next-line: max-line-length
declare var google: { maps: { Marker: new (arg0: { map: any; animation: any; position: { lat: number; lng: number; }; }) => void; Animation: { DROP: any; }; }; };

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  @ViewChild('map', null) mapElement: ElementRef;
  map: GoogleMap;
  address: string;

  constructor(private platform: Platform, private geolocation: Geolocation, private router: Router) { }

  async ngOnInit() {

    await this.platform.ready();
    await this.loadMap();
    await this.addMarker(this.map);
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.548443,
          lng: 1.502883
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  addMarker(map: any) {
    this.map.addMarker({
      title: 'Event #1',
      label: '1ère évènement de Trashyvent',
      icon: 'red',
      animation: 'BOUNCE',
      position: {
        lat: 43.549543,
        lng: 1.503683
      }}).then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            this.redirectEvent();
          });
      });
  }

  recenterMap() {
    const lat = 43.548443;
    const lng = 1.502883;
    this.map.setCameraTarget({lat, lng});
  }

  redirectLogin() {
    this.router.navigateByUrl('/');
  }

  redirectEvent() {
    this.router.navigateByUrl('/Event');
  }

  redirectEdit() {
    this.router.navigateByUrl('/editEvent');
  }
}
