import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable()
export class RepositoryService {

  public urlAddress: string = "http://localhost:60597";

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public get(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.urlAddress));
  }

  public getArray(route: string) {
    return this.http.get<any[]>(this.createCompleteRoute(route, this.urlAddress));
  }

  public getWithParameter(route: string, body) {
    return this.http.get(this.createCompleteRoute(route, this.urlAddress), body);
  }

  public getArrayWithParameter(route: string, body) {
    return this.http.get<any[]>(this.createCompleteRoute(route, this.urlAddress), body);
  }

  public post(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
  }

  public put(route: string, body) {
    return this.http.put(this.createCompleteRoute(route, this.urlAddress), body, this.generateHeaders());
  }

  public delete(route: string) {
    return this.http.delete(this.createCompleteRoute(route, this.urlAddress));
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
