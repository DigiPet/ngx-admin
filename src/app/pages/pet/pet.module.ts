import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetRoutingModule, routedComponents } from './pet-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [PetComponent, PetViewComponent, PetCreateComponent,...routedComponents],
  imports: [
    CommonModule,
    ThemeModule,
    PetRoutingModule,
  ]
})
export class PetModule { }
