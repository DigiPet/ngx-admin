import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ClientModule } from './client/client.module';
import { WalkRequestModule } from './walk-request/walk-request.module';
import { PetModule } from './pet/pet.module';
  

// import { ClientProfileViewComponent } from './client/client-profile-view/client-profile-view.component';
// import { InfoComponent } from './walk-request/info/info.component'
// import {ClientRegisterComponent} from './register/register.component'

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ClientModule,
    WalkRequestModule,
    PetModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    // ClientRegisterComponent
    // InfoComponent
    // ClientProfileViewComponent,
  ],
})
export class PagesModule {
}
