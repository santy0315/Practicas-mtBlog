import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MaterialModule} from '../../../material.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [HomeComponent, 
//    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
