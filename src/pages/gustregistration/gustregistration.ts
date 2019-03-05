import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
    password: ""
  };
  constructor(
    public api: ApiserviceProvider,
    public comn: CommonfunctionProvider,
    public navCtrl: NavController,
    public navParams: NavParams
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
          this.objguest.name = "";
          this.objguest.password = "";
          let alert = this.comn.createAlert(
            "Success!",
            "Registration Successfully."
          );
          alert.present();
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
