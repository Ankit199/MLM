import { CommonfunctionProvider } from "./../../providers/commonfunction/commonfunction";
import { SettingsProvider } from "./../../providers/settings/settings";
import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";
import { File } from "@ionic-native/file";
import * as XLSX from "xlsx";

@IonicPage()
@Component({
  selector: "page-downline",
  templateUrl: "downline.html"
})
export class DownlinePage {
  data: any = [];
  objmodel = {
    fdate: "",
    tdate: "",
    status: "All",
    Fkpid: 0,
    loginId: ""
  };
  sett: any;
  constructor(
    public comn: CommonfunctionProvider,
    public setting: SettingsProvider,
    public file: File,
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiserviceProvider
  ) {}

  getdownline = () => {};
  ionViewDidLoad() {
    this.sett = this.setting.getallSettings();

    this.objmodel.loginId = this.sett.dashboard[0].LoginId;
    console.log("ionViewDidLoad DownlinePage");
    this.FetchReport();
    console.log("****** Login ID *******" + this.sett.dashboard[0].LoginId);
  }
  GoToDashboard = () => {
    this.navCtrl.push(DashboardPage);
  };
  GetReport = () => {
    if (this.objmodel.fdate !== "" && this.objmodel.tdate == "") {
      let alert = this.comn.createAlert("Alert !", "Please Select To Date  ");
      alert.present();
      return;
    } else if (this.objmodel.fdate == "" && this.objmodel.tdate !== "") {
      let alert = this.comn.createAlert("Alert !", "Please Select From Date  ");
      alert.present();
      return;
    }
    console.table(this.objmodel);
    this.FetchReport();
  };

  FetchReport = () => {
    let loading = this.comn.presentLoadingDefault();
    loading.present();
    this.api.getDownline(this.objmodel).subscribe(
      (downline: any) => {
        loading.dismiss();
        if (downline.length > 0) {
          this.data = downline;
          console.log("********** Fetching Downline ************");
          console.table(this.data);
        } else {
          this.data.length = 0;
          let alert = this.comn.createAlert("Alert !", "No Record Found ! ");
          alert.present();
        }
      },
      error => {
        loading.dismiss();
        let alert = this.comn.createAlert("Error !", "Somthing Going Wrong ! ");
        alert.present();
        console.log(error);
      }
    );
  };
  Reset = () => {
    this.objmodel.fdate = "";
    this.objmodel.tdate = "";
    this.objmodel.status = "All";
    this.objmodel.Fkpid = 0;
    this.FetchReport();
  };
  /** Exxcel import  */

  getStoragePath() {
    let file = this.file;
    return this.file
      .resolveDirectoryUrl(this.file.externalRootDirectory)
      .then(function(directoryEntry) {
        return file
          .getDirectory(directoryEntry, "Ionic2ExportToXLSX", {
            create: true,
            exclusive: false
          })
          .then(function() {
            return directoryEntry.nativeURL + "Ionic2ExportToXLSX/";
          });
      });
  }

  OnExport = function() {
    let sheet = XLSX.utils.json_to_sheet(this.data);
    let wb = {
      SheetNames: ["export"],
      Sheets: {
        export: sheet
      }
    };

    let wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: false,
      type: "binary"
    });

    function s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }

    let blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    let self = this;
    this.getStoragePath().then(function(url) {
      self.file
        .writeFile(url, "export.xlsx", blob, true)
        .then(() => {
          alert("file created at: " + url);
        })
        .catch(() => {
          alert("error creating file at :" + url);
        });
    });
  };

  /*End */
}
