import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the HealthKitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-health-kit',
  templateUrl: 'health-kit.html',
})
export class HealthKitPage {

  heightConverter: number;
  weightConverter: number;
  checked: boolean = false;
  buttonRepeater = ["ft", "cm"];
  button0colour;
  button1colour;
  button2colour;
  button3colour;
  bmiButtonColor;
  bmiValue;
  heightCm;
  heightFt;
  heightInch;
  weight;
  valueActivate;

  constructor(public navCtrl: NavController) {
    this.heightConverter = 0;
    this.button0colour = true;
    this.button1colour = false;

    this.weightConverter = 0;
    this.button2colour = true;
    this.button3colour = false;
    this.bmiButtonColor = false;
    this.bmiValue = 0;
    this.heightCm = 0;
    this.heightFt = 0;
    this.heightInch = 0;
    this.weight = 0;
    this.valueActivate = false;
  }

  clickHeightConverter(indexOfButton) {
    this.valueActivate = false;
    this.heightConverter = indexOfButton;
    if (indexOfButton == 0) {
      this.button0colour = true;
      this.button1colour = false;
    } else {
      this.button0colour = false;
      this.button1colour = true;
    }
    this.bmiValue = 0;
    this.heightCm = 0;
    this.heightFt = 0;
    this.heightInch = 0;
  };

  clickWeightConverter(indexOfButton) {
    this.valueActivate = false;
    this.weightConverter = indexOfButton;
    if (indexOfButton == 0) {
      this.button2colour = true;
      this.button3colour = false;
    } else {
      this.button2colour = false;
      this.button3colour = true;
    }
    this.bmiValue = 0;
    this.weight = 0;
  }

  calculateBMI() {

    this.bmiButtonColor = true;
    this.bmiValue = 0;
    if (this.heightConverter == 0 && this.weightConverter == 0) {
      console.log("A");
      this.calculateUSCunits(this.weight, this.heightCm);
    }

    if (this.heightConverter == 1 && this.weightConverter == 1) {
      console.log("B");
      this.calculateMetricUnits(this.weight, this.heightFt, this.heightInch);
    }

    if (this.heightConverter == 0 && this.weightConverter == 1) {
      console.log("C");
      const weightInKg = HealthKitPage.lbConvertTokg(this.weight);
      this.calculateUSCunits(weightInKg, this.heightCm);
    }
    if (this.heightConverter == 1 && this.weightConverter == 0) {
      console.log("D");
      const heightInCm = HealthKitPage.inchConvertToCm(this.heightFt, this.heightInch);
      this.calculateUSCunits(this.weight, heightInCm);
    }
    console.log(this.bmiValue);
    if (isNaN(this.bmiValue) || this.bmiValue == null) {
      this.bmiValue = 0;
    }
    this.bmiValue = parseFloat(this.bmiValue.toFixed(2));
    this.valueActivate = true;
  }

  calculateUSCunits(weight, heightCm) {
    this.bmiValue = (weight) / ((heightCm / 100) * (heightCm / 100));
  }

  calculateMetricUnits(weight, heightFt, heightInch) {
    if (heightFt == undefined || heightFt == null) {
      heightFt = 0;
    }
    if (heightInch == undefined || heightInch == null) {
      heightInch = 0;
    }
    const totalInch = heightFt * 12 + parseInt(heightInch);
    this.bmiValue = (weight / (totalInch * totalInch)) * 703;
  }

  static lbConvertTokg(weightInLbs) {
    return weightInLbs * 0.45359237;
  }

  static inchConvertToCm(heightFt, heightInch) {
    const totalInch = heightFt * 12 + parseInt(heightInch);
    return totalInch * 2.54;
  }

  clearResult() {
    this.bmiValue = 0;
    this.heightCm = 0;
    this.heightFt = 0;
    this.heightInch = 0;
    this.weight = 0;
    this.valueActivate = false;
  }
}
