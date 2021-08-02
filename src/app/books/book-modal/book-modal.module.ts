import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BookModalPageRoutingModule } from './book-modal-routing.module';

import { BookModalPage } from './book-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookModalPageRoutingModule
  ],
  declarations: [BookModalPage]
})
export class BookModalPageModule {}
