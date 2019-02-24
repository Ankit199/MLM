import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infouser = this.navParams.get("info");
    console.table(this.infouser);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }
  GoToDashboard = () => {
    this.navCtrl.push(DashboardPage);
  };
}
