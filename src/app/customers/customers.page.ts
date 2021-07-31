import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { CustomerModalPage } from './customer-modal/customer-modal.page';

const CUSTOMER_KEY = "customer-assign";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customerList: any;

  constructor(private route: Router,public alrtCtrl: AlertController,public modalController: ModalController,private servs: ServiceService) { 
    this.servs.read(CUSTOMER_KEY).then(a => {
      this.customerList = a;
      console.log(a);
    });
  }

  ngOnInit() {
  }

  backk(){
    this.route.navigateByUrl('/dashboard');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CustomerModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  doRefresh(event) {
    var a = [];
    
    console.log('Begin async operation');
    setTimeout(() => {
      this.servs.read(CUSTOMER_KEY).then(a => {
        this.customerList = a;
      });
      event.target.complete();
    }, 1500);
  }

}
