import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { CommonfunctionProvider } from '../../providers/commonfunction/commonfunction';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  states: any = [];
  city: any = [];
  MemberInfo = {
    epin:'',
    stid: '',
    ctid: '',
    fkeponserid: '',
    name: '',
    mobile: '',
    cityname: '',
    address: '',
    pincode: '',
    adhar: '',
    ac: '',
    bank: '',
    branch: '',
    ifsc: ''
  }
  sponser = {
    code: '',
    name: '',
    type: '',


  }
  constructor(public comn: CommonfunctionProvider, public api: ApiserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getstaes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  GoToDashboard = () => {
    // this.navCtrl.s(DashboardPage);
  }
  getstaes = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getstates().subscribe((res: any) => {
      loading.dismiss();
      this.states = res;
    }, err => {
      loading.dismiss();
      console.log('registration page ' + err);
    })
  }
  getregister = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    let user={
      SponsorId:this.MemberInfo.fkeponserid,
      StateId:this.MemberInfo.stid,
      displayname:this.MemberInfo.name,
      ePinNo:this.MemberInfo.epin,
      memberAccNo:this.MemberInfo.ac,
      memberBankName:this.MemberInfo.bank,
      memberBranch:this.MemberInfo.branch,
      bankAccName:'',
      bankHolderName:'',
      iFSCCode:this.MemberInfo.ifsc,
      aadharNo:this.MemberInfo.adhar,
      address:this.MemberInfo.address,
      city:this.MemberInfo.cityname,
      mobile:this.MemberInfo.mobile,
      pinCode:this.MemberInfo.pincode

    }
    this.api.regmember(user).subscribe((res: any) => {
      loading.dismiss();
    }, err => {
      loading.dismiss();
      console.log(err);
    })
  }
  getcity = st => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getCitybyStID(st.PK_StateId).subscribe((res) => {
      loading.dismiss();
      this.city = res;
    }, error => {
      loading.dismiss();
      console.log(error);
    })
  }

  validatesponser = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.validatesponser(this.sponser.code).subscribe((res: any) => {
      loading.dismiss();
      if (res && res.length > 0) {
        this.MemberInfo.fkeponserid = res[0].FK_MemId;
        this.sponser.name = res[0].DisplayName;
        this.sponser.type = res[0].TemPermanent;
      } else {
        let alert = this.comn.createAlert('Alert!', 'Please enter valid  Sponsor code');
        alert.present();
      }
    }, error => {
      loading.dismiss();
      console.log('validate sponser error' + error);
    })
  }

}
