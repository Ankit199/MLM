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
import moment from "moment";
/**
 * Generated class for the PindetailsPage page.
 *moment(date).format("MM-DD-YYYY hh:mmA");
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
  product:any = [];

  epin: any = [];
  objpin = {
    fkid: "",
    pid: 0,
    pin: 0
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
    this.getproduct();
    this.reset();
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
        this.epin.forEach(x => {
          x.CreatedDate = moment(x.CreatedDate).format("DD/MM/YYYY hh:mmA");
        });
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
    this.objpin.pin = 0;
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
