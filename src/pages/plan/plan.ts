import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "./../../providers/settings/settings";
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
    public setting: SettingsProvider,
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public comn: CommonfunctionProvider,
    public navParams: NavParams
  ) {
    this.getproduct();
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
    let set = this.setting.getallSettings();
    this.isloginType = set.isloginType;
    if (this.isloginType !== "main") {
      this.fkid = set.guest[0].fkid;
    }

    console.log("ionViewDidLoad PlanPage");
  }
  requestplanA = item => {
    this.navCtrl.push(ViewpackagePage, {
      plan: item
    });
  };
  requestplanB = () => {
    this.navCtrl.push(ViewpackagePage, {
      plan: "B"
    });
  };
  getproduct = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getProduct().subscribe(
      (res: any) => {
        loading.dismiss();
        this.product = res;
        console.table(this.product);
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };
}
