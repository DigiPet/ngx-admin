import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';  // <---
import { NgxLoginComponent } from './login/login.component'; // <---
import { NgxClientRegisterComponent } from './register/register.component'; // <---

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