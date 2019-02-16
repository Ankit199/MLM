import { ApiserviceProvider } from './../../providers/apiservice/apiservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
loginform={
  user:'',
  pass:''
 
}
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToPlan=()=>{
    this.navCtrl.push(PlanPage);
  }
  GoToDashboard=()=>{
    console.log(this.loginform);
    this.api.dologin(this.loginform).subscribe((res:any)=>{
      console.log(res);
      this.navCtrl.setRoot(DashboardPage);
    })
  }
  GoToRegistration=()=>{
    this.navCtrl.push(RegisterPage);
  }
  GoToChangePassword=()=>{
    this.navCtrl.push(ForgotpasswordPage);
  }
}
