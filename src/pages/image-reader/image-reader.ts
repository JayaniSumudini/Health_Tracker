import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-image-reader',
  templateUrl: 'image-reader.html',
})
export class ImageReaderPage {
  images: Array<string> = [];
  antiAgeing: Array<string> = [
    "assets/imgs/anti-ageing/Slide1.JPG",
    "assets/imgs/anti-ageing/Slide2.JPG",
    "assets/imgs/anti-ageing/Slide3.JPG",
    "assets/imgs/anti-ageing/Slide4.JPG",
    "assets/imgs/anti-ageing/Slide5.JPG",
    "assets/imgs/anti-ageing/Slide6.JPG",
    "assets/imgs/anti-ageing/Slide7.JPG",
    "assets/imgs/anti-ageing/Slide8.JPG",
    "assets/imgs/anti-ageing/Slide9.JPG",
    "assets/imgs/anti-ageing/Slide10.JPG",
    "assets/imgs/anti-ageing/Slide11.JPG"
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let page = this.navParams.get('page');
    console.log(page)
    switch (page) {
      case "anti-ageing":
        this.images = this.antiAgeing;
        break;
      default:
        this.images = [];

    }
  }

  goBack() {
    this.navCtrl.pop();
  }

}
