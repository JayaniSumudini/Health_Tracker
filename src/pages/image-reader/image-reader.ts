import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  ];
  eyeCare: Array<string> = [
    "assets/imgs/eye-care/Slide1.JPG",
    "assets/imgs/eye-care/Slide2.JPG",
    "assets/imgs/eye-care/Slide3.JPG",
    "assets/imgs/eye-care/Slide4.JPG",
    "assets/imgs/eye-care/Slide5.JPG",
    "assets/imgs/eye-care/Slide6.JPG",
    "assets/imgs/eye-care/Slide7.JPG",
    "assets/imgs/eye-care/Slide8.JPG"
  ];
  faceCare: Array<string> = [
    "assets/imgs/face-care/Slide1.JPG",
    "assets/imgs/face-care/Slide2.JPG",
    "assets/imgs/face-care/Slide3.JPG",
    "assets/imgs/face-care/Slide4.JPG",
    "assets/imgs/face-care/Slide5.JPG",
    "assets/imgs/face-care/Slide6.JPG",
    "assets/imgs/face-care/Slide7.JPG",
    "assets/imgs/face-care/Slide8.JPG",
    "assets/imgs/face-care/Slide9.JPG",
    "assets/imgs/face-care/Slide10.JPG",
    "assets/imgs/face-care/Slide11.JPG"
  ];
  footCare: Array<string> = [
    "assets/imgs/foot-care/Slide1.JPG",
    "assets/imgs/foot-care/Slide2.JPG",
    "assets/imgs/foot-care/Slide3.JPG",
    "assets/imgs/foot-care/Slide4.JPG",
    "assets/imgs/foot-care/Slide5.JPG",
    "assets/imgs/foot-care/Slide6.JPG",
    "assets/imgs/foot-care/Slide7.JPG",
    "assets/imgs/foot-care/Slide8.JPG"
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let page = this.navParams.get('page');
    console.log(page);
    switch (page) {
      case "anti-ageing":
        this.images = this.antiAgeing;
        break;
      case "eye-care":
        this.images = this.eyeCare;
        break;
      case "face-care":
        this.images = this.faceCare;
        break;
      case "foot-care":
        this.images = this.footCare;
        break;
      default:
        this.images = [];
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

}
