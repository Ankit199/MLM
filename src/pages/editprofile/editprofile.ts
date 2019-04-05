import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-editprofile",
  templateUrl: "editprofile.html"
})
export class EditprofilePage {
  infouser: any = [];
  sub: any = "";
  infousers: any = "";
  states: any = [];
  city: any = [];
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiserviceProvider,
    public comn: CommonfunctionProvider
  ) {
    this.getstaes();
    this.infousers =
      this.navParams.get("fk_memid") == undefined
        ? ""
        : this.navParams.get("fk_memid");
    if (this.infousers !== "") {
      this.ViewProfile(this.infousers);
    } else {
      this.navCtrl.pop();
    }
  }
  /** State AND City Bind Begin*/
  getstaes = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getstates().subscribe(
      (res: any) => {
        loading.dismiss();
        this.states = res;
      },
      err => {
        loading.dismiss();
        console.log("registration page " + err);
      }
    );
  };

  getcity = st => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getCitybyStID(st.PK_StateId).subscribe(
      res => {
        loading.dismiss();
        this.city = res;
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  };
  /** State AND City Bind CLose */
  ionViewDidLoad() {
    console.log("ionViewDidLoad EditprofilePage");
  }
  GoToDashboard = () => {
    this.navCtrl.push(DashboardPage);
  };
  ViewProfile = memid => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.ViewProfile(memid).subscribe(
      (res: any) => {
        loading.dismiss();
        this.infouser = res;
        this.getcity({ PK_StateId: this.infouser[0].StateId });
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };
  updateProfile = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    console.log("*********** Update Profile Data **********");
    console.table(this.infouser);
    let Update = {
      MemId: this.infousers,
      StateId: this.infouser[0].StateId,
      address: this.infouser[0].Address,
      city: this.infouser[0].CityId,
      pinCode: this.infouser[0].PinCode,
      memberBankName: this.infouser[0].MemberBankName,
      memberBranch: this.infouser[0].MemberBranch,
      memberAccNo: this.infouser[0].MemberAccNo,
      bankAccName: this.infouser[0].FirstName,
      iFSCCode: this.infouser[0].IFSCCode,
      aadharNo: this.infouser[0].AddharNo,
      displayName: this.infouser[0].FirstName,
      mobile: this.infouser[0].PMobile,
      updatedBy: this.infousers
    };
    this.api
      .updateProfille(Update)
      .then(res => {
        loading.dismiss();
        if (res) {
          this.showConfirmAlert();
        } else {
          let alert = this.comn.createAlert(
            "Alert !",
            "Some Problem occured please try again later!."
          );
          alert.present();
        }
      })
      .catch(err => {
        loading.dismiss();
        console.log(err);
      });
  };
  showConfirmAlert = () => {
    let alert = this.alertCtrl.create({
      title: "Success !",
      message: `Profile updated successfully! `,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  };
}
