import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientProfileViewComponent } from './client-profile-view/client-profile-view.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'profile',
        component: ClientProfileViewComponent,
      }
    ],
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class ClientRoutingModule {

}

export const routedComponents = [
  ClientComponent,
  ClientProfileViewComponent
  // FormsComponent,
  // FormInputsComponent,
  // FormLayoutsComponent,
  // DatepickerComponent,
];
