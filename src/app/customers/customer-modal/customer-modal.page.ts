import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';

interface Customer {
  id: any;
  name: string;
  bookAssign: string;
}
const CUSTOMER_KEY = "customer-assign";
const BOOKS_KEY = "librarybook";
@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.page.html',
  styleUrls: ['./customer-modal.page.scss'],
})
export class CustomerModalPage implements OnInit {
  cname: string;
  savecustomer: Customer = <Customer>{};
  book: string;
  bookList: any;

  constructor(public modalController: ModalController,private servs: ServiceService) { 
    this.servs.read(BOOKS_KEY).then(a => {
      this.bookList = a;
      console.log(a);
    });
  }

  ngOnInit() {}

  backk(){
    this.modalController.dismiss();
  }

  add(){
    this.savecustomer.id = Date.now();
    this.savecustomer.name = this.cname;
    this.savecustomer.bookAssign = this.book;
    this.servs.add(CUSTOMER_KEY,this.savecustomer);
    console.log(this.savecustomer);
  }

}
