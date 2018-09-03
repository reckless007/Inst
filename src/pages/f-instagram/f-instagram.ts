import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {HousePage} from '../house/house';
import {AboutPage} from '../about/about';
import {SearchPage} from '../search/search';
import { UploadPage } from '../upload/upload';
import { NotifyPage } from '../notify/notify';

 

// @IonicPage(
//   {
//     name:"sec"
//   }

@Component({
  selector: 'page-f-instagram',
  templateUrl: 'f-instagram.html',
})
export class FInstagramPage {
tab1:any;
tab2:any;
tab3:any;
tab4:any;
tab5:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HousePage;
    this.tab2 = SearchPage;
    this.tab3 = UploadPage; 
    this.tab4 = NotifyPage
    this.tab5 = AboutPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FInstagramPage');
  }

}
