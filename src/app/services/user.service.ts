// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }

import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class digipetUserService {

  public user :any;
  private userPayload: any;

  constructor(private authService: NbAuthService,private apiService:ApiService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.userPayload = token.getPayload();
        }

      });
  }

  // getUser() {
  //   return this.apiService.get('AlamokUsers/me')
  // }

}