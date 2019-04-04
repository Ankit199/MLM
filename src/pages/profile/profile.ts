import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";
import { ApiserviceProvider } from "../../providers/apiservice/apiservice";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  infouser: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiserviceProvider, public comn: CommonfunctionProvider) {
    let infousers:any = this.navParams.get("info");
    this.ViewProfile(infousers[0].FK_MemId);
   console.table(infousers.FK_MemId);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }
  GoToDashboard = () => {
    this.navCtrl.push(DashboardPage);
  };
  ViewProfile = (memid) => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.ViewProfile(memid).subscribe((res: any) => {
      loading.dismiss();
      this.infouser = res[0];
    }, err => {
      loading.dismiss();
      console.log(err);
    })
  }
}
