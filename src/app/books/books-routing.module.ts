import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksPage } from './books.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: 'book-modal',
    loadChildren: () => import('./book-modal/book-modal.module').then( m => m.BookModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
