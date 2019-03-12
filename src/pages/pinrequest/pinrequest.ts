import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-pinrequest",
  templateUrl: "pinrequest.html"
})
export class PinrequestPage {
  objepin = {
    productA: {
      product: "A",
      pin: 0,
      price: 8500,
      total: 8500
    },
    productB: {
      product: "B",
      pin: 0,
      price: 9000,
      total: 9000
    },
    total: 17500
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PinrequestPage");
  }
}
