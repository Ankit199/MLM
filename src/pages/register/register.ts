import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";
import { ApiserviceProvider } from "../../providers/apiservice/apiservice";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  states: any = [];
  city: any = [];
  MemberInfo = {
    cerateby: "",
    epin: "",
    stid: "",
    ctid: "",
    fkeponserid: "",
    name: "",
    mobile: "",
    cityname: "",
    address: "",
    pincode: "",
    adhar: "",
    ac: "",
    bank: "",
    branch: "",
    ifsc: ""
  };
  isValid: boolean = false;
  sponser = {
    code: "",
    name: "",
    type: ""
  };
  constructor(
    public alertCtrl: AlertController,
    public comn: CommonfunctionProvider,
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log(this.navParams.get("epin"));
    this.MemberInfo.epin = this.navParams.get("epin");
    if (this.MemberInfo.epin !== "") {
      this.validateepin();
    } else {
      let alert = this.comn.createAlert("Alert!", "Activation Code not found.");
      alert.present();
    }

    this.getstaes();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  GoToDashboard = () => {
    // this.navCtrl.s(DashboardPage);
  };
  getstaes = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getstates().subscribe(
      (res: any) => {
        loading.dismiss();
        this.states = res;
      },
      err => {
        loading.dismiss();
        console.log("registration page " + err);
      }
    );
  };
  getregister = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    let user = {
      SponsorId: this.MemberInfo.fkeponserid,
      StateId: this.MemberInfo.stid,
      displayname: this.MemberInfo.name,
      ePinNo: this.MemberInfo.epin,
      memberAccNo: this.MemberInfo.ac,
      memberBankName: this.MemberInfo.bank,
      memberBranch: this.MemberInfo.branch,
      bankAccName: "NA",
      bankHolderName: "NA",
      iFSCCode: this.MemberInfo.ifsc,
      aadharNo: this.MemberInfo.adhar,
      address: this.MemberInfo.address,
      city: this.MemberInfo.ctid,
      mobile: this.MemberInfo.mobile,
      pinCode: this.MemberInfo.pincode,
      cerateby: this.MemberInfo.cerateby
    };
    let param = `SponsorId=${user.SponsorId}&
    StateId=${user.StateId}&
    displayName=${user.displayname}&
     ePinNo=${user.ePinNo}&
    memberAccNo=${user.memberAccNo}&
    memberBankName=${user.memberBankName}&
    memberBranch=${user.memberBranch}&
    bankAccName=${user.bankAccName}&
    bankHolderName=${user.bankHolderName}&
    iFSCCode=${user.iFSCCode}&
    aadharNo=${user.aadharNo}&
    address=${user.address}&
    city=${user.city}&
    mobile=${user.mobile}&
    pinCode=${user.pinCode}&
    createdBy=${user.cerateby}`;
    console.log(param);
    this.api.regmember(user).subscribe(
      (res: any) => {
        console.log(res);
        loading.dismiss();
        if (res[0].MSG == "0") {
          this.showConfirmAlert(res);
        } else {
          let alert = this.comn.createAlert("Alert!", res[0].Result);
          alert.present();
        }
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };
  getcity = st => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getCitybyStID(st.PK_StateId).subscribe(
      res => {
        loading.dismiss();
        this.city = res;
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  };

  validatesponser = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.validatesponser(this.sponser.code).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res && res.length > 0) {
          this.MemberInfo.fkeponserid = this.sponser.code; //res[0].FK_MemId;
          this.MemberInfo.cerateby = res[0].FK_MemId;
          this.sponser.name = res[0].DisplayName;
          this.sponser.type = res[0].TemPermanent;
        } else {
          let alert = this.comn.createAlert(
            "Alert!",
            "Please enter valid  Sponsor code"
          );
          alert.present();
        }
      },
      error => {
        loading.dismiss();
        console.log("validate sponser error" + error);
      }
    );
  };

  validateepin = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.validateepin(this.MemberInfo.epin).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res[0].Msg == "1") {
          let alert = this.comn.createAlert("Success !", res[0].Result);
          alert.present();
        } else {
          let alert = this.comn.createAlert("Alert !", res[0].Result);
          alert.present();
        }
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };
  reset = () => {
    this.navCtrl.pop();
  };
  showConfirmAlert = (objres: any) => {
    let alert = this.alertCtrl.create({
      title: "Success !",
      message: `Member registration was successfully.please save your loginID is ${
        objres[0].LoginId
      } and password is ${objres[0].Password} .`,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  };
}
