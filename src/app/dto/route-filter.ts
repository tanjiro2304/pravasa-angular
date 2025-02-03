export class RouteFilter {
  depotIds: number[];
  companyIds: number[];
  companyId: number;
  depotId: number;
  routeId: number;

  constructor(
    depotIds: number[] = [],
    companyIds: number[] = [],
    companyId: any = 0,
    depotId?: any,
    routeId?: any
  ) {
    this.depotIds = depotIds;
    this.companyIds = companyIds;
    this.companyId = companyId;
    this.depotId = depotId;
    this.routeId = routeId;
  }

}
