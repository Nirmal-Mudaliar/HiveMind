import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { HeaderComponent } from './modules/header/header.component';


@NgModule({
  declarations: [
    MasterComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderComponent,
  ]
})
export class MasterModule { }
