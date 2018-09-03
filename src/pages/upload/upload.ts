import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Gallery',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'home' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cloud',
          icon: !this.platform.is('ios') ? 'cloud' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Camera Photo',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Camera Video',
          icon: !this.platform.is('ios') ? 'videocam' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}


