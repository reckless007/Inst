import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FInstagramPage } from '../f-instagram/f-instagram';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next(){
    this.navCtrl.push(FInstagramPage);
  }
}
