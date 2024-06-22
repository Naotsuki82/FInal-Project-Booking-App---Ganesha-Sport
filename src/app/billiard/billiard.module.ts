import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilliardPageRoutingModule } from './billiard-routing.module';

import { BilliardPage } from './billiard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilliardPageRoutingModule
  ],
  declarations: [BilliardPage]
})
export class BilliardPageModule {}
