import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HealthKitPage } from "../health-kit/health-kit";
import { ReadPage } from "../read/read";
import { GraphPage } from "../graph/graph";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
  healthKitPage = HealthKitPage;
  readPage = ReadPage;
  graphPage = GraphPage;
}
