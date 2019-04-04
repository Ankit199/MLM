import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/mergeMapTo";
import "rxjs/add/operator/map";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "../../providers/settings/settings";
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
  Product:any=[];
  constructor(
    public navCtrl: NavController,
    public comn: CommonfunctionProvider,
    public api: ApiserviceProvider,
    public navParams: NavParams,
    public setting : SettingsProvider
  ) {this.productTrack();}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GuestdashboardPage");
  }
  //guestProductTrack
  /* Live Reload Product  */
  productTrack=()=>{
    let set = this.setting.getallSettings();
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.guestProductTrack(set.guest[0].fkid).subscribe((res:any)=>{
      loading.dismiss();
      this.Product=res;
      console.log('************* PRoduct Deatail ***************');
      console.table(this.Product);
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
}
