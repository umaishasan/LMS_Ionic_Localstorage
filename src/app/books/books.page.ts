import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { BookModalPage } from './book-modal/book-modal.page';

const BOOKS_KEY = "librarybook";
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  bookList: any;

  constructor(private route: Router, public alrtCtrl: AlertController, public modalController: ModalController, private servs: ServiceService) {
    this.servs.read(BOOKS_KEY).then(a => {
      this.bookList = a;
      console.log(a);
    });
  }

  ngOnInit() { }

  backk() {
    this.route.navigateByUrl('/dashboard');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: BookModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async updatee(index) {
    let alert = await this.alrtCtrl.create({
      header: "Update Book List",
      inputs: [{ name: 'name', placeholder: 'Enter Book name' }],
      buttons: [{ text: 'Cancle', role: 'cancle' }, {
        text: 'Update', handler: d => {
          let idd = this.bookList[index].id;
          let nam = d.name;
          this.servs.update(BOOKS_KEY,this.bookList[index].id,idd,nam);
        }
      }]
    });
    alert.present();
  }

  delete(index) {
    this.servs.delete(BOOKS_KEY, index);
  }

  doRefresh(event) {
    var a = [];
    
    console.log('Begin async operation');
    setTimeout(() => {
      this.servs.read(BOOKS_KEY).then(a => {
        this.bookList = a;
      });
      event.target.complete();
    }, 1500);
  }

}
