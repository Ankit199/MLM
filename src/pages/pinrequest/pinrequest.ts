import { PindetailsPage } from "./../pindetails/pindetails";
import { PintransferreportPage } from "./../pintransferreport/pintransferreport";
import { PintransferPage } from "./../pintransfer/pintransfer";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SettingsProvider } from "../../providers/settings/settings";
import { CommonfunctionProvider } from "../../providers/commonfunction/commonfunction";
import { ApiserviceProvider } from "../../providers/apiservice/apiservice";

@IonicPage()
@Component({
  selector: "page-pinrequest",
  templateUrl: "pinrequest.html"
})
export class PinrequestPage {
  /** Product request Model Create Begin*/
  adet = {
    productId: [],
    noOfPins: [],
    MemId: "",
    paymentMode: "",
    chequeDDNo: "",
    chequeDDDate: "",
    bankName: "",
    createdBy: ""
  };

  /** Product Request Model Create Close */
  objepin = {
    productA: {
      product: "A",
      pin: 0,
      price: 8500,
      total: 0
    },
    productB: {
      product: "B",
      pin: 0,
      price: 9000,
      total: 0
    },
    total: 0,
    pinamount: 0,
    pmode: "Cash",
    cdbtn: "",
    cdtd: "",
    bank: ""
  };
  userref: any = "";
  isCash: boolean = true;
  constructor(
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public comn: CommonfunctionProvider,
    public setting: SettingsProvider
  ) {
    let sett = this.setting.getallSettings();
    this.userref = sett.fkmemid;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PinrequestPage");
  }
  gotopindetail = () => {
    this.navCtrl.push(PindetailsPage);
  };
  gotopintransafer = () => {
    this.navCtrl.push(PintransferPage);
  };
  gotopinreport = () => {
    this.navCtrl.push(PintransferreportPage);
  };
  pinchange = (pin: any) => {
    if (pin == "A") {
      let pins =
        this.objepin.productA.pin.toString() == ""
          ? "0"
          : this.objepin.productA.pin;
      this.objepin.productA.total = Number(pins) * this.objepin.productA.price;
      this.objepin.total =
        this.objepin.productB.total + this.objepin.productA.total;
      if (pins == "0") {
        this.objepin.productA.pin = 0;
      }
    } else if (pin == "B") {
      let pinss =
        this.objepin.productB.pin.toString() == ""
          ? "0"
          : this.objepin.productB.pin;
      this.objepin.productB.total = Number(pinss) * this.objepin.productB.price;
      this.objepin.total =
        this.objepin.productB.total + this.objepin.productA.total;
      if (pinss == "0") {
        this.objepin.productB.pin = 0;
      }
    }
  };
  getmode = () => {
    if (this.objepin.pmode == "Cash") {
      console.log("cash");
      this.isCash = true;
    } else {
      this.isCash = false;
    }
  };
  reset = () => {
    this.objepin.cdtd = "";
    this.objepin.cdbtn = "";
    this.objepin.bank = "";
    this.objepin.total = 0;
    this.objepin.productA.pin = 0;
    this.objepin.productB.pin = 0;
    this.objepin.productA.total = 0;
    this.objepin.productB.total = 0;
    this.objepin.pinamount = 0;
    this.objepin.pmode = "Cash";
    this.isCash = true;
  };

  epinrequest = () => {
    if (
      this.objepin.productA.pin.toString() !== "" ||
      this.objepin.productA.pin.toString() !== "0"
    ) {
      this.adet.productId.push("1");
      this.adet.noOfPins.push(this.objepin.productA.pin);
    }
    if (
      this.objepin.productB.pin.toString() !== "" ||
      this.objepin.productB.pin.toString() !== "0"
    ) {
      this.adet.productId.push("2");
      this.adet.noOfPins.push(this.objepin.productB.pin);
    }
    if (this.adet.noOfPins.length > 0) {
      if (this.objepin.pmode == "Cash") {
        this.adet.paymentMode = this.objepin.pmode;
      } else {
        if (this.objepin.cdbtn !== "") {
          if (this.objepin.cdtd !== "") {
            if (this.objepin.bank !== "") {
              this.adet.paymentMode = this.objepin.pmode;
              this.adet.chequeDDNo = this.objepin.cdbtn;
              this.adet.chequeDDDate =
                this.objepin.cdtd == "" ? null : this.objepin.cdtd;
              this.adet.bankName = this.objepin.bank;
            } else {
              let alert = this.comn.createAlert(
                "Alert!",
                "Plese enter Ban k Name."
              );
              alert.present();
              return;
            }
          } else {
            let alert = this.comn.createAlert(
              "Alert!",
              "Plese enter Cheque/DD Date/Transaction Date."
            );
            alert.present();
            return;
          }
        } else {
          let alert = this.comn.createAlert(
            "Alert!",
            "Plese enter Cheque/DD No/Bank Transaction No."
          );
          alert.present();
          return;
        }
      }
      let loading = this.comn.presentLoadingDefault();
      loading.present();
      this.adet.MemId = this.userref;
      this.adet.paymentMode = this.objepin.pmode;
      this.adet.chequeDDNo = this.objepin.cdbtn;
      this.adet.chequeDDDate =
        this.objepin.cdtd == "" ? null : this.objepin.cdtd;
      this.adet.bankName = this.objepin.bank;
      this.adet.createdBy = this.userref;
      this.api.epinrequest(this.adet).subscribe(
        (res: any) => {
          loading.dismiss();
          if (res) {
            this.reset();
            let alert = this.comn.createAlert(
              "Success!",
              "Pin request submit successfully."
            );
            alert.present();
          } else {
            let alert = this.comn.createAlert(
              "Error!",
              "Error Occured ! Contact to admin."
            );
            alert.present();
          }
        },
        error => {
          loading.dismiss();
          let alert = this.comn.createAlert("Error!", error.message);
          alert.present();
          console.log(error);
        }
      );
      console.log(this.adet);
    } else {
      let alert = this.comn.createAlert(
        "Alert!",
        "Please Enter Number Of Pins."
      );
      alert.present();
    }
  };
}
