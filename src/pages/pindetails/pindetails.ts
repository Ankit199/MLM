import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "./../../providers/settings/settings";
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
  sett: any;
  epin: any = [];
  objpin = {
    fkid: "",
    pid: 0,
    pin: 2
  };
  constructor(
    public setting: SettingsProvider,
    public comn: CommonfunctionProvider,
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.sett = this.setting.getallSettings();
    this.objpin.fkid = this.sett.dashboard[0].FK_MemId;
    console.log("ionViewDidLoad PintransferreportPage");
    console.log("ionViewDidLoad PindetailsPage");
  }
  gotoregister = (code: any = "") => {
    console.log("epin code " + code);
    this.navCtrl.push(RegisterPage, {
      epin: code
    });
  };
  epindetail = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    console.log(this.objpin);
    this.api.epindetail(this.objpin).subscribe(
      (res: any) => {
        loading.dismiss();
        this.epin = res;
        console.table(this.epin);
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  };
  reset = () => {
    this.objpin.pid = 0;
    this.objpin.pin = 2;
    this.epindetail();
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
