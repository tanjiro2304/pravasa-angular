import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouteFilter} from '../dto/route-filter';
import {Observable} from 'rxjs';
import {Depot} from '../dto/depot';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private readonly baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8011/";
  }

  findAllDepots(filter: RouteFilter): Observable<Depot[]> {
    console.log('Data : ', this.httpClient.post<Depot[]>(`${this.baseUrl}depot/findAllDepots`, filter))
    return this.httpClient.post<Depot[]>(`${this.baseUrl}depot/findAllDepots`, filter);
  }
}
