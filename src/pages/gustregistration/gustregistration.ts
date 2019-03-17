import { GuestdashboardPage } from "./../guestdashboard/guestdashboard";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";

/**
 * Generated class for the GustregistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-gustregistration",
  templateUrl: "gustregistration.html"
})
export class GustregistrationPage {
  objguest = {
    name: "",
    password: "",
    fkid: ""
  };
  constructor(
    public api: ApiserviceProvider,
    public comn: CommonfunctionProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public setting: SettingsProvider,
    public events: Events
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GustregistrationPage");
  }
  gotologin = () => {
    this.navCtrl.pop();
  };
  register = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    console.table(this.objguest);
    this.api.GuestRegistration(this.objguest).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res) {
          this.objguest.fkid = res;
          let result = [];
          result.push(this.objguest);
          console.log("***Guest Result ****" + result);
          this.events.publish("isloginType", "guest");
          this.events.publish("userinfo", result);
          this.objguest.name = "";
          this.objguest.password = "";

          this.navCtrl.setRoot(GuestdashboardPage);
        } else {
          let alert = this.comn.createAlert("Error!", res.Message);
          alert.present();
        }
      },
      error => {
        loading.dismiss();

        let alert = this.comn.createAlert("Error!", error.error.Message);
        alert.present();
      }
    );
  };
}
