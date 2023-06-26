import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';


@NgModule({
  declarations: [
    BusComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule
  ]
})
export class BusModule { }
