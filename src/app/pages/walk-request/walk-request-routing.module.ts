import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkRequestComponent } from './walk-request.component'
import { InfoComponent } from './info/info.component';
import { WrCreateComponent } from './wr-create/wr-create.component';


const routes: Routes = [
  {
    path: '',
    component: WalkRequestComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'create',
        component: WrCreateComponent,
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
  InfoComponent,
  WrCreateComponent

];
