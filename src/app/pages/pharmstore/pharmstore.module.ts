import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmstoreRoutingModule } from './pharmstore-routing.module';
import { PharmstoreComponent } from './pharmstore.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    PharmstoreComponent
  ],
  imports: [
    CommonModule,
    PharmstoreRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule
  ]
})
export class PharmstoreModule { }
