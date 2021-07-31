import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  booksOpen(){
    this.route.navigateByUrl('/books');
  }

  customersOpen(){
    this.route.navigateByUrl('/customers');
  }

  logut(){
    this.route.navigateByUrl('/home');
  }

}
