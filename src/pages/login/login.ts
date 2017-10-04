import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { Home, Contact, About } from '../pages';

@Component({
    templateUrl: 'login.html'
})

export class Login {
    constructor(private navCtl: NavController){}

    SignIn()
    {
        this.navCtl.push(Home);
      console.log('After successful login, navigating the user to home screen');
    }
}