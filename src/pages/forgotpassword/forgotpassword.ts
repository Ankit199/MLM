import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-forgotpassword",
  templateUrl: "forgotpassword.html"
})
export class ForgotpasswordPage {
  objforgot = {
    mid: "",
    mobile: ""
  };
  constructor(
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public comn: CommonfunctionProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ForgotpasswordPage");
  }
  reset = () => {
    this.navCtrl.pop();
  };
  forgotpassword = () => {
    if (this.objforgot.mid !== "") {
      if (this.objforgot.mobile !== "") {
        let loading = this.comn.presentLoadingDefault();
        loading.present();
        this.api.forgotpasswoord(this.objforgot).subscribe(
          (res: any) => {
            loading.dismiss();
            if (res !== "0") {
              this.objforgot.mobile = "";
              this.objforgot.mid = "";
              let alert = this.comn.createAlert(
                "Success!",
                "Password send to your mobile number  successfully."
              );
              alert.present();
            } else {
              let alert = this.comn.createAlert(
                "Error!",
                "Error Occured Please contact to admin."
              );
              alert.present();
            }
          },
          error => {
            loading.dismiss();
            console.log(error);
          }
        );
      } else {
        let alert = this.comn.createAlert(
          "Alert!",
          "Please Enter Mobile Number."
        );
        alert.present();
      }
    } else {
      let alert = this.comn.createAlert("Alert!", "Please Enter  MemberID.");
      alert.present();
    }
  };
}
