import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouteFilter} from '../dto/route-filter';
import {Observable} from 'rxjs';
import {Route} from '../dto/route';
import {Halt} from '../dto/halt';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8011/";
  }


  public findAllRoutesByCompany(filter: RouteFilter): Observable<Route[]> {
    return this.httpClient.post<Route[]>(`${this.baseUrl}route/findByCompanyId`, filter);
  }

  public findHaltByRoute(filter: RouteFilter): Observable<Halt[]> {
    return this.httpClient.post<Halt[]>(`${this.baseUrl}route/findRouteById`, filter);
  }
}
