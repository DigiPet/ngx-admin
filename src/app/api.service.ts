// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	url: string = "http://18.217.113.128:8080/REST-DigiPet/webapi/";

  constructor(public http: HttpClient) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
        headers: new HttpHeaders()
          .set('Authorization','D1OqvuhEXQqHbKfWruCuCmuRY3Qs60MDGCQYIkcYLECYUVF1ADGSEH590aZ7McfD')
      };
}

 // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }


    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

}