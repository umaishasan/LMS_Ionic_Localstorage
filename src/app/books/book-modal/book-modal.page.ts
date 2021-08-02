import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/service/service.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

interface Books{
  id: any;
  name: string;
}
const BOOKS_KEY = "librarybook";

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.page.html',
  styleUrls: ['./book-modal.page.scss'],
})
export class BookModalPage implements OnInit {
  bookform: FormGroup;
  bname: string;
  savebook: Books = <Books>{};

  constructor(public modalController: ModalController,private servs: ServiceService) { }

  ngOnInit() {
    this.bookform = new FormGroup({
      Bname: new FormControl('',Validators.required)
    });
  }

  backk(){
    this.modalController.dismiss();
  }

  add(){
    this.savebook.id = Date.now();
    this.savebook.name = this.bname;
    this.servs.add(BOOKS_KEY,this.savebook);
    console.log(this.savebook);
  }

}
