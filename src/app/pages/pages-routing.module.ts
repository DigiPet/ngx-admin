import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
// import {InfoComponent} from './walk-request/info/info.component';

// import {ClientProfileViewComponent} from './client/client-profile-view/client-profile-view.component';
// import {ClientComponent} from './client/client.component';
// import {ClientRegisterComponent} from './register/register.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  },
  // {
  //   path: 'clientPV',
  //   component: ClientProfileViewComponent,
  // },
  //  {
  //   path: 'infoX',
  //   component: InfoComponent,
  // },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule'
  },
  {
    path: 'walk-request',
    loadChildren: './walk-request/walk-request.module#WalkRequestModule'
  },
   {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
