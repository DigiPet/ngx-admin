import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';  // <---
import { NgxLoginComponent } from './login/login.component'; // <---
import { NgxClientRegisterComponent } from './register-client/register-client.component'; // <---
import { NgxCarerRegisterComponent } from './register-carer/register-carer.component'; // <---

import {
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  // .. here goes our components routes
  
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },
      {
        path: 'registerClient',
        component: NgxClientRegisterComponent, // <---
      },
      {
        path: 'registerCarer',
        component: NgxCarerRegisterComponent, // <---
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}