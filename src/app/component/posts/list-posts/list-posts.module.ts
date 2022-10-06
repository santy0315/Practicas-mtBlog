import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from 'src/app/shared/component/table/table.component';

@NgModule({
  declarations: [ListPostsComponent, TableComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule,
    MaterialModule,
    
  ]
})
export class ListPostsModule { }
