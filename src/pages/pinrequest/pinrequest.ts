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
      total: 0
    },
    productB: {
      product: "B",
      pin: 0,
      price: 9000,
      total: 0
    },
    total: 0,
    pinamount: 0,
    pmode: "Cash",
    cdbtn: "",
    cdtd: "",
    bank: ""
  };
  isCash: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PinrequestPage");
  }
  pinchange = (pin: any) => {
    if (pin == "A") {
      let pins =
        this.objepin.productA.pin.toString() == ""
          ? "0"
          : this.objepin.productA.pin;
      this.objepin.productA.total = Number(pins) * this.objepin.productA.price;
      this.objepin.total =
        this.objepin.productB.total + this.objepin.productA.total;
      if (pins == "0") {
        this.objepin.productA.pin = 0;
      }
    } else if (pin == "B") {
      let pinss =
        this.objepin.productB.pin.toString() == ""
          ? "0"
          : this.objepin.productB.pin;
      this.objepin.productB.total = Number(pinss) * this.objepin.productB.price;
      this.objepin.total =
        this.objepin.productB.total + this.objepin.productA.total;
      if (pinss == "0") {
        this.objepin.productB.pin = 0;
      }
    }
  };
  getmode = () => {
    if (this.objepin.pmode == "Cash") {
      console.log("cash");
      this.isCash = true;
    } else {
      this.isCash = false;
    }
  };
  reset = () => {
    this.objepin.total = 0;
    this.objepin.pinamount = 0;
    this.objepin.pmode = "Cash";
    this.isCash = true;
  };
}
