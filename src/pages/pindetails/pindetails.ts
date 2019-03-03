import { PlanPage } from "./../plan/plan";
import { PintransferreportPage } from "./../pintransferreport/pintransferreport";
import { PintransferPage } from "./../pintransfer/pintransfer";
import { PinrequestPage } from "./../pinrequest/pinrequest";
import { ProductdetailPage } from "./../productdetail/productdetail";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RegisterPage } from "../register/register";

/**
 * Generated class for the PindetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pindetails",
  templateUrl: "pindetails.html"
})
export class PindetailsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PindetailsPage");
  }
  gotoregister = () => {
    this.navCtrl.push(RegisterPage);
  };

  gotopackage = () => {
    this.navCtrl.push(PlanPage);
  };
  gotopinrequest = () => {
    this.navCtrl.push(PinrequestPage);
  };
  gotopintransafer = () => {
    this.navCtrl.push(PintransferPage);
  };
  gotopinreport = () => {
    this.navCtrl.push(PintransferreportPage);
  };
}
