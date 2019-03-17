import { ViewpackagePage } from "./../viewpackage/viewpackage";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";

/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plan",
  templateUrl: "plan.html"
})
export class PlanPage {
  product: any = [];
  isloginType: any = "";
  fkid: any = "";
  constructor(
    public events: Events,
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    //this.getproduct();
    this.events.subscribe("isloginType", islogin => {
      console.log(islogin);
      this.isloginType = islogin;
    });
    this.events.subscribe("userinfo", user => {
      if (this.isloginType == "main") {
      } else {
        this.fkid = user[0].fkid;
      }
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlanPage");
  }
  requestplanA = () => {
    this.navCtrl.push(ViewpackagePage, {
      plan: "A"
    });
  };
  requestplanB = () => {
    this.navCtrl.push(ViewpackagePage, {
      plan: "B"
    });
  };
  getproduct = () => {
    this.api.getProduct().subscribe(
      (res: any) => {
        this.product = res;
        console.table(this.product);
      },
      err => {
        console.log(err);
      }
    );
  };
}
