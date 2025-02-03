import {Halt} from './halt';

export class Route {
  routeId: number;
  routeNo: string;
  source: string;
  destination: string;
  isAirConditioned: boolean;
  routeTypeId: number;
  routeType: string;
  depotId: number;
  depotName: string;
  fare: number;
  distance: number;
  halts: Halt[];

  constructor();
  constructor(
    routeId: number = 0,
    routeNo: string = '',
    source: string = '',
    destination: string = '',
    isAirConditioned: boolean = false,
    routeTypeId: number = 0,
    routeType = '',
    depotId: number = 0,
    depotName: string = '',
    fare: number = 0,
    distance: number = 0,
    halts: Halt[] = []
  ) {
    this.routeId = routeId;
    this.routeNo = routeNo;
    this.source = source;
    this.destination = destination;
    this.isAirConditioned = isAirConditioned;
    this.routeTypeId = routeTypeId;
    this.depotId = depotId;
    this.depotName = depotName;
    this.fare = fare;
    this.distance = distance;
    this.halts = halts;
    this.routeType = routeType;
  }
}
