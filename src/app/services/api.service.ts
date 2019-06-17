import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment.API_BASE;
  token:string;

  constructor(public http: HttpClient, private authServer:NbAuthService) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    this.authServer.getToken().subscribe(
      (data)=>{
        this.token=data.toString();
      });


    let requestOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders()
        .set('Authorization',this.token)
    };
    if (params) {

      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
    
    return this.http.get(this.url + '/' + endpoint, requestOpts);
  }

  getXML(endpoint: string, params?: any) {
    this.authServer.getToken().subscribe(
      (data)=>{
        this.token=data.toString();
      });


    let requestOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders({'Content-Type':'text/xml'})
        .set('Authorization',this.token)
        .set('Accept','text')
    };
    if (params) {

      requestOpts.params = new HttpParams();
      for (let k in params) {
        requestOpts.params.set(k, params[k]);
      }
    }
    
    return this.http.get(this.url + '/' + endpoint, {responseType: 'text', headers: new HttpHeaders({'Content-Type':'text/xml'})
        .set('Authorization',this.token)
        .set('Accept','text'), params: requestOpts.params});
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    this.authServer.getToken().subscribe(
      (data)=>{
        this.token=data.toString();
      });

    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
        headers: new HttpHeaders()
        .set('Authorization',this.token)
      };
    }
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    this.authServer.getToken().subscribe(
      (data)=>{
        this.token=data.toString();
      });

    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
        headers: new HttpHeaders()
        .set('Authorization',this.token)
      };
    }
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

}