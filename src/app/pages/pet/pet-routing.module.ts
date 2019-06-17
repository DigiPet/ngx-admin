import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { WalkRequestComponent } from './walk-request.component'
// import { WRInfoComponent } from './wr-info/wr-info.component';
// import { WrCreateComponent } from './wr-create/wr-create.component';
// import { WRConfirmComponent } from './wr-confirm/wr-confirm.component';
import{PetCreateComponent} from './pet-create/pet-create.component'
import{PetViewComponent} from './pet-view/pet-view.component'
import{PetComponent} from './pet.component'

const routes: Routes = [
  {
    path: '',
    component: PetComponent,
    children: [
      {
        path: 'info',
        component: PetViewComponent,
      },
      {
        path: 'create',
        component: PetCreateComponent,
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

export class PetRoutingModule {

}

export const routedComponents = [
  PetComponent,
  PetViewComponent,
  PetCreateComponent,
];
