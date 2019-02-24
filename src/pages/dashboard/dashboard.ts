import { SettingsProvider } from "./../../providers/settings/settings";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  dashboard: any = [];
  constructor(
    public setting: SettingsProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let settingdb: any = this.setting.getallSettings();

    this.dashboard = settingdb.dashboard;
    console.table(this.dashboard);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }
}
