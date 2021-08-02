import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerModalPageRoutingModule } from './customer-modal-routing.module';

import { CustomerModalPage } from './customer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CustomerModalPageRoutingModule
  ],
  declarations: [CustomerModalPage]
})
export class CustomerModalPageModule {}
