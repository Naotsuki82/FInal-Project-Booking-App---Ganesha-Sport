import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilliardPage } from './billiard.page';

const routes: Routes = [
  {
    path: '',
    component: BilliardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilliardPageRoutingModule {}
