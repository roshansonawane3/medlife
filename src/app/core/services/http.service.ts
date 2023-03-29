import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = environment.baseUrl;

  httpHeders: HttpHeaders = new HttpHeaders()
    .set("Content-type", "application/json");

  constructor(private http: HttpClient) { }

  getDataFromServer(endPoint: string) {
    // const url = this.baseUrl + endPoint;
    return this.http.get(this.baseUrl + endPoint, { headers: this.httpHeders });
  }
  getDataFromServerByQueryParams(endPoint: string, httpParams:HttpParams) {
    // const url = this.baseUrl + endPoint;
    return this.http.get(this.baseUrl + endPoint, { headers: this.httpHeders,params:httpParams });
  }

  postDataToServer(endPoint:string, data:any){
    return this.http.post(this.baseUrl + endPoint,data,{headers:this.httpHeders})
  }
}
