import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {About, Contact } from '../pages';

@Component({
  templateUrl: 'home.html'
})
export class Home {
pageToNavigate: any;
  constructor(private navCtl: NavController, private navParams: NavParams) {
  }

  private PostIt()
  {
    console.log('Posting the activity')
  }
}
