import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

interface User {
  email: string;
  password: string;
}
const USER_KEY = "user-key";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;
  showpass: boolean = false;
  toggleIcon: 'eye-outline' | 'eye-off-outline' = 'eye-outline';

  constructor(private service: ServiceService, private route: Router) { }

  loginn() {
    let userInp: User[] = [{ email: "umais@gmail.com", password: "umais" }];
    var a = this.service.add(USER_KEY, userInp);
    console.log(a);
    if (USER_KEY) {
      this.route.navigateByUrl('/dashboard');
    }
  }

  checkPass(){
    this.showpass = !this.showpass;
    if(this.toggleIcon == 'eye-outline'){
      this.toggleIcon = 'eye-off-outline';
    }else{
      this.toggleIcon = 'eye-outline';
    }
  }

}
