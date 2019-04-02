import { PintransferPage } from "./../pintransfer/pintransfer";
import { PinrequestPage } from "./../pinrequest/pinrequest";
import { PindetailsPage } from "./../pindetails/pindetails";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "./../../providers/settings/settings";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, DateTime } from "ionic-angular";
import { DatePicker } from '@ionic-native/date-picker';
import moment from "moment";
@IonicPage()
@Component({
  selector: "page-pintransferreport",
  templateUrl: "pintransferreport.html"
})
export class PintransferreportPage {
  objpintransfer = {
    status: "Transfer",
    product: "",
    fdate: "",
    tdate: "",
    loginID: "",
    TOloginID: ""
  };
  result: any = [];
  sett: any = [];
  constructor(
    public datePicker: DatePicker,
    public api: ApiserviceProvider,
    public setting: SettingsProvider,
    public comn: CommonfunctionProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // this.sett = this.setting.getallSettings();
    // this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
    // console.log("ionViewDidLoad PintransferreportPage");
    // this.pinTransferReport();
  }
  gotopindetail = () => {
    this.navCtrl.push(PindetailsPage);
  };
  gotopinrequest = () => {
    this.navCtrl.push(PinrequestPage);
  };
  gotopintransfer = () => {
    this.navCtrl.push(PintransferPage);
  };
  ionViewDidLoad() {
    this.sett = this.setting.getallSettings();
    this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
    console.log("ionViewDidLoad PintransferreportPage");
    this.pinTransferReport();
  }
  reset = () => {
    this.objpintransfer.status = "Transfer";
    this.objpintransfer.product = "";
    this.objpintransfer.fdate = "";
    this.objpintransfer.tdate = "";
    this.objpintransfer.loginID = "";
    this.objpintransfer.TOloginID = "";
  };

  pinTransferReport = () => {
    if(this.objpintransfer.fdate !=="" && this.objpintransfer.tdate=="" ){
      let alert = this.comn.createAlert("Alert !", "Please select valid date range.");
      alert.present();
      return;
    }else if(this.objpintransfer.fdate =="" && this.objpintransfer.tdate !=="" ){
      let alert = this.comn.createAlert("Alert !", "Please select valid date range.");
      alert.present();
      return;
    }
    this.result.length = 0;
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.pintransferreport(this.objpintransfer).subscribe(
      (res: any) => {
        loading.dismiss();
        if (res.length > 0) {
          this.result = res;
        } else {
          let alert = this.comn.createAlert("Alert !", "No Record Found.");
          alert.present();
          this.result.length = 0;
        }
      },
      err => {
        loading.dismiss();
        console.log(err);
      }
    );
  };

  showdate = (type: any) => {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        let dd:any = moment(date).format("DD/MM/YYYY");
        if (type == 'TO') {
         
          this.objpintransfer.tdate = dd.toString();
        } else if (type == 'FROM') {
          this.objpintransfer.fdate = dd.toString();
        }

       // console.log('Got date: ', d);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

};

