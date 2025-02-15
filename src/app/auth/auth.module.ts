import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component'; // <---
import { NgxClientRegisterComponent } from './register-client/register-client.component'; // <---
import { NgxCarerRegisterComponent } from './register-carer/register-carer.component'; // <---


import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    

    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxClientRegisterComponent,
    NgxCarerRegisterComponent
    // ... here goes our new components
  ],
})
export class NgxAuthModule {
}
