import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/mergeMapTo";
import "rxjs/add/operator/map";
/**
 * Generated class for the GuestdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-guestdashboard",
  templateUrl: "guestdashboard.html"
})
export class GuestdashboardPage {
  constructor(
    public navCtrl: NavController,
    public api: ApiserviceProvider,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GuestdashboardPage");
  }
  //guestProductTrack
  /* Live Reload Product  */
}
