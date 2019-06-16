import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { WalkRequestRoutingModule, routedComponents } from './walk-request-routing.module';
import { WalkRequestComponent } from './walk-request.component';

@NgModule({
  imports: [
    ThemeModule,
    WalkRequestRoutingModule,
    CommonModule
  ],
  declarations: [
    ...routedComponents, 
    WalkRequestComponent,
    ]
})
export class WalkRequestModule { }
