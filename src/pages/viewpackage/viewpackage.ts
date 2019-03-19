import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ViewpackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-viewpackage",
  templateUrl: "viewpackage.html"
})
export class ViewpackagePage {
  title: any = "View package";
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let values =
      this.navParams.get("plan") == undefined
        ? "C"
        : this.navParams.get("plan");
    console.log(values);
    if (values == "A") {
      this.title = "Request For Plan A 8500";
    } else if (values == "B") {
      this.title = "Request For Plan B 9000";
    } else {
      this.navCtrl.pop();
    }
  }
  getmode = () => {
    if (this.objepin.pmode == "Cash") {
      console.log("cash");
      this.isCash = true;
    } else {
      this.isCash = false;
    }
  };
  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewpackagePage");
  }
}
