import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import * as L from 'leaflet';
import {DepotService} from '../services/depot.service';
import {RouteFilter} from '../dto/route-filter';
import {Depot} from '../dto/depot';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-best-page',
  imports: [RouterModule, NgForOf],
  templateUrl: './best-page.component.html',
  styleUrl: './best-page.component.css'
})
export class BestPageComponent implements AfterViewInit, OnInit {

  protected depots: Depot[] = [];
  private map!: L.Map

  constructor(private depotService: DepotService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();

    this.depotService.findAllDepots(new RouteFilter([], [], 1, null, null)).subscribe(data => {
      this.depots = data;
      console.log(this.depots)
      this.initMarkers();
    })

  }


  private initMap() {
    // const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map').setView([19.0760, 72.8777], 11);
    // L.tileLayer(baseMapURl).addTo(this.map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  private initMarkers() {
    this.depots.forEach((depot: Depot) => {
      L.marker([depot.latitude, depot.longitude]).addTo(this.map);
    })

  }


}
