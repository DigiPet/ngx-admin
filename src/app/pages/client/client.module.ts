import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { ClientRoutingModule, routedComponents } from './client-routing.module';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    ThemeModule,
    ClientRoutingModule,
    CommonModule
  ],
  declarations: [
    ...routedComponents,
    ClientComponent
  ],
})
export class ClientModule { }
