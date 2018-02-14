import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  healthTipsButtonList;
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
    this.healthTipsButtonList = ["BEAUTY","FAMILY HEALTH","FITNESS TIPS","HEALTHY TIPS","PREGNANCY"];
    console.log(this.healthTipsButtonList);
  }

  presentActionSheet(index) {
    console.log(index);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
