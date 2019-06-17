import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { ClientRoutingModule, routedComponents } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';

@NgModule({
  imports: [
    ThemeModule,
    ClientRoutingModule,
    CommonModule
  ],
  declarations: [
    ...routedComponents,
    ClientComponent,
    ClienteCreateComponent
  ],
})
export class ClientModule { }
