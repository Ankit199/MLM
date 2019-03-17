import { PintransferPage } from "./../pintransfer/pintransfer";
import { PinrequestPage } from "./../pinrequest/pinrequest";
import { PindetailsPage } from "./../pindetails/pindetails";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "./../../providers/settings/settings";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-pintransferreport",
  templateUrl: "pintransferreport.html"
})
export class PintransferreportPage {
  objpintransfer = {
    status: "Transfer",
    product: "",
    fdate: "",
    tdate: "",
    loginID: "",
    TOloginID: ""
  };
  result: any = [];
  sett: any = [];
  constructor(
    public api: ApiserviceProvider,
    public setting: SettingsProvider,
    public comn: CommonfunctionProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // this.sett = this.setting.getallSettings();
    // this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
    // console.log("ionViewDidLoad PintransferreportPage");
    // this.pinTransferReport();
  }
  gotopindetail = () => {
    this.navCtrl.push(PindetailsPage);
  };
  gotopinrequest = () => {
    this.navCtrl.push(PinrequestPage);
  };
  gotopintransfer = () => {
    this.navCtrl.push(PintransferPage);
  };
  ionViewDidLoad() {
    this.sett = this.setting.getallSettings();
    this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
    console.log("ionViewDidLoad PintransferreportPage");
    this.pinTransferReport();
  }
  reset = () => {
    this.objpintransfer.status = "Transfer";
    this.objpintransfer.product = "";
    this.objpintransfer.fdate = "";
    this.objpintransfer.tdate = "";
    this.objpintransfer.loginID = "";
    this.objpintransfer.TOloginID = "";
  };

  pinTransferReport = () => {
    this.result.length = 0;
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.pintransferreport(this.objpintransfer).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res.length > 0) {
          this.result = res;
        } else {
          let alert = this.comn.createAlert("Alert !", "No Record Found.");
          alert.present();
          this.result = [];
        }
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };
}
