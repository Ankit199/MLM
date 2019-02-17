import { SettingsProvider } from './../../providers/settings/settings';
import { CommonfunctionProvider } from './../../providers/commonfunction/commonfunction';
import { ApiserviceProvider } from './../../providers/apiservice/apiservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, Events } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { PlanPage } from '../plan/plan';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginform = {
    user: '',
    pass: ''

  }
  constructor(public events: Events, public setting: SettingsProvider, public comn: CommonfunctionProvider, public navCtrl: NavController, public navParams: NavParams, public api: ApiserviceProvider) {
    this.setting.load().then(res => {
    console.log('setting initialized');
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToPlan = () => {
    this.navCtrl.push(PlanPage);
  }
  GoToDashboard = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    
    this.api.dologin(this.loginform).subscribe((res: any) => {
      if (res[0].UserType !== 'Fake') {
        if (!res[0].IsBlocked) {
          loading.dismiss();         
          this.events.publish('userinfo', res)
          this.setting.setValue('fkmemid', res[0].FK_MemId);
          this.setting.setValue('dashboard', res);
          this.navCtrl.setRoot(DashboardPage);
        } else {
          let alert = this.comn.createAlert('Success!', 'User is blocked due to company policy ! please contact to your head vision.');
          alert.present();
        }

      } else {
        loading.dismiss();
        let alert = this.comn.createAlert('Alert!', 'MemberID and Password not valid. please check and try again.');
        alert.present();
      }

    })
  }
  GoToRegistration = () => {
    this.navCtrl.push(RegisterPage);
  }
  GoToChangePassword = () => {
    this.navCtrl.push(ForgotpasswordPage);
  }
}
