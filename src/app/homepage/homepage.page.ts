import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  @ViewChild('map', null) mapElement: ElementRef;
  map: GoogleMap;
  address: string;

  constructor(private platform: Platform, private geolocation: Geolocation) { }

  async ngOnInit() {

    await this.platform.ready();
    await this.loadMap();
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

  recenterMap() {
    let lat = 43.548443;
    let lng = 1.502883;
    this.geolocation.getCurrentPosition().then((resp) => {
      lat = resp.coords.latitude;
      lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.map.setCameraTarget({lat, lng});
  }

}
