import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkRequestComponent } from './walk-request.component'
import { WRInfoComponent } from './wr-info/wr-info.component';
import { WrCreateComponent } from './wr-create/wr-create.component';
import { WRConfirmComponent } from './wr-confirm/wr-confirm.component';


const routes: Routes = [
  {
    path: '',
    component: WalkRequestComponent,
    children: [
      {
        path: 'info',
        component: WRInfoComponent,
      },
      {
        path: 'create',
        component: WrCreateComponent,
      },
      {
        path: 'confirm',
        component: WRConfirmComponent,
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

export class WalkRequestRoutingModule {

}

export const routedComponents = [
  WalkRequestComponent,
  WRInfoComponent,
  WrCreateComponent,
  WRConfirmComponent

];
