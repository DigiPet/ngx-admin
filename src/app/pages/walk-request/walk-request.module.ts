import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { WalkRequestRoutingModule, routedComponents } from './walk-request-routing.module';
import { WalkRequestComponent } from './walk-request.component';
import { WrCreateComponent } from './wr-create/wr-create.component';
import { WRConfirmComponent } from './wr-confirm/wr-confirm.component';

@NgModule({
  imports: [
    ThemeModule,
    WalkRequestRoutingModule,
    CommonModule
  ],
  declarations: [
    ...routedComponents, 
    WalkRequestComponent, WrCreateComponent, WRConfirmComponent,
    ]
})
export class WalkRequestModule { }
