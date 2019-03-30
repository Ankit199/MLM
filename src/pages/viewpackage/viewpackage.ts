import { SettingsProvider } from "./../../providers/settings/settings";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";

/**
 * Generated class for the ViewpackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-viewpackage",
  templateUrl: "viewpackage.html"
})
export class ViewpackagePage {
  title: any = "View package";
  dispatch: any = 1;
  isDispatch: boolean = false;
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
      price: 4500,
      total: 0
    },
    total: 0,
    pinamount: 0,
    pmode: "Cash",
    cdbtn: "",
    cdtd: "",
    bank: ""
  };
  MemberInfo = {
    isHomeDelivery: false,
    productId: [],
    noOfPins: [],
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
  isCash: boolean = true;
  states: any = [];
  city: any = [];
  constructor(
    public events: Events,
    public setting: SettingsProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public comn: CommonfunctionProvider,
    public api: ApiserviceProvider
  ) {
    let values: any =
      this.navParams.get("plan") == undefined ? [] : this.navParams.get("plan");
    console.log(values);
    if (values !== undefined) {
      this.title = values.ProductName;
      this.MemberInfo.productId.push(values.PK_ProductId);
      this.MemberInfo.noOfPins.push("1");
      this.objepin.pinamount = values.ProductPrice;
    }
  }
  getmodedispacth = () => {
    if (this.dispatch == "1") {
      this.isDispatch = false;
    } else {
      this.isDispatch = true;
      this.getstaes();
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
  ionViewDidLoad() {
    let set = this.setting.getallSettings();
    console.log("***********Guest Package ***************");
    console.log(set);
    this.MemberInfo.fkeponserid = set.guest[0].fkid;
    console.log("ionViewDidLoad ViewpackagePage");
  }
  reset = () => {
    this.navCtrl.pop();
  };
  validate = () => {
    if (this.isDispatch) {
      if (this.MemberInfo.name !== "") {
        if (this.MemberInfo.mobile !== "") {
          if (this.MemberInfo.address !== "") {
            if (this.MemberInfo.stid !== "") {
              if (this.MemberInfo.ctid !== "") {
                return true;
              } else {
                let alert = this.comn.createAlert(
                  "Alert!",
                  `Please Select District !.`
                );
                alert.present();
                return false;
              }
            } else {
              let alert = this.comn.createAlert(
                "Alert!",
                `Please Select State !.`
              );
              alert.present();
              return false;
            }
          } else {
            let alert = this.comn.createAlert(
              "Alert!",
              `Please Enter address!.`
            );
            alert.present();
            return false;
          }
        } else {
          let alert = this.comn.createAlert(
            "Alert!",
            `Please Enter mobile number!.`
          );
          alert.present();
          return false;
        }
      } else {
        let alert = this.comn.createAlert("Alert!", `Please Enter Name!.`);
        alert.present();
        return false;
      }
    } else {
      return true;
    }
  };
  validatepayment = () => {
    if (this.objepin.pmode !== "Cash") {
      if (this.objepin.cdbtn !== "") {
        if (this.objepin.cdtd !== "") {
          if (this.objepin.bank !== "") {
            return true;
          } else {
            let alert = this.comn.createAlert(
              "Alert!",
              `Please Enter Bank Name!.`
            );
            alert.present();
            return false;
          }
        } else {
          let alert = this.comn.createAlert(
            "Alert!",
            `Please Entercheck/dd/transaction date!.`
          );
          alert.present();
          return false;
        }
      } else {
        let alert = this.comn.createAlert(
          "Alert!",
          `Please Enter check/dd/transaction number!.`
        );
        alert.present();
        return false;
      }
    } else {
      return true;
    }
  };
  guestProductRequest = () => {
    if (this.validate()) {
      if (this.validatepayment()) {
        let loading = this.comn.presentLoadingDefault();
        loading.present();
        const adet = {
          productId: this.MemberInfo.productId,
          noOfPins: this.MemberInfo.noOfPins,
          MemId: this.MemberInfo.fkeponserid,
          paymentMode: this.objepin.pmode,
          chequeDDNo: this.objepin.cdbtn,
          chequeDDDate: this.objepin.cdtd,
          bankName: this.objepin.bank,
          createdBy: this.MemberInfo.fkeponserid,
          isHomeDelivery: this.isDispatch
        };
        const Addrs = {
          Name: this.MemberInfo.name,
          Mobile: this.MemberInfo.mobile,
          AlternateNo: null,
          Address: this.MemberInfo.address,
          City: this.MemberInfo.ctid,
          State: this.MemberInfo.stid,
          PinCode: this.MemberInfo.pincode,
          Landmarks: this.MemberInfo.stid,
          Isdeleted: false,
          Createdby: this.MemberInfo.fkeponserid
        };
        const data = {
          epin: adet,
          dAddrs: Addrs
        };
        console.log("****************** Guest Form Submit **********");
        console.log(data);
        console.table(data);
        this.api.GuestproductRegistration(JSON.stringify(data)).subscribe(
          (res: any) => {
            loading.dismiss();
            console.log(res);
            if (res[0].Msg == "1") {
              let alert = this.comn.createAlert(
                "Success !",
                `Product request was successfully. your request no. for  ${
                  res[0].Product
                }  is ${res[0].EpinRequestNo} .`
              );
              alert.present();
              this.navCtrl.pop();
            } else {
              let alert = this.comn.createAlert(
                "Error !",
                `Error Occured Please contact to admin!.`
              );
              alert.present();
            }
          },
          err => {
            loading.dismiss();
            console.log(err);
            let alert = this.comn.createAlert(
              "Error !",
              `${err.error.Message}`
            );
            alert.present();
          }
        );
      }
    }
  };
}
