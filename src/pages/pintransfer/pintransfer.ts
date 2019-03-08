import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";

/**
 * Generated class for the PintransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pintransfer",
  templateUrl: "pintransfer.html"
})
export class PintransferPage {
  sett: any = "";
  objpinmodel = {
    totalpins: "0",
    fkid: "",
    act: "",
    tid: "",
    fcname: "",
    pt: "",
    loginid: "",
    trnsfrdetail: {
      FK_MemId: "",
      DisplayName: "",
      TemPermanent: ""
    }
  };
  constructor(
    public setting: SettingsProvider,
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public comn: CommonfunctionProvider
  ) {
    //   this.countpin();
    this.sett = this.setting.getallSettings();
  }

  ionViewDidLoad() {
    this.sett = this.setting.getallSettings();
    this.objpinmodel.fkid = this.sett.dashboard[0].FK_MemId;
    console.log("ionViewDidLoad PintransferPage");
  }

  countpin = pid => {
    this.objpinmodel.act = pid;
    console.table(this.objpinmodel);
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    let obj = {
      pid: pid,
      fkid: this.objpinmodel.fkid
    };
    console.table(obj);
    this.api.countPins(obj).subscribe(
      (res: any) => {
        loading.dismiss();
        this.objpinmodel.totalpins = res;
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  };
  validatepinid = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.validatepinid(this.objpinmodel.loginid).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res.length > 0) {
          this.objpinmodel.trnsfrdetail.FK_MemId = res[0].FK_MemId;
          this.objpinmodel.trnsfrdetail.DisplayName = res[0].DisplayName;
          this.objpinmodel.trnsfrdetail.TemPermanent = res[0].TemPermanent;
        } else {
          let alert = this.comn.createAlert(
            "Error!",
            "Please Enter Valid LoginID."
          );
          alert.present();
        }
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  };
  transferpin = () => {
    let obj = {
      fkid: this.objpinmodel.fkid,
      tmid: this.objpinmodel.trnsfrdetail.FK_MemId,
      pid: this.objpinmodel.act,
      pin: this.objpinmodel.pt
    };
    this.api.transferpin(obj).subscribe(
      (res: any) => {
        if (res == 1) {
        } else {
          let alert = this.comn.createAlert(
            "Error!",
            "Error Occured. Contact to admin"
          );
          alert.present();
        }
      },
      error => {
        console.log(error);
      }
    );
  };
}
