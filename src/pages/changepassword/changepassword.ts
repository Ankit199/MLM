import { SettingsProvider } from "./../../providers/settings/settings";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-changepassword",
  templateUrl: "changepassword.html"
})
export class ChangepasswordPage {
  objmodel = {
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
    fkid: "",
    LoginID: ""
  };
  isValid: boolean = true;
  sett: any = [];
  constructor(
    public alertCtrl:AlertController,
    public setting: SettingsProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiserviceProvider,
    public comn: CommonfunctionProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChangepasswordPage");
    this.sett = this.setting.getallSettings();

    this.objmodel.LoginID = this.sett.dashboard[0].LoginId;
    this.objmodel.fkid = this.sett.dashboard[0].FK_MemId;
    console.log("ionViewDidLoad DownlinePage");

    console.log(
      "****** Login ID *******" +
        this.sett.dashboard[0].LoginId +
        "(" +
        this.sett.dashboard[0].FK_MemId +
        ")"
    );
  }
  GoToDashboard = () => {
    this.navCtrl.push(DashboardPage);
  };
  validatepassword = () => {
    if (
      this.objmodel.newPassword2.length === this.objmodel.newPassword.length
    ) {
      if (this.objmodel.newPassword2 === this.objmodel.newPassword) {
        return true;
      } else {
        let alert = this.comn.createAlert(
          "Alert !",
          "New Password && Confirm Password  Not Matched ! "
        );
        alert.present();
        return false;
      }
    } else {
      let alert = this.comn.createAlert(
        "Alert !",
        "Password Length Not Matched ! "
      );
      alert.present();
      return false;
    }
  };
  changePassword = () => {
    if (this.validatepassword()) {
      console.table(this.objmodel);
      this.api.chanagepassword(this.objmodel).subscribe(
        res => {
          this.showConfirmAlert();
          // let alert = this.comn.createAlert(
          //   "Success !",
          //   "Password Change Successfully! "
          // );
          // alert.present(); 
        },
        err => {
          console.log(err);
        }
      );
    }
  };

  cancle = () => {
    this.navCtrl.pop();
  };
  showConfirmAlert=()=> {
    let alert = this.alertCtrl.create({
        title: 'Success !',
        message: 'Password Change Successfully!',
        buttons: [           
            {
                text: 'OK',
                handler: () => {
             this.navCtrl.setRoot(DashboardPage);
                }
            }
        ]
    });
    alert.present();
  };
}
