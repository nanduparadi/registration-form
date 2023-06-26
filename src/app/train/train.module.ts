import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainRoutingModule } from './train-routing.module';
import { TrainComponent } from './train.component';


@NgModule({
  declarations: [
    TrainComponent
  ],
  imports: [
    CommonModule,
    TrainRoutingModule
  ]
})
export class TrainModule { }
