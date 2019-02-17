import { SettingsProvider } from './../../providers/settings/settings';
import { CommonfunctionProvider } from './../../providers/commonfunction/commonfunction';
import { ApiserviceProvider } from './../../providers/apiservice/apiservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the BonuspointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bonuspoint',
  templateUrl: 'bonuspoint.html',
})
export class BonuspointPage {
userref:any='';
rewardlist:any=[];
  constructor(public api:ApiserviceProvider,public comn:CommonfunctionProvider,public settinf:SettingsProvider,public navCtrl: NavController, public navParams: NavParams) {
  let setting =this.settinf.getallSettings();
  this.userref=setting.fkmemid;
  this.getreqwardlist(); 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonuspointPage');
  }
  GoToDashboard=()=>{
    this.navCtrl.push(DashboardPage);
  }
  getreqwardlist=()=>{
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getReward(this.userref).subscribe((rewards:any)=>{
      loading.dismiss();
     this.rewardlist=rewards;
     console.table(this.rewardlist)
    },err=>{
loading.dismiss();
    })
  }
}
