export class Depot {
  depotName: string;
  id: number;
  address: string;
  depotCode:string;
  srNo: number;
  longitude: number;
  latitude: number;
  constructor();

  constructor(depotName = '',
              id = 0,
              address = '',
              depotCode = '',srNo = 0,longitude = 0,latitude = 0,) {
    this.id = id;
    this.address = address;
    this.depotName = depotName;
    this.depotCode = depotCode;
    this.srNo= srNo;
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
