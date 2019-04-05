import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/mergeMapTo";
import "rxjs/add/operator/map";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "../../providers/settings/settings";

@IonicPage()
@Component({
  selector: "page-guestdashboard",
  templateUrl: "guestdashboard.html"
})
export class GuestdashboardPage {
  Product: any = [];
  sub: any = "";
  constructor(
    public navCtrl: NavController,
    public comn: CommonfunctionProvider,
    public api: ApiserviceProvider,
    public navParams: NavParams,
    public setting: SettingsProvider
  ) {
    this.sub = Observable.interval(1000).subscribe(val => {
      this.productTrack();
      console.log("Guest Dasboard Called ");
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad GuestdashboardPage");
  }
  /* Live Reload Product  Begin */
  productTrack = () => {
    let set = this.setting.getallSettings();
    //set.guest[0].fkid
    this.api.guestProductTrack(set.guest[0].fkid).subscribe(
      (res: any) => {
        this.Product = res;
        console.log("************* PRoduct Deatail ***************");
        console.table(this.Product);
      },
      err => {
        console.log(err);
      }
    );
  };
  /* Live Reload Product END  */
}
