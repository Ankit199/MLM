import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";
import { ApiserviceProvider } from "../../providers/apiservice/apiservice";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/mergeMapTo";
import "rxjs/add/operator/map";
import { EditprofilePage } from "../editprofile/editprofile";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  infouser: any = [];
  sub:any='';
  infousers:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiserviceProvider, public comn: CommonfunctionProvider) {
     this.infousers = this.navParams.get("info");
    /** Live Reload Data Begin */
    this.sub = Observable.interval(1000)
    .subscribe((val) => {   this.ViewProfile(this.infousers[0].FK_MemId); console.log('Profile Page Executed '); });
    /** Live Reload Data close */
  
   console.table(this.infousers.FK_MemId);
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
  editProfie=()=>{
    this.navCtrl.push(EditprofilePage,{
      'fk_memid':this.infousers.FK_MemId
    })
  }
}
