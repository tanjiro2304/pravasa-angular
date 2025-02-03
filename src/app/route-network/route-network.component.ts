import {Component, OnInit} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {RouteFilter} from '../dto/route-filter';
import {MatFormField, MatLabel, MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import {Route} from '../dto/route';
import {Halt} from '../dto/halt';
import {RouteService} from '../services/route.service';

class BusRoute {
}

@Component({
  selector: 'app-route-network',
  imports: [
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './route-network.component.html',
  styleUrl: './route-network.component.css'
})
export class RouteNetworkComponent implements OnInit {
  selectedRoute: Route = new Route();
  isOrdinary: boolean = false;
  index: number = 0
  displayedColumns: string[] = ['position', 'stopName'];
  routes: Route[] = [];
  halts: Halt[] = ([] as Halt[]).map((value, index) => ({
    ...value,
    position: index + 1
  }));
  isLimited: boolean = false;
  isExpress: boolean = false;
  isAirConditioned: boolean = false;

  constructor(private routeService: RouteService) {

  }

  ngOnInit(): void {

    this.routeService.findAllRoutesByCompany(new RouteFilter([], [], 1, null, null)).subscribe(data => {
      this.routes = data;
    });
    const container = document.getElementById('map')
    console.log(JSON.stringify(this.routes));

  }


  onChangeListener(event: MatSelectChange) {
    this.selectedRoute = event.value;
    this.isAirConditioned = this.selectedRoute.isAirConditioned;
    if (this.selectedRoute.routeTypeId === 1) {
      this.isOrdinary = true;
      this.isLimited = false;
      this.isExpress = false;
    } else if (this.selectedRoute.routeTypeId === 2) {
      this.isLimited = true;
      this.isExpress = false;
      this.isOrdinary = false;
    } else if (this.selectedRoute.routeTypeId === 3) {
      this.isExpress = true;
      this.isLimited = false;
      this.isOrdinary = false
    }
    this.routeService.findHaltByRoute(new RouteFilter([], [], null, null, this.selectedRoute.routeId)).subscribe(data => {
      this.halts = data;
    })
    console.log(this.selectedRoute);
    console.log(JSON.stringify(event.value));
  }
}
