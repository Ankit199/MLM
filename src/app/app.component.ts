import { PindetailsPage } from './../pages/pindetails/pindetails';
import { ProfilePage } from './../pages/profile/profile';
import { DownlinePage } from './../pages/downline/downline';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { PlanPage } from '../pages/plan/plan';
import { BonuspointPage } from '../pages/bonuspoint/bonuspoint';
import { UphaarPage } from '../pages/uphaar/uphaar';
import { RulesPage } from '../pages/rules/rules';
import { ContactusPage } from '../pages/contactus/contactus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; 
  username:any='';
  info:any=[];
  @ViewChild('content') navCtrl: NavController
  constructor(public events: Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#ffffff');
      splashScreen.hide();

      this.events.subscribe('userinfo', (user) => {
        console.table(user);
        this.info=user;
        this.username=user[0].Title+' ' +user[0].DisplayName;
      });
    });
  }
  
  GoToPlan=()=>{
    this.navCtrl.push(PlanPage);
  }
  GotoViewProfile=()=>{
    this.navCtrl.push(ProfilePage,{
      'info':this.info
    });
  }
  GoTopin=()=>{
    this.navCtrl.push(PindetailsPage);
  }
  GoToDownline=()=>{
    this.navCtrl.push(DownlinePage);
  }
  GoTocpass=()=>{
    this.navCtrl.push(ChangepasswordPage);
  }
  GoToDashboard=()=>{
    this.navCtrl.setRoot(DashboardPage);
  }
  GoToUphaar=()=>{
    this.navCtrl.push(UphaarPage);
  }
  GoToContact=()=>{
    this.navCtrl.push(ContactusPage);
  }
  GoTologin=()=>{
    this.navCtrl.push(LoginPage);
  }
  GoToRules=()=>{
    this.navCtrl.push(RulesPage);
  }
  GoToBonus=()=>{
    this.navCtrl.push(BonuspointPage);
  }
}

