import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-health-kit',
  templateUrl: 'health-kit.html',
})
export class HealthKitPage {

  bmiValue: number = 0;
  BMIValueForGauge = Math.round(0 * 180 / 100) - 45;
  isCm = true;
  isKg = true;
  heightCm: number;
  heightFt: number;
  heightInch: number;
  weight: number;
  bmiType: string = "";

  constructor(public navCtrl: NavController) { }


  getBMI() {
    this.BMIValueForGauge = Math.round((this.bmiValue * 2) * 180 / 100) - 45;
    console.log(this.BMIValueForGauge)
    return 'rotate(' + this.BMIValueForGauge + 'deg)';
  }

  calculateBMI() {
    let heightInCm = (this.isCm) ? this.heightCm : this.inchConvertToCm(this.heightFt, this.heightInch)
    let weightInKg = (this.isKg) ? this.weight : this.lblConvertTokg(this.weight);
    if (heightInCm != null && weightInKg != null)
      this.calculateUSCunits(weightInKg, heightInCm);
  }

  calculateUSCunits(weight, heightCm) {
    this.bmiValue = (weight) / ((heightCm / 100) * (heightCm / 100));
    if (this.bmiValue < 18.5) {
      this.bmiType = "Under Weight"
    } else if (this.bmiValue < 24.9) {
      this.bmiType = "Normal Weight"
    } else if (this.bmiValue < 29.9) {
      this.bmiType = "Over Weight"
    } else if (this.bmiValue < 30) {
      this.bmiType = "Obese"
    } else if (this.bmiValue < 34.9) {
      this.bmiType = "Obese I" 
    } else if (this.bmiValue < 39.9) {
      this.bmiType = "Obese II"
    } else {
      this.bmiType = "Obese III"
    }  
  }

  private lblConvertTokg(weightInLbs) {
    return weightInLbs * 0.45359237;
  }

  private inchConvertToCm(heightFt, heightInch) {
    const totalInch = heightFt * 12 + parseInt(heightInch);
    return totalInch * 2.54;
  }
}
