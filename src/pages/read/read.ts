import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    this.healthTipsButtonList = ["BEAUTY", "FAMILY HEALTH", "FITNESS TIPS", "HEALTHY TIPS", "PREGNANCY"];
    console.log(this.healthTipsButtonList);
  }

  presentActionSheet(index) {
    console.log(index);
    let beautyActionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Anti Ageing',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Eye care',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Face care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Foot care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Hair care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Hand and nail care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Lip care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Skin care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
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
    let familyActionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Diseases',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Healthy mind',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Kids care',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Medicine',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
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
    let fitnessActionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Diet and Nutrition',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Muscle gain',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Weight gain',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Weight loss',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Workouts',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
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
    let healthyActionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Health education',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Ayurvedic',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Healthy foods',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Healthy recipies',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
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
    let pregnancyActionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Baby care',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Mother care',
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

    switch (index) {
      case 0:
        beautyActionSheet.present();
        break;
      case 1:
        familyActionSheet.present();
        break;
      case 2:
        fitnessActionSheet.present();
        break;
      case 3:
        healthyActionSheet.present();
        break;
      case 4:
        pregnancyActionSheet.present();
        break;
    }
  }
}
