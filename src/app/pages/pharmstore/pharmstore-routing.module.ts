import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmstoreComponent } from './pharmstore.component';

const routes: Routes = [
  {path: '', component: PharmstoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmstoreRoutingModule { }
